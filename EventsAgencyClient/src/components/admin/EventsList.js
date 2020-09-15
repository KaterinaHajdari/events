import React, { useState } from "react";


import events from "../../redux/apis/events";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class EventsList extends React.Component {
  state = {
    eventsList: [],
  };

  componentDidMount() {
    events
      .get("/events?approved=approved")

      .then((res) => {
        this.setState({
          eventsList: res.data,
        });
      });
  }

  render() {
    console.log(this.state.eventsList);
    return (
      <>


        <h4 id="title">Site Administration</h4>
        <div className="mini-nav">
          <Navbar color="light" light expand="md">
            <NavbarBrand>
              {" "}
              <Link to="/Admin">Managers</Link>
            </NavbarBrand>

            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/Client">Clients</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Events</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <div className="container2">
          <Table hover borderless>
            <thead>
              <tr>
                <th>Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Participants</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>

              {this.state.eventsList.map((event) => (
                <tr key={event.id}>
                  
                  <td>{event.eventType}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.participants}</td>
                  <td>{event.details}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default EventsList;
