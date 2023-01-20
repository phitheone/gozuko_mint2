import React from "react";
import "./navbar.css";

import logo from "../../images/logo_1.png";

const Navbar = () => {
  return (
    <div className="NBSuper">
      <div className="NBContainer">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
