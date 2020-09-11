import React, { useState } from "react";
import Header from "../Header";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import events from "../../redux/apis/events";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { declineEvent } from "../../redux/actions/DeclineEvent";
import { approveEvent } from "../../redux/actions/ApproveEvent";

class ManagerDashboard extends React.Component {
  state = {
    eventsList: [],
  };
  componentDidMount() {
    events
      .get(`/events?approved=0`)

      .then((res) => {
        this.setState({
          eventsList: res.data,
        });
      });
  }

  declineEvent = (event_id) => {
    this.props.declineEvent(event_id);

    const newState = this.state.eventsList.filter((event) => {
      return event.id != event_id;
    });

    this.setState({
      eventsList: newState,
    });
  };

  approveEvent = (event_id) => {
    this.props.approveEvent(event_id);

    const newState = this.state.eventsList.filter((event) => {
      return event.id != event_id;
    });

    this.setState({
      eventsList: newState,
    });
  };

  render() {
    return (
      <>
        <Header />

        <h4 id="title">Site Administration</h4>
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
                  <td>
                    {" "}
                    <IconButton
                      aria-label="delete"
                      style={{ color: "red", width: "30px" }}
                    >
                      <DeleteIcon onClick={() => this.declineEvent(event.id)} />
                    </IconButton>
                    <IconButton aria-label="check" style={{ color: "green" }}>
                      <CheckIcon onClick={() => this.approveEvent(event.id)} />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedUserType: state.login.values.type,
  };
};

export default connect(mapStateToProps, { declineEvent, approveEvent })(
  ManagerDashboard
);
