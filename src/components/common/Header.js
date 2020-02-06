import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <div>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      |{" "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>{" "}
      |{" "}
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
    </div>
  );
}

export default Header;
