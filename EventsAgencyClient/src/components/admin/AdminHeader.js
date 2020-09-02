import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";

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
import '../../css/Header.css'
const AdminHeader =(props)=> {
  
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

                  <Link to="/adminedit"> Profile</Link>
                
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>

                  <Link to="/addmanager"> Add Manager</Link>
                
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem >
                 LogOut
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>
         
          </Nav>
          
         
        
      </Navbar>
    </div>
    )
  ;
  
}
export default AdminHeader;


