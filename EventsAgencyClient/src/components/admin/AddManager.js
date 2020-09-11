import React from "react";
import { createUserProfile } from "../../redux/actions/Signup";
import { connect } from "react-redux";

import AdminHeader from "./AdminHeader";
import "../../css/Login.css";
class AddManager extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
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

  onFormSubmit = (event) => {
    event.preventDefault();

    const managerValues = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      type: "manager",
    };

    this.props.createUserProfile(managerValues);
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <form class="form" onSubmit={this.onFormSubmit}>
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="card card-signin my-5">
                <div class="card-body">
                  <h5 class="card-title text-center">CREATE MANAGER</h5>

                  <div class="form-label-group">
                    <input
                      type="text"
                      id="username"
                      class="form-control"
                      placeholder="Username"
                      required
                      autofocus
                      value={this.state.username}
                      onChange={this.setUsername}
                    />
                    <label for="username"></label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="Email"
                      required
                      autofocus
                      value={this.state.email}
                      onChange={this.setEmail}
                    />
                    <label for="email"></label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      placeholder="Password"
                      required
                      value={this.state.password}
                      onChange={this.setPassword}
                    />
                    <label for="password"></label>
                  </div>

                  <div className="button-parent">
                    <button className="btn btn-primary text-uppercase login-button">
                      create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { createUserProfile })(AddManager);
