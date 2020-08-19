import React from "react";
import avatar from "../avatar.png";
import {Link} from 'react-router-dom';
import {
    Container,
    Row,
    Col
   
    
} from 'react-bootstrap';
import '../css/Profile.css'
import '../css/Header.css'
import { Button } from "reactstrap";
class Profile extends React.Component{

render(){
    return(<div>
  <Container className="profile-container">
      <Row>
      <Col md={6}>
      <img src={avatar}  className="mx-auto d-block" id="avatar"/>
    </Col>
    
      </Row>
      <Button id="edit-btn"><Link to='/editProfile'>Edit</Link></Button>
  </Container>
    </div>)
}
}
export default Profile