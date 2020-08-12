import React from 'react';
import {Link} from 'react-router-dom';
import '/home/x.lici/Desktop/eventsagency/EventsAgencyClient/src/components/Signup.css';
class Signup extends React.Component{
    render(){
        return(
            <div className="form">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-md-4 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Sign Up</h5>
                    <div class="form-label-group">
                    <input type="email" id="email" class="form-control" placeholder="Email" required autofocus/>
                    <label for="Email"></label>
                  </div>
                      <div className="form-label-group">
                        <input type="text" id="username" className="form-control" placeholder="Username" required autofocus />
                        <label for="username"></label>
                      </div>
        
                      <div className="form-label-group">
                        <input type="password" id="password" className="form-control" placeholder="Password" required />
                        <label for="password"></label>
                      </div>
                       
                      <div className="form-label-group">
                        <input type="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirm Password" required />
                        <label for="ConfirmPassword"></label>
                      </div>

                      <div id="button">
                      
                      <button className="btn btn-primary btn-md text-uppercase button" type="submit">Signup</button>
                     <Link to="/login" className=" btn btn-primary text-uppercase login-link">Login</Link>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Signup;