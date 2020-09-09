import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Footer";
import About from "./About";
import Login from"./Login";
import Home from "./Home";
import Signup from "./Signup";
import Admin from "../components/admin/Admin";
import Events from "./Events";
import AddManager from "../components/admin/AddManager";
import Client from "../components/admin/Client";
import EditProfile from "../components/user/EditProfile";
import EventsForm from "../components/EventsForm";
import ManagerDashboard from "../components/manager/ManagerDashboard";
const App = () => {
  return (
    <BrowserRouter>
      
      <Route path="/Admin" component={Admin}></Route>
      <Route path="/home" component={Home} exact></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Events" component={Events}></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/addmanager" component={AddManager} />
      <Route path="/Client" component={Client}></Route>
      <Route path="/editProfile" component={EditProfile} />
      <Route path="/manager-dashboard" component={ManagerDashboard}></Route>       
      <Route path="/eventsform" component={EventsForm}/>
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
