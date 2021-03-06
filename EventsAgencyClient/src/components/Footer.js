import React from "react";
import About from "./About";
import "../css/Footer.css";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faFacebookF, faInstagram, faTwitter);
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4> K & XH </h4>
          </div>

          <div className=" col-md-auto">
            <h6> Rr e Barrikadave, Tirane</h6>
          </div>
          <div className="col col-lg-2">
            <h6> Cel:04 256 478 </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
