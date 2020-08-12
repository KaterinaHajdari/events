import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { connect } from "react-redux";
import { createUserProfile } from "../redux/actions";

class Signup extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  setEmail=(event)=>{
      this.setState({
          email:event.target.value
      })}
  setUsername=(event)=>{
      this.setState({
          username:event.target.value
      })
  }
     
  setPassword=(event)=>{
          this.setState({
              password:event.target.value
          }) }

   setConfirmPassword=(event)=>{
       this.setState({
           confirmPassword:event.target.value
       })
   }

onFormSubmit=(formValues)=>{
  this.props.createUserProfile(formValues)
}
  render() {
    return (
      <div className="signup-form" onSubmit={this.onFormSubmit}>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-md-4 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
                <div class="form-label-group"> 
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                    autofocus
                    value={this.state.email}
                    onChange={this.setEmail}
                  />
                  <label for="Email"></label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Username"
                    required
                    autofocus
                    value={this.state.username}
                    onChange={this.setUsername}
                  />
                  <label for="username"></label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={this.state.password}
                    onChange={this.setPassword}
                  />
                  <label for="password"></label>
                </div>

                <div className="form-label-group">
                  <input
                    type="confirmPassword"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                    value={this.state.confirmPassword}
                    onChange={this.setConfirmPassword}
                  />
                  <label for="ConfirmPassword"></label>
                </div>

                <div id="button">
                  <button
                    className="btn btn-primary btn-md text-uppercase button"
                    type="submit" >
                    Signup </button>
                  <Link
                    to="/login"
                    className=" btn btn-primary text-uppercase login-link"  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, {createUserProfile})( Signup);

