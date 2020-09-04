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
             Type:   {event.eventType}  <span style={{display:"inline-block", width:"50px"}} />
             Date:  {event.date} <span style={{display:"inline-block", width:"50px"}} />
             Time:  {event.time}  <span style={{display:"inline-block", width:"50px"}} />
             Participants:  {event.participants}  <span style={{display:"inline-block", width:"50px"}} />
              Details: {event.details}  <span style={{display:"inline-block", width:"50px"}} />
             
              <IconButton aria-label="delete" style={{color:"red", width:"30px"}}>
                <DeleteIcon />
              </IconButton>

              <IconButton aria-label="check" style={{color:"green"}}>
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
