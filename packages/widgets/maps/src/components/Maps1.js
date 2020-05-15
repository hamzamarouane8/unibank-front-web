import React, {useEffect, useState} from 'react'
import {styled} from '@sgabskit/theme'
import get from 'lodash.get';
import {Math} from '@sgabskit/commons';
import Modal from '@sgabskit/modal'
import isObject from 'lodash.isobject'
import isString from 'lodash.isstring';
import {DirectionsRenderer, GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
//------------------------------------------------

//------------------------------------------------

//TODO do review one more time for calcul distance , if there is a better way
const calcDistance = (locations, userMarker) => {
  const google = window.google;
  var p1, p2;
  locations.forEach(function (obj) {
    p1 = new google.maps.LatLng(obj.position.lat, obj.position.lng);
    p2 = new google.maps.LatLng(userMarker.position.lat, userMarker.position.lng);
    var distance = (window.google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    obj.distance = parseFloat(distance.replace(",", "."));
    obj.distanceWalking = Math.metreToKilometre(obj.distance);
    obj.distanceDriving = Math.metreToKilometre(obj.distance);
  }, this);
  return locations
}


const MapMarker = ({position, onClick, open, children, closeInfo, icon, options}) => (
  <Marker position={position} onClick={onClick} icon={icon} options={options}>
    {open && (
      <Modal openModal={open} close={closeInfo} closeParam={false}>
        {children}
      </Modal>
    )}
  </Marker>
)

const Map = withScriptjs(withGoogleMap(({center, userMarker, defaultZoom, markers, sortedMarkersByDistance}) => {

  const [activeMarker, setActiveMarker] = useState(null);
  const [centerMap, setCenterMap] = useState(center);
  const [directions, setDirections] = useState(null);
  const [itinerary, setItinerary] = useState(false);


  function drawItinerary(option) {
    const directionsService = new google.maps.DirectionsService();
    const destination = {lat: 33.596804, lng: -7.629622};
    let travelMode = option === 'DRIVING' ? google.maps.TravelMode.BICYCLING : google.maps.TravelMode.WALKING;
    {
      userMarker && destination && directionsService.route({
          origin: userMarker.position,
          destination: destination,
          travelMode: travelMode
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
            setItinerary(true);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });}
  }

  const showItinerary = (destination, option) => {
    drawItinerary(destination, option);
  }

  useEffect(() => {
    if (markers) {
      if (isObject(userMarker.position)) {
        //TODO check the way you send funtion showItinerary to page branches , i think you should not put it here
        sortedMarkersByDistance(calcDistance(markers, userMarker), showItinerary);
        setCenterMap(center)
      }
    }

  }, []);


  const google = window.google;
  return (
    <GoogleMap
      onDragEnd={() => null}
      defaultZoom={defaultZoom || 13}
      center={center }
      defaultOptions={{
        streetViewControl: true,
        mapTypeControl: false,
        zoomControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT
        },
      }}>

      {userMarker && (
        <MapMarker
          key={userMarker.key || userMarker.id || "user"}
          options={{icon: userMarker.icon}}
          position={userMarker.position}
        />
      )}

      {(markers || []).map((marker) => {
        let isOpen = marker.id === get(activeMarker, 'id')

        const closeInfo = () => {
          setActiveMarker(null)
        }

        const displayItinerary = (destination, option) => {
          showItinerary(destination, option)
          closeInfo();
        }

        return (
          <MapMarker key={marker.id}
                     closeInfo={closeInfo}
                     options={{icon: marker.icon}}
                     position={marker.position}
                     onClick={() => setActiveMarker(marker)}
                     open={isOpen}>
            {isOpen && marker.content(marker, displayItinerary,userMarker)}
          </MapMarker>
        )
      })}
      {
        itinerary && (
          <DirectionsRenderer
            directions={directions}
          />
        )
      }
    </GoogleMap>
  )
}))

export default (({settings, center, defaultZoom, markers, userMarker, sortedMarkersByDistance}) => {
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${settings.key}&libraries=${settings.librairies}`


  return (
    <div>

      <Map googleMapURL={googleMapURL}
           sortedMarkersByDistance={sortedMarkersByDistance}
           center={center}
           defaultZoom={defaultZoom}
           loadingElement={<div style={{height: `100%`}}/>}
           containerElement={<div style={{
             height: `calc(100vh - 70px)`, maxWidth: `1180px`,width:'100%', zIndex: 1,margin:'0 auto',minHeight:'300px'
           //  transform: 'translateX(-50%)'
           }}/>}
           mapElement={<div style={{height: `100%`}}/>}
           markers={markers}
           userMarker={userMarker}
      />
    </div>
  )
})

const Sidebar = styled.div`
  position: absolute;
  padding: 2em;
  left: 0;
  top: 70px;
  bottom: 0;
  width: 290px;
`

const MapContainer = styled.div`
  max-width: 1140px;
  height: 100vh:
  position: fixed;
  top: 70px;
  right: 0;
  left: 290px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 12px !important;
  bottom: 0;
  z-index: 10;
`
