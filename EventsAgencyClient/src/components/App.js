import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Login from"./Login";
import Home from "./Home";
import Signup from "./Signup";
import Admin from "../components/admin/Admin";
import Events from "./Events";
import EventsForm from "./EventsForm";
import Profile from"./Profile";
import EditProfile from "../components/user/EditProfile";
import AddManager from "../components/admin/AddManager";
import AdminEdit from "../components/admin/AdminEdit"
const App = () => {
  return (
    <BrowserRouter>
      
      <Route path="/Admin" component={Admin}></Route>
      <Route path="/Home" component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Events" component={Events}></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/Profile" component={Profile} />
      <Route path="/editProfile" component={EditProfile} />
      <Route path="/eventsform" component={EventsForm}/>
      <Route path="/addmanager" component={AddManager} />
      <Route path="/adminedit" component={AdminEdit} />
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
