import React,{ useState} from "react";
import "../../css/Admin.css";
import {Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import FetchUser from'../FetchUser';


const Client=(props)=> {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
    return (
      <div>
        
        <h4 id="title">Site Administration</h4>
        <div className="mini-nav">
      <Navbar color="light" light expand="md">
        <NavbarBrand > <Link to="/Admin">Managers</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/dashboard/Client">Clients</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/dashboard/EventsList">Events</Link></NavLink>
            </NavItem>
            </Nav>
          
            </Navbar>
      </div>
        <div className="container2">
          <div className="row">
            <div className="col-8">
              <FetchUser/>
              
            </div>
            
          </div>
        </div>

        <br></br>
      </div>
    );
  
}
export default Client;
