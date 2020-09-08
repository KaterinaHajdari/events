import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
  Button
} from 'reactstrap';
import '../css/Header.css'
const HeaderLogin =(props)=> {
  
  return (
    <div>
      <Navbar className="Navbar" color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
      
          <Nav className="ml-auto"  >
            <NavItem>
              <NavLink> <Link to="/home" activestyle={{color:"white"}}>Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/About">About Us</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/Events"> Events</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to="/Admin">Dashboard</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               username
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>

                  <Link to="/Profile"> Profile</Link>
                
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem >
                 LogOut
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button id="login-btn"> <Link to="/signup">Sign up</Link></Button>
          </Nav>
      </Navbar>
    </div>
    );
}
export default HeaderLogin;

