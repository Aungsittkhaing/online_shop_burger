import React from "react";
import companyLogo from "../assets/react.svg";
const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div>
          <img src={companyLogo} alt="" className="navLogo" />
        </div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Location</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Nav;
