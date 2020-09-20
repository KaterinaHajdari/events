import React from "react";
import { Input } from "reactstrap";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { editProfile } from "../redux/actions/EditProfile";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import avatar from "../avatar.png";
import Loading from "./Loading";
import Error from "./Error";
import "../css/Profile.css";


class EditProfile extends React.Component {
  state = {
    username: undefined,
    email: undefined,
    password: undefined,
    type: this.props.login.values.type,
  };

  arrangeUsername = () => {
    return this.state.username !==undefined
      ? this.state.username
      : this.props.login.values.username;
  };

  arrangeEmail = () => {
    return this.state.email !==undefined
      ? this.state.email
      : this.props.login.values.email;
  };

  arrangePassword = () => {
    return this.state.password !==undefined
      ? this.state.password
      : this.props.login.values.password;
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
      username: this.arrangeUsername(),
      email: this.arrangeEmail(),
      password: this.arrangePassword(),
      type: this.state.type,
    };
    await this.props.editProfile(
      this.props.login.values.id,
      editProfileNewValues
    );
  };

  render() {
    const loading = this.props.EditProfile.loading;
    const error = this.props.EditProfile.error;
    const type = this.props.login.values.type;

    if (loading && error === null) {
      return <Loading />;
    } else if (!loading && error === null && type === "admin") {
      return <Redirect to="/Admin" />;
    } else if (loading && error !== null) {
      return <Error />;
    } else if (loading && error !== null) {
      return <Error />;
    } else {
      return (
        <div className="parent">
          <Form className="profile-container" onSubmit={this.onFormSubmit} autocomplete="off">
            <Container>
              <Row>
                <Col>
                  <img src={avatar} id="avatar" alt="avatar" />
                </Col>
              </Row>
              <div className="contain">
                <Row>
                  <Col>
                    <Col>Username:</Col>
                  </Col>
                  <Col>
                    <Col>
                      <Input
                        value={this.arrangeUsername()}
                        onChange={this.setUsername}
                      ></Input>
                    </Col>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Col>Email:</Col>
                  </Col>
                  <Col>
                    <Col>
                      <Input
                        value={this.arrangeEmail()}
                        onChange={this.setEmail}
                        id="email"
                      ></Input>
                    </Col>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Col> Password:</Col>
                  </Col>
                  <Col>
                    <Col>
                      <Input
                        type="password"
                        value={this.arrangePassword()}
                        onChange={this.setPassword}
                        id="password"
                      ></Input>
                    </Col>
                  </Col>
                </Row>

                <Row>
                  <Col>
                  </Col>
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