import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "../css/EventsForm.css";

class EventsForm extends React.Component {
  render() {
    return (
      <div className="containerForm">
        <Form className="labels" >
          <Form.Row>
            <Form.Group id="form" as={Col} controlId="exampleForm.ControlSelect1">
              <Form.Label className="labels">Event</Form.Label>
              <Form.Control as="select">
                <option>Marriage</option>
                <option>Birthday</option>
                <option>Bussiness Lunch</option>
              </Form.Control>
            </Form.Group>

            <Form.Group  as={Col} controlId="formGridDate">
              <Form.Label className="labels">Date</Form.Label>
              <Form.Control type="date" placeholder="date" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label className="labels">TIME</Form.Label>
            <br></br>
          </Form.Row>
          <Form.Row className="labels">
            <Form.Group   as={Col} controlId="formGridTime">
              <Form.Label className="labels">From</Form.Label>
              <Form.Control  type="time" placeholder="Time" />
            </Form.Group>

            <Form.Group  as={Col} controlId="formGridTime">
              <Form.Label className="labels">To</Form.Label>
              <Form.Control type="time" placeholder="Time" />
            </Form.Group>
          </Form.Row>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label className="labels">Participants</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group  controlId="exampleForm.ControlTextarea1">
            <Form.Label className="labels">More Details...</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

         

          <Button id="button" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default EventsForm;
