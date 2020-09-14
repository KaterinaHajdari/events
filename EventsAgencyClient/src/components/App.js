import About from "./About";
import Login from "./Login";
import Home from "./Home";

import Signup from "./Signup";
import Admin from "../components/admin/Admin";
import Events from "./Events";
import AddManager from "../components/admin/AddManager";
import Client from "../components/admin/Client";
import EventsList from "../components/admin/EventsList";
import EditProfile from "../components/user/EditProfile";
import EventsForm from "../components/EventsForm";
import ManagerDashboard from "../components/manager/ManagerDashboard";
import ManagerList from "./ManagerList.js";
const App = () => {

  return (
<div>
    <BrowserRouter>
      <Route path="/EventsList" component={EventsList} />
      <Route path="/Admin" component={Admin}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Events" component={Events}></Route>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/addmanager" component={AddManager} />
      <Route path="/Client" component={Client}></Route>
      <Route path="/editProfile" component={EditProfile} />
      <Route path="/manager-dashboard" component={ManagerDashboard}></Route>
      <Route path="/eventsform" component={EventsForm} />

      <Route path="/ManagerList" component={ManagerList} />
    
    </BrowserRouter>
    <Footer />
  </div>
  )}