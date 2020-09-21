import React from "react";
import {Link} from "react-router-dom"
import HomeImage from "./images/wedding1.jpg";
import Birthday from "./images/Birthday.png";
import Home3 from "./images/Home3.png";
import Home1 from "./images/Home1.png";
import Header from "../css/Header.css"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
const Home = () => {
  return (
    <div>
      <img src={HomeImage} alt="Home" width="100%" height="500px" />

      <div className="container">
        <Row style={{ textAlign: "center", margin: "40px" }}>
          <Col>
            <Card>
              <CardBody style={{ backgroundColor: "#e8baba" }}>
                <Link to="/Events" className="header_links">
                <CardTitle>Bussiness Events</CardTitle>
                </Link>
              </CardBody>
              <CardImg top width="100%" src={Home1} alt="Card image cap" />
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody style={{ backgroundColor: "#e8baba" }}>
              <Link to="/Events" className="header_links">
                <CardTitle>Weddings</CardTitle>
                </Link>
              </CardBody>
              <CardImg top width="100%" src={Home3} alt="Card image cap" />
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody style={{ backgroundColor: "#e8baba" }}>
              <Link to="/Events" className="header_links">
                <CardTitle>Birthday Parties</CardTitle>
                </Link>
              </CardBody>
              <CardImg top width="100%" src={Birthday} alt="Card image cap" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;
