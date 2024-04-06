import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header w-full h-20 bg-slate-400 mb-40">
        <NavLink to="/">
          <span className="logo">Foody</span>
        </NavLink>

        <div className="nav-items">
          <ul>
            <NavLink className="navlink" to="/offers">
              offers
            </NavLink>
            <NavLink className="navlink" to="/help">
              Help
            </NavLink>
            <p className="navlink">Sign in</p>
            <NavLink className="navlink" to="/cart">
              cart
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
