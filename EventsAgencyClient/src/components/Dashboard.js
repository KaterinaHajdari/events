import React from "react";
import {Switch} from "react-router-dom";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../components/user/EditProfile";
import EventsForm from "./EventsForm";

class Dashboard extends React.Component{
    render(){
        return(
            <>
            <Header/>
            <Switch>
                  <PrivateRoute path="/dashboard/editProfile" component={EditProfile} />
                  <PrivateRoute path="/dashboard/eventsform" component={EventsForm}/>
            </Switch>
            </>
        )
    }
}