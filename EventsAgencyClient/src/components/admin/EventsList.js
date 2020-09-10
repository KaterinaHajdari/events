import React, { useState } from "react";
import Header from "../Header";

import events from "../../redux/apis/events";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class EventsList extends React.Component {
  state = {
    eventsList: [],
  };

  componentDidMount() {
    events
      .get("/events?approved=0")

      .then((res) => {
        this.setState({
          eventsList: res.data,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Header/>

        <h4 id="title">Site Administration</h4>
        <div className="mini-nav">
      <Navbar color="light" light expand="md">
        <NavbarBrand > <Link to="/Admin">Managers</Link></NavbarBrand>
       
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/Client">Clients</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Events</NavLink>
            </NavItem>
            </Nav>
          
            </Navbar>
      </div>
        <div className="container2">
          {this.state.eventsList.map((event) => (
            <li id={event.id}>
              Type: {event.eventType}{" "}
              <span style={{ display: "inline-block", width: "50px" }} />
              Date: {event.date}{" "}
              <span style={{ display: "inline-block", width: "50px" }} />
              Time: {event.time}{" "}
              <span style={{ display: "inline-block", width: "50px" }} />
              Participants: {event.participants}{" "}
              <span style={{ display: "inline-block", width: "50px" }} />
              Details: {event.details}{" "}
              <span style={{ display: "inline-block", width: "50px" }} />
              
              
               
            </li>
          ))}
        </div>
      </>
    );
  }
}

export default EventsList;
