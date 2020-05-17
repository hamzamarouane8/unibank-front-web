import React from 'react'
import {NavLink} from 'react-router-dom'
import {Nav, NavItem} from 'reactstrap'
import {SidebarStyle} from './styles/sidebar'
import IcAccounts from "../../components/images/IcAccounts";
import IcFaq from "../../components/images/IcFaq";
import IcWallets from "../../components/images/IcWallets";
import IcEdoc from "../../components/images/IcEdoc";
import IcBranch from "../../components/images/IcBranch";
import IcExChange from "../../components/images/IcExChange";
import IcCgu from "../../components/images/IcCgu";
import isString from "lodash.isstring";
import classnames from 'classnames';

export default (() => {

  const navItems = [
    {
      text: 'Mes Comptes',
      path: '/dashboard',
      icon: IcAccounts,
      className: 'account'
    },
    {
      text: 'Wallets',
      path: '/wallets',
      icon: IcWallets,
      className: 'wallets'
    }/*,
    {
      text: 'E-documents',
      path: '/edoc',
      icon: IcEdoc,
      className: 'edoc'
    },
    {
      text: 'Agences & DAB',
      path: '/branchesSec',
      icon: IcBranch,

    }*/,
    {
      text: 'Taux de change',
      path: '/exchangeSec',
      icon: IcExChange,
    },
    {
      text: 'FAQ',
      path: '/faqSec',
      icon: IcFaq,
      className:'faq'

    }
  ]

  return (
    <SidebarStyle>
      <div className="layout-sidebar">
        <Nav vertical>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <NavLink to={item.path} exact id={classnames('clearfix', item.className)}>
                <div className="img">
                  {isString(item.icon) ? <img alt="" src={item.icon}/> : <item.icon/>}
                  <span>{item.text}</span>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    </SidebarStyle>
  )
})


