import React from "react";
import { Link } from "react-router-dom";

const RightContainer = () => {
  return (
    <div className="right-container-wrapper">
      <div className="welcome">
        <img src="assets/img/Welcome!.png" alt="" />
        <p>Enter details to login</p>
      </div>
      <form action="">
        <div className="password-wrapper">
          <input type="email" placeholder="Email" />
        </div>
        <div className="password-wrapper">
          <input type="password" placeholder="Password" />
          <span className="show-wrapper">show</span>
        </div>
        <div className="forget-password">
          <p>Forget Password</p>
        </div>
        <Link to="/dashboard">
        <div className="button-wrapper">
          <button>LOG IN</button>
        </div>
        </Link>
      </form>
    </div>
  );
};

export default RightContainer;
