import React, {useState} from 'react'
import {styled} from '@sgabskit/theme'
import isEmpty from 'lodash.isempty'
import DropdownCountries from "./DropdownCountries";
//-----------------------------------------------------------
const assets = {
  icon: require('../assets/img/Mask Group 691.svg')
}

export default ({brand, contact, address, copyright}) => {
  const [item, setItem] = useState(null);

  if (!address) return null

  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 column">
            <p className="d-none d-lg-flex">
              <img src={brand.logo} style={{height: 24, width: 'auto'}} alt=""/>
            </p>
            <div onClick={() => setItem(item==='info' ? '' : 'info')} role="heading" className="mb-4 title d-lg-none"
                 style={{pointerEvents: 'none'}}>À propos
            </div>
            <div className={`mb-4 ${item === 'info' ? 'd-flex' : 'd-none'} section-footer-content d-lg-flex`}>
            <h5>{brand.name} la banque UNIBANK</h5>
            <p>
              {address.line1}<br/>
              {address.line2}<br/>
              {address.postalCode} - {address.city}, {address.country}
            </p>
            <p>
              <strong>{contact.email}</strong>
            </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 column" style={{paddingTop: 0}}>
            <div onClick={() => setItem(item==='first' ? '' : 'first')} role="heading" className="mb-4 title"
                 style={{pointerEvents: 'none'}}>Information
            </div>
            <div className={`mb-4 ${item === 'first' ? 'd-flex' : 'd-none'} section-footer-content d-lg-flex`}>
              <a href="#">Nous connaître</a>
              <a href="#">Nos métiers</a>
              <a href="#">Nos engagements</a>
              <a href="#">Recrutement</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 column" style={{paddingTop: 0}}>
            <div onClick={() => setItem(item==='second' ? '' : 'second')} role="heading" className="mb-4 title"
                 style={{pointerEvents: 'none'}}>Particuliers
            </div>
            <div className={`mb-4 ${item === 'second' ? 'd-flex' : 'd-none'} section-footer-content d-lg-flex`}>
              <a href="#">Simulateurs</a>
              <a href="#">Centre de relation clints</a>
              <a href="#">Foire aux questions</a>
              <a href="#">Simulateurs</a>
              <p>&nbsp;</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 column" style={{paddingTop: 0}}>
            <div onClick={() => setItem(item==='third' ? '' : 'third')} role="heading" className="mb-4 title"
                 style={{pointerEvents: 'none'}}>Professionnels
            </div>
            <div className={`mb-4 ${item === 'third' ? 'd-flex' : 'd-none'} section-footer-content d-lg-flex`}>
              <a href="#">Cours des devises</a>
              <a href="#">Cours des devises</a>
            </div>
          </div>
        </div>

        <div className="footer-info">
          <div className="footer-info__copyright">
            &copy; {copyright}
          </div>
          <div className="footer-info__country">
            <DropdownCountries/>
          </div>
        </div>
      </div>
    </Footer>
  )
}

const Footer = styled.footer`
  padding: 5em 3rem;
  border-top: 1px solid #E8E9EF;
  background: #fafafa;
  font-size: 0.85rem;
  color: #7677778;
  
  .column {
      display: flex;
      flex-direction: column;
  }
  
  .section-footer-content {
      display: flex;
      flex-direction: column;
       a {
          font-size: 12px;
          text-decoration: none;
          margin: 3px 0px;
          color: #828282;
      }
  }
  
  .title {
      font-size: 14px;
      font-weight: 600;
  }
  
   .footer-info {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-wrap: wrap;
      width: 100%;
      
      &__copyright {
          width:90%;
      }
      
      &__country {
          width: 10%;
      }
      
  }
${'/*-------------------------- Start Responsive Section ---------------------------*/'}
  @media(max-width: 1080px) {
  
      .title {
          position: relative;
          cursor:pointer;
          pointer-events : auto!important;
      }
      
      .title:after {
          position: absolute;
          right: 20px;
          top: 50%;
          margin-top: -1.33px;
          border-width: 4px 4px 0;
          border-style: solid;
          border-color: #000 transparent transparent;
          transition: -webkit-transform .1s ease;
          transition: transform .1s ease;
          transition: transform .1s ease,-webkit-transform .1s ease;
          -webkit-transform-origin: 50% 33%;
          transform-origin: 50% 33%;
          content: "";
      }
      
      .footer-info {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          flex-wrap: wrap;
          width: 100%;
          &__copyright {
              width:86%;
          }
          &__country {
              width: 14%;
          } 
      }
      
      .ui.selection.dropdown > .delete.icon, .ui.selection.dropdown > .dropdown.icon, .ui.selection.dropdown > .search.icon {
          top: 1px !important;
      }
  }
  
   @media(max-width: 425px) {
      .footer-info {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          flex-wrap: wrap;
          width: 100%;
          &__copyright {
              width:70%;
          }
          &__country {
              width: 30%;
          } 
      }
   }
  
  
${'/*-------------------------- End ---------------------------*/'}

`
