import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcone, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
const Navbar = ({ toggle }) => {
	return (
  	<>
    	<Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Hotger
          </NavLogo>
          <MobileIcone onClick={toggle}>
            <FaBars />
          </MobileIcone>
          <NavMenu>
            <NavItem>
              <NavLinks to="starter">Starter</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="hotdogs">HotDogs</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="burgers">Burgers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="drinks">Drinks</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;