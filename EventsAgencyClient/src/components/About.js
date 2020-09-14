import React from "react";
import d from "./images/d.jpg";
import About from "../css/About.css";
const AboutUs = () => {
  return (
    <div>
      {" "}
      <img src={d} alt="Home" width="100%" height="100%" />
      <div class="container">
        <div class="text-block">
          <h1 id="aboutUs">Who we are </h1>
          <p>
            K & XH Event Planner is an event logistics and marketing company
            which was formed back in 2020. The company offers A-Z event planning
            services from a team of experienced and energetic event planners,
            suppliers, venues and more. One of the main reasons behind the
            success of Event Planner is the fact that the team does not charge
            fees to its clients! With the number of events we organise, K & XH
            Event Planner does not need to add exorbitant fees and mark-ups to
            make its profit margins. This ensures that our clients list, which
            is constantly growing, make regular use of our services.
          </p>
          <br></br>
          <p>
            Our team understands that a properly executed event can be leveraged
            to support an organization’s strategic vision, incorporated into a
            company’s marketing plan, or used to build networks and client
            loyalty.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
