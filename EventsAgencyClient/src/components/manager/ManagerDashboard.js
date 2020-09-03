import React, { useState } from "react";
import HeaderTwo from "../HeaderTwo";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import events from "../../redux/apis/events"
class ManagerDashboard extends React.Component {
   
    state={
        eventsList:[]
    }

    componentDidMount(){
      
 events.get("/events?approved=0")

       .then(res=>{

   
           this.setState({
            
               eventsList:res.data
           })
       } )
         }

  render() {
    return (
      <>
    
        <HeaderTwo />
     
        <h4 id="title">Site Administration</h4>
        <div className="container2">
          <div className="row">
            <div className="col-8">
              <ul>
                <li>mANAGER</li>
              </ul>
            </div>
            <div className="col-4">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>

              <IconButton aria-label="check">
                <CheckIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ManagerDashboard;
