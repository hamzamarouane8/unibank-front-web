import React, {useState} from 'react';
import Button from '@sgabskit/button'
import {Divider} from 'semantic-ui-react'
import {Col, Row} from '@sgabskit/layout'
import {styled} from '@sgabskit/theme';
import {TRAVEL_MODE_DRIVING, TRAVEL_MODE_WALKING} from '../../components/commons/Constants';
import Modal from '@sgabskit/modal';

//------------------------------------------------------------

const ICONS = {
  close: require('./assets/img/letter-x.svg')
}
//TODO handle horaires
export default ({marker, showItinerary, userMarker, close}) => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);

  function itineraryDetails() {
    //TODO wait for oussama to finish the design in case if user does not activate his location
    userMarker ? showItinerary(marker.position, activeFilter ? TRAVEL_MODE_WALKING : TRAVEL_MODE_DRIVING) : setAlertMessage(true)
  }

  return (
    <ContentMarkerInfo>
      {!alertMessage ? (<>
        <EllipseLogo>
          <div>
            <img src={marker.iconModal} alt=""/>
          </div>
        </EllipseLogo>
        <div className='ui-close'><Button onClick={() => close()} icon="close"/></div>
        <div className='window-info__container'>
          <div className="row ui-header">
            <div className="col-12">
              <h1>{marker.title}</h1>
              <p>{marker.description}</p>
            </div>
          </div>
          {marker.distance && <div className="row">
            <div className="col-12 text-center">
              <FiltreButton active={activeFilter} icon="blind"
                            onClick={() => setActiveFilter(true)}>{marker.distanceWalking}</FiltreButton>
              <FiltreButton active={!activeFilter} icon="car"
                            onClick={() => setActiveFilter(false)}>{marker.distanceDriving}</FiltreButton>
            </div>
          </div>}
          <Divider style={{width: '30px', margin: '20px auto'}} fitted/>
          <div className="row mt-10 text-center">
            <DetailsContent header="Lundi au vendredi" details="08:30 - 16:00"/>
            <DetailsContent header="Samedi" details="Fermée"/>
          </div>
          <div className="row mt-20 text-center">
            {marker.details.phone && <DetailsContent header="Téléphone" details={marker.details.phone}/>}
            {marker.details.fax && <DetailsContent header="Fax" details={marker.details.fax}/>}
          </div>
          {<div className="row">
            <div className="col-12">
              <IteniraryButton
                onClick={() => {
                  itineraryDetails()
                  close()
                }}>ITINERAIRE</IteniraryButton>
            </div>
          </div>}

        </div>
      </>) : (<p>alert message goes here</p>)}
    </ContentMarkerInfo>
  )
}


const DetailsContent = ({header, details}) => (
  <div className="col-6 details-header">
    <Header>{header}</Header>
    <SubHeader>{details}</SubHeader>
  </div>
)

const ContentMarkerInfo = styled.div`
.ui-close{
  float:right;
  .ui.button{
      background-color:transparent !important;
      padding:0px!important;
  }
}
.window-info__container {
    .ui-header{
        h1{
            margin-top: 20px;
            ${props => props.theme.FontTheme1(600, '17px')}
            color:${props => props.theme.color.primary_black}; 
            text-align:center; 
            text-transform: lowercase !important;
        }
        
        p{
            margin-top: 10px;
            margin-bottom: 10px;
            ${props => props.theme.FontTheme2(400, '14px')}
            color:${props => props.theme.color.primary_grey};
            text-transform:lowercase;
            text-align:center; 
        }
    } 
}

`

const Header = styled.h2`
  color:${props => props.theme.color.primary_grey};
  ${props => props.theme.FontTheme2(400, '16px')}

`

const SubHeader = styled.p`
   ${props => props.theme.FontTheme1(600, '16px')}
   color:${props => props.theme.color.primary_black};
`

const EllipseLogo = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: 35%;
  margin-top: -60px;
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  box-shadow: 0 10px 20px 0 rgba(194, 200, 221, 0.3);
  background: ${props => props.theme.color.primary_white};
  img{
    display:block;
    margin:auto;
    margin-top:14px;
  }

`

const FiltreButton = styled(Button)`
  background: ${props => props.active ? `${props.theme.color.primary_color_light} !important` : '#fff!important'};
  border-radius: 40px!important;
  margin: 0 6px!important;
  color:${props => props.active ? `${props.theme.color.primary_color} !important` : `${props.theme.color.primary_grey5} !important`};
  border: ${props => !props.active ? `1px solid ${props.theme.color.primary_grey5} !important` : 'none'};
`

const IteniraryButton = styled(Button)`
  width: 100%!important;
  margin-top: 30px!important;
  ${props => props.theme.FontTheme1(700, '15px', '!important')}
  background: ${props => `${props.theme.color.primary_white} !important`};
  border-radius: 4px!important;
  border: 1px solid ${props => props.theme.color.primary_color} !important;
  color: ${props => `${props.theme.color.primary_color}!important`};
  box-shadow: 0 10px 30px 0 rgba(109, 109, 128, 0.2)!important;
  
  &:hover{
      background:${props => props.theme.color.primary_color} !important;
      color: ${props => props.theme.color.primary_white}!important;
  }
`
