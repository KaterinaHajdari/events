import React from "react";
import {Link,Redirect} from 'react-router-dom';
import "../../css/Login.css";
import Header from "../Header";
import {connect} from "react-redux";
import {checkManagerLoginValues} from "../../redux/actions/ManagerLogin";
import Loading from "../Loading";
import Error from "../Error";
class ManagerLoginForm extends React.Component {
    state={
        username:"",
        password:""
    }

    setUsername=(event)=>{
        this.setState({
           username:event.target.value
        })
    }

    setPassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    onFormSubmit=(event)=>{
        event.preventDefault();

        const managerLoginValues={
            username:this.state.username,
            password:this.state.password
        }
        this.props.checkManagerLoginValues(managerLoginValues);
    }
  render() {
      const error=this.props.managerLogin.error;
      const loading=this.props.managerLogin.loading;
    
      if(loading && error===null){
          return <Loading />
      }
      else if(!loading && error===null){
          return <Redirect  to="/manager-dashboard" />
      }
      else if (loading && error!==null){
         return <Error/>
      }
      else{
    return (
      <div>
        <Header/>
        <form class="form"  onSubmit={this.onFormSubmit}>
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Login as manager</h5>
                  
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
                    value={this.state.password}
                    onChange={this.setPassword}
                      />
                    <label for="password"></label>
                  </div>   
                  <div className="button-parent">
                  <button className="btn btn-primary text-uppercase login-button" >Login</button>        
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

const mapStateToProps=(state)=>{
    return{
        managerLogin:state.ManagerLogin
    }
}

export default connect(mapStateToProps,{checkManagerLoginValues})(ManagerLoginForm);
