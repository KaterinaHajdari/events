import React from "react";
import { Input } from "reactstrap";
import avatar from "../avatar.png";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "reactstrap";
import "../css/Profile.css";
class EditProfile extends React.Component {
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
            <Row xs={2} md={4} >
              <Col>
                <Col>username:</Col>
              </Col>
              <Col>
                <Col><Input></Input></Col>
              </Col>
            </Row>

            <Row xs={2} md={4}>
              <Col>
                <Col>email:</Col>
              </Col>
              <Col>
                <Col><Input></Input></Col>
              </Col>
            </Row>
            <Row xs={2} md={4} >
              <Col>
                <Col>New Password:</Col>
              </Col>
              <Col>
                <Col><Input></Input></Col>
              </Col>
            </Row>
            <Row>
                <Col>
                <Button id="editP-btn">Save Changes</Button></Col>
            </Row>
          </div>

          
        </Container>
      </div>
    );
  }
}
export default EditProfile;
