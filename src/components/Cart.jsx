import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  console.log(items.length);
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  return (
    <>
      <div className="cart w-full h-screen  xl:bg-white xl:px-80 xl:pt-24">
        <div className="cart-container w-full h-screen ">
          <div
            className={`cart-empty w-1/2  ${
              items.length > 0 ? "hidden" : "flex"
            }`}
          >
            <div className="empty-cart-img ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/13539/13539700.png"
                alt=""
              />
            </div>
            <h3>Your Cart is Empty</h3>
            <p>You can go to home page to view more restaurants</p>
            <button onClick={navigateToHome}>See Restaurants</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
