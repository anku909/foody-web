import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header w-full h-20 bg-slate-400 mb-40">
        <NavLink to="/">
          <h2 className="logo">Foody</h2>
        </NavLink>

        <div className="nav-items">
          <ul>
            <span>
              <i class="ri-coupon-2-line"></i>
              <NavLink className="navlink" to="/offers">
                Offers
              </NavLink>
            </span>
            <span>
              <i class="ri-question-line"></i>
              <NavLink className="navlink" to="/help">
                Help
              </NavLink>
            </span>
            <span>
              <i className="ri-user-3-line"></i>
              <NavLink>Sign In</NavLink>
            </span>
            <span>
              <i className="ri-shopping-bag-line"></i>
              <NavLink className="navlink" to="/cart">
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
