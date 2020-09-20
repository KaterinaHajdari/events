import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../css/Events.css";
import WeddingPhoto from "../weddingphoto.jpg";
import Bussiness from "../bussiness.jpg";
import Birthday from "../birthday.jpg";
import { Link } from "react-router-dom";

class Events extends React.Component {
  render() {
    return (
      <div>

        <Container>
          <Row className="row-style">
            <Col lg="3" sm="12">
              <img
                src={WeddingPhoto}
                alt="weddingPhoto"
                className="photoStyle"
              />
            </Col>
            <Col lg="9" sm="12" className="col-style">
              <div className="col-content">
                <h1>Wedding Day</h1>
                <Link
                  to="/dashboard/eventsform"
                  className=" btn btn-primary text-uppercase events-link"
                  >
                  RESERVE
                </Link>
              </div>
            </Col>
          </Row>

          <Row className="row-style">
            <Col lg={{size:9, order: 1}} xs={{size: 12, order:2}} className="col-style">
              <div className="col-content">
                <h1>Bussiness Events</h1>
                <Link
                  to="/dashboard/eventsform"
                  className=" btn btn-primary text-uppercase events-link"
                >
                  RESERVE
                </Link>
              </div>
            </Col>
            <Col lg={{size: 3, order: 2}} xs={{size:12, order: 1}}>
              {" "}
              <img
                src={Bussiness}
                alt="bussinessPhoto"
                className="photoStyle"
              />
            </Col>
          </Row>

          <Row className="row-style">
            <Col lg="3" sm="12">
              <img
                src={Birthday}
                alt="birthdayPhoto"
                className="photoStyle"
                style={{ height: "90%" }}
              />
            </Col>
            <Col lg="9" sm="12" className="col-style">
              <div className="col-content">
                <h1>Birthday Party</h1>
                <Link
                  to="/dashboard/eventsform"
                  className=" btn btn-primary text-uppercase events-link"
                >
                  RESERVE
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Events;
