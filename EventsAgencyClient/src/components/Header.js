import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./About";
import { Navbar, Button } from "reactstrap";
import Events from "./Events";
class Header extends React.Component {
  render() {
    const buttonStyle = {
      color: "black",
      backgroundColor: "#e8baba",
      border: "#e8baba",
      fontSize: "16px",
      padding: "10px 40px",
      textAlign: "center",
    };

    const navbarStyle = {
      border: "1px solid #e8baba",
      margin: "10px",
      width: "100%",
      borderRadius: "5px",
    };
    return (
      <div className="container">
        <Navbar style={navbarStyle}>
          <Link to="/">HOME</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Button style={buttonStyle}>LOGIN</Button>{" "}
        </Navbar>
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
      </div>
    );
  }
}
export default Header;


