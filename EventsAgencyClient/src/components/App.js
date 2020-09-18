import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Footer from "./Footer";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import Admin from "../components/admin/Admin";
import Events from "./Events";




import ManagerDashboard from "../components/manager/ManagerDashboard";
import Header from "./Header"

const App = () => {

  return (
<div>
  
    <BrowserRouter><Header/>
      
      <Route path="/Admin" component={Admin}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Events" component={Events}></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      
      
      
      <Route path="/manager-dashboard" component={ManagerDashboard}></Route>
     
      <Route path="/home" component={Home} />
     
     
    </BrowserRouter>
    <Footer />
  </div>
  );
};
export default App;
