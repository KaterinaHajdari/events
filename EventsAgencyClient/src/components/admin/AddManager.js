import React from "react";
import {Link} from 'react-router-dom';
import "../../css/Login.css";
import AdminHeader from "./AdminHeader";
import {createManagerProfile} from "../../redux/actions/CreateManagerProfile";
import { connect } from "react-redux";
class AddManager extends React.Component{
   state={
     username:"",
     password:""
   };

   setUsername=(event)=>{
     this.setState({
       username:event.target.value
     })}

     setPassword=(event)=>{
       this.setState({
         password:event.target.value
       })
     }

     onFormSubmit=(event)=>{
       event.preventDefault();

       const managerValues={
         username:this.state.username,
         password:this.state.password
       }

       this.props.createManagerProfile(managerValues);
     }
     
    render(){
        return(
            <div>
          <AdminHeader/>
            <form class="form" onSubmit={this.onFormSubmit} >
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                  <div class="card-body">
                    <h5 class="card-title text-center">CREATE MANAGER</h5>
                      
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
                          onChange= {this.setPassword}
                       />
                        <label for="password"></label>
                      </div>
                       
                      <div className="button-parent">
                      
                      <button className="btn btn-primary text-uppercase login-button" >create</button>        
                    </div> 
                    
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>
        )
    }
}
export default connect(null,{createManagerProfile})(AddManager);