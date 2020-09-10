import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Admin.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import AdminHeader from "./AdminHeader";

import ManagerList from "../ManagerList";
const Admin = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div>
      <AdminHeader />
      <h4 id="title">Site Administration</h4>
      <div className="mini-nav">
        
      </div>
      <div className="container2">
        <div className="row">
          <div className="col-8">
            <ManagerList></ManagerList>
          </div>
        </div>
      </div>

      <br></br>
    </div>
  );
};
export default Admin;
