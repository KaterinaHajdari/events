import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import {adminLogOut} from "../../redux/actions/Login";
import {connect} from "react-redux";
import {
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

class AdminHeader extends React.Component{

  logout=()=>{
   this.props.adminLogOut();
  }
  render(){
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

                  <Link to="/dashboard/editProfile"> Profile</Link>
                
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>

                  <Link to="/dashboard/addmanager"> Add Manager</Link>
                
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem onClick={this.logout}>
                 LogOut
                </DropdownItem>
                
                
              </DropdownMenu>
            </UncontrolledDropdown>
         
          </Nav>
          
         
        
      </Navbar>
    </div>
    )
  }
}

export default connect(null, {adminLogOut})(AdminHeader);


