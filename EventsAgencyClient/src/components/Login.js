import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkLoginValue } from "../redux/actions/Login";

import Loading from "./Loading";
import Error from "./Error";
import Admin from "./admin/Admin";

import "../css/Login.css";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const loginValues = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.checkLoginValue(loginValues);
  };

  render() {
    const loading = this.props.login.loading;
    const error = this.props.login.error;
    const isLoggedIn = this.props.login.isLoggedIn;

    if (loading && error === null && !isLoggedIn) {
      return <Loading />;
    } else if (
      !loading &&
      error === null &&
      !isLoggedIn &&
      this.props.login.values.type === "user"
    ) {
      return <Redirect to="/events" />;
    } else if (
      !loading &&
      error === null &&
      !isLoggedIn &&
      this.props.login.values.type === "manager"
    ) {
      return <Redirect to="/manager-dashboard" />;
    } else if (!loading && error === null && this.props.login.values.type==="admin") {
      return <Admin />;
    } else if (loading && error !== null) {
      return <Error />;
    } else {
      return (
        <div>
        
          <form class="form" onSubmit={this.onFormSubmit}>
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                  <div class="card-body">
                    <h5 class="card-title text-center">Login</h5>

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
                        LOGIN
                      </button>
                    </div>
                    <div className="button-parent">
                      <Link
                        className="btn btn-primary text-uppercase signup-button"
                        to="/signup"
                      >
                        Signup
                      </Link>
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
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps, { checkLoginValue })(Login);
