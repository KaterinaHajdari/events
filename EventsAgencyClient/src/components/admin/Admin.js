import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Admin.css";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle id="manager-button" caret>
            Managers
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              {" "}
              <Link to="/Client">Clients</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Events</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
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
