import React from "react";
import { Input } from "reactstrap";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { editProfile } from "../redux/actions/EditProfile";
import { Button } from "reactstrap";

import "../css/Profile.css";
import avatar from "../avatar.png";

import Loading from "./Loading";
import Error from "./Error";
import { connect } from "react-redux";

class EditProfile extends React.Component {
  state = {
    username: this.props.login.values.username,
    email: this.props.login.values.email,
    password: this.props.login.values.password,
    type: this.props.login.values.type
  };

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();

    const editProfileNewValues = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      type: this.state.type
    };
    await this.props.editProfile(this.props.login.values.id, editProfileNewValues);
  };

  render() {
    const loading = this.props.EditProfile.loading;
    const error = this.props.EditProfile.error;
    const type = this.props.login.values.type;

    if (loading && error === null) {
      return <Loading />;
    }  else if (!loading && error === null && type === "admin") {
      return <Redirect to="/Admin" />;
    } else if (loading && error !== null) {
      return <Error />;
    } else if (loading && error !== null) {
      return <Error />;
    } else {
      return (
        <div>
          <Form className="profile-container" onSubmit={this.onFormSubmit}>
            <Container>
              <Row>
                <Col md={6}>
                  <img src={avatar} id="avatar" alt="avatar" />
                </Col>
              </Row>
              <div className="contain">
                <Row xs={2} md={4}>
                  <Col>
                    <Col>Username:</Col>
                  </Col>
                  <Col>
                    <Col>
                      <Input
                        value={this.state.username}
                        onChange={this.setUsername}
                      ></Input>
                    </Col>
                  </Col>
                </Row>

                <Row xs={2} md={4}>
                  <Col>
                    <Col>Email:</Col>
                  </Col>
                  <Col>
                    <Col>
                      <Input
                        value={this.state.email}
                        onChange={this.setEmail}
                      ></Input>
                    </Col>
                  </Col>
                </Row>
                <Row xs={2} md={4}>
                  <Col>
                    <Col> Password:</Col>
                  </Col>
                  <Col>
                    <Col>
                      <Input
                      type="password"
                        value={this.state.password}
                        onChange={this.setPassword}
                      ></Input>
                    </Col>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button id="editP-btn">Save Changes</Button>
                  </Col>
                </Row>
              </div>
            </Container>
          </Form>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    EditProfile: state.EditProfile,
  };
};
export default connect(mapStateToProps, { editProfile })(EditProfile);
