import React, { useEffect } from "react";
import { connect } from "react-redux";
import events from "../redux/apis/events";
import { CheckUserId } from "../redux/actions/Login";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";

  import { Table } from "reactstrap";
  import { Link } from "react-router-dom";
  import { Alert } from 'reactstrap';

class UserDashboard extends React.Component{





    state = {
        eventsList: [],
      };

      componentDidMount() {
        events
         // .get("/events?userId="+ this.props.login.values.id)
          .get("/events?userId="+ localStorage.getItem("id"))
    
          .then((res) => {
            this.setState({
              eventsList: res.data,
            });
          });
         // console.log("test: "+);
    
      } 
      
    render(){
        return(
            
            <div className="container2" style={{ textAlign: "center", margin: "150px" ,}}>
               <Alert color="success">
            <Table hover borderless >
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
            </Alert>
          </div>
            
        )
    }

}




  export default   UserDashboard;

  