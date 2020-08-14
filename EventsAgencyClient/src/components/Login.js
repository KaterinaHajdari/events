import React from "react";
import {Link} from 'react-router-dom';
import "./Login.css";
import { connect } from "react-redux";
import {checkLoginValue} from '../redux/actions/Login'

class Login extends React.Component {

  state={
    username:'',
    password:''
  }

  setUsername=(event)=>{
        this.setState({
            username:event.target.value
          }  ) }
      
  setPassword=(event)=>{
     this.setState({
         password:event.target.value
        })  }
 
        onFormSubmit=(event)=>{
          event.preventDefault();
 
         const loginValues={
           username:this.state.username,
           password:this.state.password
         }
      this.props.checkLoginValue(loginValues);

        }


  render() {
     console.log(this.props.login)


    return (
        <form class="form"  onSubmit={this.onFormSubmit}>
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                  
                  <div class="form-label-group">
                    <input
                     type="text" id="username" 
                     class="form-control" placeholder="Username"
                      required autofocus 
                      value={this.state.username}
                      onChange={this.setUsername}
                      />
                    <label for="username"></label>
                  </div>
    
                  <div class="form-label-group">
                    <input type="password" id="password"
                     class="form-control" placeholder="Password"
                      required
                      value={this.state.password}
                      onChange={this.setPassword}
                      />
                    <label for="password"></label>
                  </div>
                   
                  <div className="button-parent">
                  
                  <button className="btn btn-primary text-uppercase login-button" >LOGIN</button>        
                </div> 
                <div className="button-parent">
                <Link className="btn btn-primary text-uppercase signup-button" to="/signup">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    login:state.login
  }
}
export default connect(mapStateToProps, {checkLoginValue})(Login);
