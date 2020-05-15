import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import NavbarDesign from '../styles'
import isEmpty from 'lodash/isEmpty'

const NavbarNav = ({items , className}) => {
  if(isEmpty(items)) return null
  return (
    <Nav  className={className} navbar>
      {
        items.map((item, id) => {
          return (
            <NavItem key={id}>
              <NavLink href={item.href} className={item.className} onClick={item.onClick}>
                {item.img && <img src={item.img} alt={""}/>}
                {item.text}
              </NavLink>
            </NavItem>
          )})}
    </Nav>)
}

export default ({navItemsStart, navItemsEnd, logo}) => (
  <NavbarDesign>
    <Navbar light expand="md">
      <NavbarBrand href="/"><img alt="" src={logo}/></NavbarBrand>
      <NavbarToggler/>
      <Collapse navbar>
          <NavbarNav className="navbar-start" items={navItemsStart}/>
          <NavbarNav className="ml-auto" items={navItemsEnd}/>
      </Collapse>
    </Navbar>
  </NavbarDesign>
);


