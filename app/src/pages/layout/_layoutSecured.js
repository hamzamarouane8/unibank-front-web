import React, {useState} from 'react';
import Toolbar from '@sgabskit/toolbar';
import Sidebar from './_sidebar'
import {LayoutGuestStyle} from './styles/layoutSecured'

const assets = {
  logout: require('../../assets/img/ic_logout.svg'),
  logo_x1: require('../../assets/img/header/logo/Logo_header_3x_nj2jws_c_scale,w_200.jpg'),
  logo_x2: require('../../assets/img/header/logo/Logo_header_3x_nj2jws_c_scale,w_432.jpg'),
  menu: require('../../assets/img/menu.svg'),

}

export default ({session, children,option}) => {
  const [sidebar, setSidebar] = useState(true);
  const primaryLinks = {
    '/#': {
      img: assets.menu,
      className:'d-block d-lg-none d-xl-none',
      onClick: () => setSidebar(!sidebar)
    }
  };
  const secondaryLinks = {
    '/': {
      img: assets.logout,
      onClick: session.logout,
      className: 'sg-logout'
    }
  };

  return (
    <LayoutGuestStyle option={option}>
      <Toolbar
        navabarType={false}
        toggler={<img src={assets.menu} alt=""/>}
        brandClassName='d-none d-lg-block d-xl-block'
        brand={{image: assets.logo_x2, name: 'BankUP',srcset:{img1:`${assets.logo_x1} 200w`,img2:`${assets.logo_x2} 432w`}}}
        fluid={true}
        primaryLinks={primaryLinks}
        secondaryLinks={secondaryLinks}
      />
      {
        <>
          <div className="layout-main">
            {children}
          </div>
          <div className={`d-lg-block d-xl-block ${sidebar ? 'd-block' : 'd-none'}`}>
            <Sidebar/>
          </div>
        </>
      }
    </LayoutGuestStyle>
  )
}
