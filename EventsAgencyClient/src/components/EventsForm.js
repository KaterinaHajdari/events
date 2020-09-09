import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../css/EventsForm.css";
import {connect} from "react-redux";
import {createEventReservation} from "../redux/actions/CreateEvent"
import HeaderTwo from "./HeaderTwo";
import {Link,Redirect} from 'react-router-dom';
import Dialog from "../components/Dialog"
class EventsForm extends React.Component {
   state={
     eventType:'',
     date:'',
     time:'',
     participants:'',
     details:'',
     isOpen: false
   }

   setEventType=(event)=>{
     this.setState({
       eventType:event.target.value
     })
   }

   setDate=(event)=>{
    this.setState({
      date:event.target.value
    })
  }

  setTime=(event)=>{
    this.setState({
      time:event.target.value
    })
  }

  setParticipants=(event)=>{
    this.setState({
      participants:event.target.value
    })
  }

  setDetails=(event)=>{
    this.setState({
      details:event.target.value
    })
  }

  onFormSubmit=(event)=>{
    event.preventDefault();
    
    const eventValues={
        eventType:this.state.eventType,
        date:this.state.date,
        time:this.state.time,
        participants:this.state.participants,
        details:this.state.details,
        approved:0
    }
      this.props.createEventReservation(eventValues);
  }
 
  render() {
    

    return (
      <div>
        <HeaderTwo/>
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
          <div class="card-body">
          <h5 class="card-title text-center">Event Reservation</h5>
        <Form onSubmit={this.onFormSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="eventType">Event</Label>
              <Input
               type="select" name="selectEvent" id="eventType"
                  value={this.state.eventType}
                  onChange={this.setEventType}
               > 
                  <option>Event Type</option>
                  <option>Birthday Event</option>
                  <option>Wedding Event </option>
                  <option>Bussiness Event</option>
    </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="eventDate">Date</Label>
              <Input
               type="date" name="date" id="exampleDate" placeholder="Date of event"
               value={this.state.date}
               onChange={this.setDate}
               />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="Time">Time</Label>
          <Input 
          type="time" name="time" id="EventTime" placeholder="Time of event"
          value={this.state.time}
          onChange={this.setTime}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Participants">Participants</Label>
          <Input
           type="number" name="participants" id="participants" placeholder="Participants"
           value={this.state.participants}
           onChange={this.setParticipants}
           />
        </FormGroup>
        <Row form>
         
          <Col >
            <FormGroup>
              <Label for="Details">More Details</Label>
              <Input 
              type="text" name="eventDetails" id="eventDetails" placeholder="Details for the event"
              value={this.state.details}
              onChange={this.setDetails}
              />
            </FormGroup>
          </Col>
          
        </Row>
       
        <Button onClick={(e)=>this.setState({isOpen:true})} className=" btn btn-primary text-uppercase events-form"> Reserve</Button>
       
        <Dialog isOpen={this.state.isOpen} onClose={(e)=>this.setState({isOpen:false})}>
          
          Reservation has been made!
          Thank you for choosing us!
        </Dialog>
      </Form>
      </div >
      </div>
      </div>
    </div>
      )
    }    
  }

const mapStateToProps=(state)=>{
  return{
    createEvent:state.CreateEvent
  }
}



export default connect(mapStateToProps, {createEventReservation})(EventsForm);
