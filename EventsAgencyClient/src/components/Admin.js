import React from "react";
import { Link } from "react-router-dom";
import "../css/Admin.css";
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
class Admin extends React.Component {
  render() {
    return (
      <div>
        <h4 id="title">Site Administration</h4>

        <div className="col">
          <h5>Managers</h5>
          <div className="container2">
            <div className="row">


              <div className="col ml-auto"><ul>
                <li>Manager1</li>
              </ul>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>

              <IconButton aria-label="check">
                <CheckIcon />
              </IconButton></div>
              
            </div>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}
export default Admin;
