import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Login from"./Login";
import Home from "./Home";
import Signup from "./Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Route path="/Home" component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Footer />
    </BrowserRouter>
  );
};
export default App;
