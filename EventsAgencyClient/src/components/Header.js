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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar  color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        
        <NavbarToggler onClick={toggle} ></NavbarToggler>
        
          <Nav className="ml-auto"  >
            <NavItem>
              <NavLink> <Link to="/home" activestyle={{color:"white"}}>Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink> <Link to="/About">About Us</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Events</NavLink>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <Link to="/Admin">
                Admin
                </Link>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                 LogOut
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Manager
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                 LogOut
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button> <Link to="/login">LOGIN</Link></Button>
          </Nav>
          
         
        
      </Navbar>
    </div>
    )
  ;
  
}
export default Header;


