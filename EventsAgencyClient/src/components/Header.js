import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import About from "./About";
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
const Header =(props)=> {
  
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
              <NavLink >Events</NavLink>
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
                  Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem >
                 LogOut
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button id="login-btn"> <Link to="/login">LOGIN</Link></Button>
          </Nav>
          
         
        
      </Navbar>
    </div>
    )
  ;
  
}
export default Header;


