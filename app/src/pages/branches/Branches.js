import React, {useEffect, useState} from 'react'
import {Maps1} from '@sgabskit/w-maps'
import {styled} from '@sgabskit/theme'
import {Carousel2} from '@sgabskit/w-carousel'
import ErrorState from '../../features/error/ErrorState';
import SideBar from '../../features/branches/Sidebar';
import Button from '@sgabskit/button';
import isEmpty from 'lodash.isempty';
import MarkerWindowInfo from '../../features/branches/MarkerWindowInfo';
import Modal from '@sgabskit/modal';
import {BRANCH_ATM, BRANCH_BRANCH, CODE_COUNTRY, GEO_PERMISSION} from '../../components/commons/Constants';
import * as store from '@sgabskit/local-storage';
import Commons from '../../components/commons/Commons';
import {  Card, Divider, Image, Placeholder } from 'semantic-ui-react'

//---------------------------------------------------------------

const ICONS = {
  atm: {url: require('./img/Black_DAB_PEN.svg'), scaledSize: {width: 25, height: 31}},
  branch: {url: require('./img/icon_agence.svg'), scaledSize: {width: 25, height: 31}},
  user: {url: require('./img/ic_user_location@2x.png'), scaledSize: {width: 20, height: 26}},
  logo: require('./img/icon_cercle.svg'),
  modal_icon_branch: require('./img/agence-popup.svg'),
  modal_icon_atm: require('./img/atm-popup.svg'),
  arrowLeft: require('./img/Left_arrow.svg'),
  arrowRight: require('./img/Right_arrow.svg'),
  user_localisation: require('./img/icon_user_position.svg'),
}

const createMarker = (prefix, item, icon, index, iconModal) => ({
  id: `${prefix}-${index}`,
  position: {lat: parseFloat(item.location.split(',')[0]), lng: parseFloat(item.location.split(',')[1])},
  icon,
  iconModal,
  title: item.name,
  description: item.address,
  details: {
    fax: item.fax,
    phone: item.phone
  },
  function: (showItinerary) => {
    return showItinerary
  },
  content: (marker, showItinerary, userMarker,close) => (
    <MarkerWindowInfo marker={marker} showItinerary={showItinerary} userMarker={userMarker} close={close}/>)
})

function func() {
  return null;
}

export default ({router, service}) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLocation, setIsOpenLocation] = useState(false);

  const [functionShowItinerary, setFunctionShowItinerary] = useState(() => func);
  const [activeMarker, setActiveMarker] = useState(null);
  const [activeBranches, setActiveBranches] = useState(true);
  const [activeAtms, setActiveAtms] = useState(true);
  const [markers, setMarkers] = useState([])
  const [markersFiltred, setMarkersFiltred] = useState([])
  const [userMarker, setUserMarker] = useState(null);
  const [centerMap, setCenterMap] = useState(null);


  useEffect(() => {
    //get user location coords
    let codeCountry = store.get(CODE_COUNTRY);
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserMarker({lat: position.coords.latitude, lng: position.coords.longitude});
      setCenterMap({lat: position.coords.latitude, lng: position.coords.longitude});
    });
    navigator.permissions.query({name: GEO_PERMISSION}).then(function (status) {
      if (status.state === 'denied') {
        let userMarker = Commons.getCenterCountry(codeCountry)
        setCenterMap({lat: userMarker.center.lat, lng: userMarker.center.lng})
      }
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserMarker({lat: position.coords.latitude, lng: position.coords.longitude});
        setCenterMap({lat: position.coords.latitude, lng: position.coords.longitude});
      });
    });
    setLoading(true)
    codeCountry ? load(codeCountry) : router.redirect('/countries');
    //load();
  }, [])

  const load = (code) => {
    service.loadBranches(code).then((data) => {
      const _branches = (data || []).map((b, index) => createMarker(BRANCH_BRANCH, b, ICONS.branch, index, ICONS.modal_icon_branch))
      service.loadAtms(code).then((data) => {
        const _atms = (data || []).map((b, index) => createMarker(BRANCH_ATM, b, ICONS.atm, index,ICONS.modal_icon_atm));
        setMarkers(_branches.concat(_atms))
        setMarkersFiltred(_branches.concat(_atms))
      }).catch((error) => {
        setError(true);
      })
    }).catch((error) => {
      setError(true);
    })
  }

  const sortedMarkersByDistance = (locations, showItinerary) => {
    let sortedLocationsByDistance = [].concat(locations).sort((a, b) => {
      if (a.distance < b.distance) return -1
    })
    setFunctionShowItinerary(() => showItinerary);
    setMarkers(sortedLocationsByDistance);
    setMarkersFiltred(sortedLocationsByDistance);
  }

  const filterMarkers = (type) => {
    let filter = {atm: activeAtms, branch: activeBranches}
    if (activeBranches && type === BRANCH_ATM) {
      filter = {...filter, atm: !activeAtms}
    } else if (!activeBranches && activeAtms && type === BRANCH_ATM) {
      filter = {...filter, atm: false, branch: true}
    } else if (activeAtms && type === BRANCH_BRANCH) {
      filter = {...filter, branch: !activeBranches}
    } else if (activeBranches && !activeAtms && type === BRANCH_BRANCH) {
      filter = {...filter, atm: true, branch: false}
    }
    setActiveBranches(filter.branch)
    setActiveAtms(filter.atm)
    setMarkersFiltred(filter.atm && filter.branch ? markers : [...markers.map(item => item).filter(item => item.id.startsWith(filter.atm ? BRANCH_ATM : BRANCH_BRANCH))])
  }

  const selectedMarker = (marker) => {
    setCenterMap(marker.position)
    setActiveMarker(marker);
    setIsOpen(true);
  }

  const close =()=>{
    setIsOpen(false)
  }

  return (
    <BranchContainer>
      <ErrorState status={error}>
        <div>
          {isOpen && <Modal openModal={isOpen} close={() => close()} closeParam={false}>
            {activeMarker.content(activeMarker, functionShowItinerary, userMarker,close)}
          </Modal>
          }
          <FilterContainer>
            {!isEmpty(markersFiltred) &&
            <SideBar markers={markersFiltred} activeBranches={activeBranches}
                     activeAtms={activeAtms} selectedMarker={selectedMarker} filterMarkers={filterMarkers}/>}
          </FilterContainer>

          {!isEmpty(markersFiltred) &&
          <Maps1
            center={centerMap}
            windowInfo={<MarkerWindowInfo/>}
            sortedMarkersByDistance={sortedMarkersByDistance}
            markers={markersFiltred}
            userMarker={{icon: ICONS.user, position: userMarker}}
            defaultZoom={15}
            settings={{key: "", librairies: 'places,geometry,geocode'}}/>
          }
          <div>
            {userMarker && <UserLocation onClick={() => setCenterMap({...userMarker})}>
              <img src={ICONS.user_localisation} alt=""/>
            </UserLocation>
            }
          </div>
        </div>
      </ErrorState>
    </BranchContainer>
  )
}

const BranchContainer = styled.div`
.iZESxR{
    margin-top: 1000px!important;
}
`
const UserLocation = styled(Button)`
position: absolute !important;
top:50%;
right:0;
 margin-top:0px!important;
 float:right !important;
  .img {
      width: 30px;
      height: 30px;
  }
  background-color: transparent !important;
  @media (max-width: 425px) {  
  }
  @media (min-width: 1728px){
  }
`

const FilterContainer = styled.div`
.ui.icon.input > input { 
  width: 250px;   
  border-radius:6px!important;
}
`

