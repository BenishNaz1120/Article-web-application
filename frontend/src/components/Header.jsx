import React from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {

  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h2>
          You can write <span>Your </span>own Atricle
        </h2>
        <p className="details">
          “Good writing is supposed to evoke sensation in the reader – not the fact that it is raining, but the feeling of being rained upon.”
        </p>
        <div className="header-btns">
          {/* <a href="#" className="cv-btn">
            Hire Me!
          </a> */}
          {/* <Link to="/signin" className="cv-btn1">
            SignIn
          </Link> */}
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
};

export default Header;
