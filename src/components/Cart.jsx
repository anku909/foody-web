import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccordianItemList from "./AccordianItemList";
import { clearCart } from "../redux/slices/CartSlice";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems]);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  // Update localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem("cartItems");
  };

  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  return (
    <>
      <div className="cart w-full h-screen  xl:bg-white xl:px-80 xl:pt-24 z-40 ">
        <div
          className={`cart-container w-full min-h-[80vh]  flex flex-col ${
            cartItems.length > 0 ? "" : "justify-center"
          }`}
        >
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
            <div className="outer-wrraper">
              <div className="heading-section bg-zinc-300 xl:w-[53vw] xl:h-[50px] flex items-center justify-center rounded-lg">
                <h2 className=" text-center text-2xl font-bold">CART</h2>
              </div>
              <div className="carts-details xl:w-[53vw] h-10 mt-5 flex justify-between items-center xl:px-4">
                <h4 className="text-xl font-semibold opacity-70 ">
                  Total Items ({cartItems.length})
                </h4>
                <button
                  onClick={handleClearCart}
                  className="xl:text-lg xl:px-4 xl:py-[2px] xl:bg-red-600 xl:rounded-md text-center font-semibold text-white"
                >
                  clear cart
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="cart-items-list w-[80%]">
            <AccordianItemList itemCards={cartItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
