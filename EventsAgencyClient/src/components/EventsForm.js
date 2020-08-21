import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../css/EventsForm.css'
class EventsForm extends React.Component{

    render(){
        return(
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
              <div class="card-body">
            <Form >
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="eventType">Event</Label>
                  <Input type="select" name="selectEvent" id="eventType" >
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
                  <Input type="date" name="date" id="exampleDate" placeholder="Date of event" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="Time">Time</Label>
              <Input type="time" name="time" id="EventTime" placeholder="Time of event"/>
            </FormGroup>
            <FormGroup>
              <Label for="Participants">Participants</Label>
              <Input type="number" name="pasticipants" id="participants" placeholder="Participants"/>
            </FormGroup>
            <Row form>
             
              <Col md={6}>
                <FormGroup>
                  <Label for="Details">More Details</Label>
                  <Input type="text" name="eventDetails" id="eventDetails"/>
                </FormGroup>
              </Col>
              
            </Row>
           
            <Button  className=" btn btn-primary text-uppercase events-form"> Reserve</Button>
          </Form>
          </div>
          </div>
          </div>
        )
    }
}
export default EventsForm;