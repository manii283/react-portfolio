import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <header>
        <NavLink to="/">
          <img src="./images/logo.png" alt="logo" />
        </NavLink>
         <Navbar/> 
      </header>
    </div>
  );
};

export default Header;
