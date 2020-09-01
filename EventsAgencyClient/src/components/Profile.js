import React from "react";
import avatar from "../avatar.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Profile.css";
import "../css/Header.css";
import { Button } from "reactstrap";
class Profile extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <Container>

          <Row>
            <Col md={6}>
              <img src={avatar} id="avatar" />
            </Col>
          </Row>
          <div className="contain">
          <Row xs={2} md={4} lg={6}>
            <Col>
              <Col>username:</Col>
              
            </Col>
            <Col>
              <Col>Admin</Col>
              
            </Col>
          </Row>

          <Row xs={2} md={4} lg={6}>
            <Col>
              <Col>email:</Col>
              
            </Col>
            <Col>
              <Col>admin@mail.com</Col>
              
            </Col>
          </Row>
          </div>
          
          <Row>
            <Col>
              <Button id="edit-btn">
                <Link to="/editProfile">Edit</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Profile;
