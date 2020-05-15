import React, {useState} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler,} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {styled} from '@sgabskit/theme';
import Brand from './Brand';
import {NavbarNav} from './Navbar'


export default withRouter(({brand, primaryLinks, secondaryLinks, brandClassName,independentLinks, toggler, navabarType}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Helmet>
        <style type="text/css">{`
            body {
              padding-top: 60px !important;
            }
        `}</style>
      </Helmet>
      <NavbarPrimary light fixed="top" expand={navabarType ? "lg" : "md"}>
        <NavbarBrand href="/" className={brandClassName}>
          <Brand brand={brand}/>
        </NavbarBrand>
        <NavbarNav items={independentLinks} className="navbar-independent ml-auto"/>

        {navabarType && <NavbarToggler children={toggler} onClick={() => toggle()}/>}
        <Collapse isOpen={isOpen} navbar>
          <NavbarNav items={primaryLinks} className="navbar-primary"/>
          <NavbarNav items={secondaryLinks} className="navbar-secondary ml-auto"/>
        </Collapse>
      </NavbarPrimary>
    </>
  );
});

const NavbarPrimary = styled(Navbar)`
  background: #FFF;
  height: 70;
  padding: .85rem 3rem !important;
  box-shadow: 0 0.2em 0.25em rgba(0, 0, 0, 0.075);
`
