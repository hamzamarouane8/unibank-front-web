import React, {useState} from 'react';
import Toolbar from '@sgabskit/toolbar';
import {LayoutGuestStyle} from './styles/layoutGuest'
import {Footer1} from '@sgabskit/w-footer';
import ContentService from "../../services/content";
import DropdownCountries from '../../features/country/DropdownCountries';
import {CODE_COUNTRY} from "../../components/commons/Constants";
import get from 'lodash.get';
import * as store from '@sgabskit/local-storage';

const assets = {
  logo_x1: require('../../assets/img/header/logo/Logo_header_3x_nj2jws_c_scale,w_200.jpg'),
  logo_x2: require('../../assets/img/header/logo/Logo_header_3x_nj2jws_c_scale,w_432.jpg'),
  logout: require('../../assets/img/ic_logout.svg'),
  notifications: require('../../assets/img/ic_notification.svg'),
  menu: require('../../assets/img/menu.svg'),
  login: require('../../assets/img/ic_login.svg')
}

const primaryLinks = {
  '/home': {
    text: 'Accueil',
  }/*,
  '/branches': {
    text: 'Agences & Dab',
  }*/,
  '/faq': {
    text: 'FAQ',
  },
  '/exchange': {
    text: 'Taux de change',
  }
};

const secondaryLinks = {

  '/login': {
    text: 'Accés a mes comptes',
    className: 'sg-login',
    //iconRight: <FiLogIn />,
    focus: true
  }
};

export default ({children}) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const services = {
    contentService: new ContentService()
  }
  React.useEffect(() => {
    setLoading(true)
    //TODO to check with titus if there is a better way to do the handling of countries
    let codeCountry = store.get(CODE_COUNTRY);
    load();
  }, []);

  const load = () => {
    services.contentService.loadBaseContent().then((data) => {
      setContent(data)
      setLoading(false)
    })
  }

  return (
    <LayoutGuestStyle>
      <div className='container'>
        <Toolbar
          navabarType={true}
          toggler={<img src={assets.menu} alt=""/>}
          brand={{
            image: assets.logo_x1,
            name: 'BankUP',
            srcset: {img1: `${assets.logo_x1} 200w`, img2: `${assets.logo_x2} 432w`}
          }}
          fluid={true}
          primaryLinks={primaryLinks}
          secondaryLinks={secondaryLinks}
        />
        {children}
        <Footer1 loading={loading}
                 address={get(content, 'bank.address')}
                 contact={get(content, 'bank.contact')}
                 brand={{logo: assets.logo, logo_monogram: assets.logo_monogram}}
                 copyright={get(content, 'copyrightMessage')}/>
      </div>
    </LayoutGuestStyle>
  )
}
