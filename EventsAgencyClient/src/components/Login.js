import React from "react";
import {Link} from 'react-router-dom';
import "/home/x.lici/Desktop/eventsagency/EventsAgencyClient/src/components/Login.css";
class Login extends React.Component {
  render() {
    return (
        <div class="form">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                  
                  <div class="form-label-group">
                    <input type="text" id="username" class="form-control" placeholder="Username" required autofocus/>
                    <label for="username"></label>
                  </div>
    
                  <div class="form-label-group">
                    <input type="password" id="password" class="form-control" placeholder="Password" required/>
                    <label for="password"></label>
                  </div>
                   
                  <div id="button">
                  
                  <button className="btn btn-primary text-uppercase login-button" >LOGIN</button>        
                </div> 
                <Link className="btn btn-primary text-uppercase signup-button" to="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
