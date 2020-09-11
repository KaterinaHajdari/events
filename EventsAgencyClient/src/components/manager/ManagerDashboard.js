import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import events from "../../redux/apis/events";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import {declineEvent} from "../../redux/actions/DeclineEvent"
import {approveEvent } from "../../redux/actions/ApproveEvent";

class ManagerDashboard extends React.Component {
  state = {
    eventsList: [],
  };

  declineEvent=(event_id)=>{
    this.props.declineEvent(event_id);

    const newState=this.state.eventsList.filter(event=>{
      return event.id!=event_id
    })

    this.setState({
      eventsList:newState
    })
  }

  approveEvent=(event_id)=>{
    this.props.approveEvent(event_id);

    const newState=this.state.eventsList.filter(event=>{
      return event.id!=event_id;
    })

    this.setState({
      eventsList:newState
    })
  }
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
   

        <h4 id="title">Site Administration</h4>
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
              <IconButton
                aria-label="delete"
                style={{ color: "red", width: "30px" }}
              >
                <DeleteIcon onClick={()=>this.declineEvent(event.id)} />
              </IconButton>
              <IconButton aria-label="check" style={{ color: "green" }}>
                <CheckIcon onClick={()=>this.approveEvent(event.id)}/>
              </IconButton>
            </li>
          ))}
        </div>
      </>
    );
  }
}

export default connect(null, {declineEvent,approveEvent})(ManagerDashboard);
