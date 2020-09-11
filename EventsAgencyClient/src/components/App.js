import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Footer from "./Footer";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Signup from "./Signup";
import Admin from "../components/admin/Admin";
import Events from "./Events";
import Dashboard from "./Dashboard";
const App = () => {

  return (
<div>
    <BrowserRouter>
       
      <Route path="/Admin" component={Admin}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Events" component={Events}></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/home" exact component={Home} ></Route>
  
      <Footer/>
    </BrowserRouter>
    <Footer />
  </div>
  );
};
export default App;
