import React, { useState } from "react";
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
  Button,
} from "reactstrap";
import "../css/Header.css";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar  style={{"backgroundColor":"whitesmoke"}}className="Navbar"  light expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>

          <Nav className="ml-auto" >
            <NavItem>
              <NavLink class="nav-item active">
                {" "}
                <Link to="/home" activestyle={{ color: "white" }}>
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                {" "}
                <Link to="/About">About Us</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                {" "}
                <Link to="/Events"> Events</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Admin">Dashboard</Link>
              </NavLink>
            </NavItem>
            {this.props.login.values.id !== 0 ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.props.login.values.username}
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/dashboard/editProfile"> Profile</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>LogOut</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : null}
            {this.props.login.values.id === 0 ? (
              <Button id="login-btn">
                {" "}
                <Link to="/login">Login</Link>
              </Button>
            ) : null}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(Header);
