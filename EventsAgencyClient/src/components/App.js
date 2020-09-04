import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Footer";
import About from "./About";
import Login from"./Login";
import Home from "./Home";
import Signup from "./Signup";
import Admin from "../components/admin/Admin";
import Events from "./Events";
import Profile from"./Profile";
import AddManager from "../components/admin/AddManager";
import AdminEdit from "../components/admin/AdminEdit"
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import EditProfile from "../components/user/EditProfile";
import ManagerLoginForm from "../components/manager/ManagerLoginForm";
import ManagerDashboard from "../components/manager/ManagerDashboard";
import EventsForm from "../components/EventsForm";

const App = () => {
  return (
    <BrowserRouter>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/Admin" component={Admin}></Route>
      <Route path="/home" component={Home} exact></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Events" component={Events}></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/Profile" component={Profile} />
      <Route path="/addmanager" component={AddManager} />
      <Route path="/adminedit" component={AdminEdit} />
      <Route path="/login-manager" component={ManagerLoginForm} />
      <Route path="/editProfile" component={EditProfile} />
      <Route path="/manager-dashboard" component={ManagerDashboard} />
      <Route path="/eventsform" component={EventsForm}/>
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
