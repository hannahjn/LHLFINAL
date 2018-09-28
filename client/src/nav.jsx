import React, { Component } from "react";
import "./App.css";
import {
  NavLink,
} from "react-router-dom";

function Nav (props) {

    return (
      <div className="nav-bar">
        <nav id="nav-bar">
          <img className="logo" alt="" src="/images/tryitlogo.png"/>
            <ul className="nav-bar-items">
              <li className="nav-item active">
               <NavLink to="/"> Home </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/categories/chairs"> Chairs </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/categories/lighting"> Lighting </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/categories/tables"> Tables </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/search"> Search </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/about"> About Us </NavLink>
              </li>
            </ul>
      </nav>
    </div>

    );

}

export default Nav;
