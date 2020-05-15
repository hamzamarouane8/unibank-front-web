import React from 'react';
import {Nav, NavItem,} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import isString from 'lodash.isstring';
import isEmpty from 'lodash.isempty';
import map from 'lodash.map';
import get from 'lodash.get';
import {styled} from '@sgabskit/theme';
import {Dropdown} from "semantic-ui-react";


export const NavItemNav = ({item }) => {
  return(
    <NavItem>
      {item.type ==='dropdown' ? (item.render()) :(<a href="#" className={`nav-link ${item.className ? item.className : ''}`} onClick={item.onClick}>
        {item.img && <img className="img" src={item.img} alt=""/>}
        <span>{item.text}</span>
      </a>)}

    </NavItem>
  )
}


export const NavItemNavLink = ({link, path}) => (
  <NavItem>
    <StyledNavLink exact={path === '/'}
                   className={`nav-link ${link.className ? link.className : ''}`}
                   to={path}>
      {isString(link) ? link : (
        <>{ link.text }&nbsp;{ link.iconRight  }</>
      )}
    </StyledNavLink>
  </NavItem>)

export const NavbarNav = ({items, className, children}) => {
  if (isEmpty(items)) return null
  return (<Nav className={`nav-link ${className ? className : ''}`} navbar>
    {children}
    {map(items, (link, path) => {
      if (link.img) {
        return (<NavItemNav item={link} key={path}/>)
      }
      return (<NavItemNavLink link={link} path={path} key={path}/>)
    })}
  </Nav>)
}

const StyledNavLink = styled(NavLink)`
  color: #131313 !important;
  font-weight: 400;
  font-size: 0.95rem;
  margin: 0 10px;
  transition: all 0.2s linear;
`
