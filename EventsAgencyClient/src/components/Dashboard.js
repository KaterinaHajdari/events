import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../components/user/EditProfile";
import EventsForm from "./EventsForm";
import AddManager from "../components/admin/AddManager";
import Client from "../components/admin/Client";
import ManagerDashboard from "../components/manager/ManagerDashboard";
import EventsList from "../components/admin/EventsList";
import ManagerList from "../components/ManagerList";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <PrivateRoute path="/dashboard/editProfile" component={EditProfile} />

          <PrivateRoute path="/dashboard/eventsform" component={EventsForm} />

          <PrivateRoute path="/dashboard/addmanager" component={AddManager} />

          <PrivateRoute path="/dashboard/Client" component={Client} />

          <PrivateRoute
            path="/dashboard/manager-dashboard"
            component={ManagerDashboard}
          />

          <PrivateRoute path="/dashboard/EventsList" component={EventsList} />
          <PrivateRoute path="/dashboard/ManagerList" component={ManagerList} />
        </Switch>
      </>
    );
  }
}
export default Dashboard;
