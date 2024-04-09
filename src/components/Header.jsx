import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      {console.log("rendered again")}
      <div className="header w-full h-20 bg-slate-400 mb-40">
        <NavLink to="/">
          <h2 className="logo">Foody</h2>
        </NavLink>

        <div className="nav-items">
          <ul>
            <span>
              <NavLink className="navlink" to="/offers">
                <i class="ri-coupon-2-line"></i>
                Offers
              </NavLink>
            </span>
            <span>
              <NavLink className="navlink" to="/help">
                <i class="ri-question-line"></i>
                Help
              </NavLink>
            </span>
            <span>
              <NavLink>
                <i className="ri-user-3-line"></i>
                Sign In
              </NavLink>
            </span>
            <span>
              <NavLink className="navlink" to="/cart">
                <i className="ri-shopping-bag-line"></i>
                Cart
              </NavLink>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
