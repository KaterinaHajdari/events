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
    console.log(this.state);
    return (
      <>
    
        <HeaderTwo />
     
        <h4 id="title">Site Administration</h4>
        <div className="container2">
          <div className="row">
            <div className="col-8">
              <ul>
             
        {
          this.state.eventsList.map(
            (event) => 
            <li id={event.id} >
             Type:  {event.eventType}  <span />Date:  {event.date}  Time:  {event.time}  Participants:  {event.participants}  Details:   {event.details}
             
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>

              <IconButton aria-label="check">
                <CheckIcon />
              </IconButton>
         
                </li>
            )
            }
              </ul>
            </div>
           
          </div>
        </div>
      </>
    );
  }
}

export default ManagerDashboard;
