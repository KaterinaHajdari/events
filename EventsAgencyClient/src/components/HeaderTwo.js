import React from 'react';
import { Link, Redirect } from "react-router-dom";
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
class HeaderTwo extends React.Component{
    state={
        redirect:false
    }
    logUserOut=()=>{
        localStorage.clear();
        this.setState({ redirect:true })
    }
  render(){
      if(this.state.redirect){
          return <Redirect to="/" />
      }
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
            
            <Button id="login-btn" onClick={this.logUserOut}>Logout</Button>
          </Nav>
      </Navbar>
    </div>
  )
}
}

export default HeaderTwo;
