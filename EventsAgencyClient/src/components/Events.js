import React from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import '../css/Events.css';
import WeddingPhoto from '../weddingphoto.jpg';
import Bussiness from '../bussiness.jpg';
import Birthday from '../birthday.jpg';
import { Link } from 'react-router-dom';
class Events extends React.Component{

    render(){
        return(
           <Container>
               <Row className="row-style">
                   <Col xs="3"><img src={WeddingPhoto} alt="weddingPhoto" className="photoStyle" /></Col>
                   <Col xs="auto">
                       <div className="col-style" >
                       <h1>Wedding Day</h1>
                       <Link 
                    to="/eventsform"
                    className=" btn btn-primary text-uppercase events-link"  >
                    RESERVE
                  </Link>    
                       </div>            
                       </Col>
               </Row>

               <Row className="row-style">
                   <Col xs="9">
                   <div className="col-style" >
                       <h1>Bussiness Events</h1>
                       <Link 
                    to="/eventsform"
                    className=" btn btn-primary text-uppercase events-link"  >
                    RESERVE
                  </Link>       
                       </div>
                   </Col>
                   <Col xs="3"> <img  src={Bussiness} alt="bussinessPhoto" className="photoStyle" /></Col>
               </Row>


               <Row className="row-style">
                   <Col xs="3"><img src={Birthday} alt="birthdayPhoto"  className="photoStyle" style={{height:"90%"}}/></Col>
                   <Col xs="auto">
                   <div className="col-style" >
                       <h1>Birthday Party</h1>
                       <Link 
                    to="/eventsform"
                    className=" btn btn-primary text-uppercase events-link"  >
                    RESERVE
                  </Link>   
                       </div>
                   </Col>
               </Row>
           </Container>
        )
    }
}
export default Events;