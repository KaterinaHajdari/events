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
import AdminEdit from "../components/admin/AdminEdit";
import Client from "../components/admin/Client"
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
      <Route path="/Client" component={Client}></Route>
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
