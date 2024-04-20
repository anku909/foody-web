import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccordianItemList from "./AccordianItemList";
import { clearCart } from "../redux/slices/CartSlice";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems.length);
  useEffect(() => {
    setCartItems(items);
  }, [items]);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    handleClearCart;
  }, [handleClearCart]);
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  return (
    <>
      <div className="cart w-full h-screen  xl:bg-white xl:px-80 xl:pt-24 z-40">
        <div className="cart-container w-full min-h-screen px:20 flex flex-col justify-center items-center ">
          <div
            className={`cart-empty ${cartItems.length > 0 ? "hidden" : "flex"}`}
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
          {cartItems.length > 0 ? (
            <div>
              <div className="bg-zinc-300 w-[53vw] h-[50px] flex items-center justify-center rounded-lg">
                <h2 className="text-center text-2xl font-bold">CART</h2>
              </div>
              <div className="w-[53vw] h-10 mt-5 flex justify-between items-center px-4">
                <h4 className="text-xl font-semibold opacity-70 ">
                  Total Items ({cartItems.length})
                </h4>
                <button
                  onClick={handleClearCart}
                  className="text-lg px-4 py-[2px] bg-red-600 rounded-md text-center font-semibold text-white"
                >
                  clear cart
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="w-[80%]">
            <AccordianItemList itemCards={cartItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
