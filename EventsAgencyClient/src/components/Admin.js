import React from "react";
import { Link } from "react-router-dom";
import "../css/Admin.css";

class Admin extends React.Component {
  render() {
    return (
      <div >
          <h4 id="title">Site Administration</h4>
         
        <div className="col">
          <h5>Managers</h5>
           <div className="container2">
           <div className="row">
    <div className="col">
      Manager1
    </div>
    
    <div className="col">
      
    </div>
    </div>
    <div className="row">
    <div className="col">
      Manager2
    </div>
    </div>
    <div className="row">
    <div className="col">
      Manager3
    </div>
    </div>

        </div>
        </div>
          
        </div>
      
    );
  }
}
export default Admin;
