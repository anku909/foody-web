import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/CartSlice";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems && storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

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

  const handleRemove = () => {};

  useEffect(() => {
    const totalPriceInCents = cartItems.reduce((total, item) => {
      const price =
        item?.card?.info?.defaultPrice ?? item?.card?.info?.price ?? 0;
      const quantity = item.card.quantity ?? 1;
      console.log(quantity);
      return total + price * quantity;
    }, 0);
    setTotalPrice(Math.floor(totalPriceInCents / 100));
  }, [cartItems]);

  const groupedItems = cartItems.reduce((acc, curr) => {
    const foundItem = acc.find(
      (item) => item.card.info.id === curr.card.info.id
    );
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      acc.push({ ...curr, quantity: 1 });
    }
    return acc;
  }, []);

  console.log(groupedItems);

  let imgaeBaseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <>
      <div className="cart w-full min-h-screen  xl:bg-white xl:px-80 xl:pt-24 z-40 mb-12">
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
          {groupedItems.length > 0 ? (
            <div className="outer-wrraper">
              <div className="heading-section bg-zinc-300 xl:w-[53vw] xl:h-[50px] flex items-center justify-center rounded-lg">
                <h2 className=" text-center text-2xl font-bold">CART</h2>
              </div>
              <div className="carts-details xl:w-[53vw] h-10 mt-5 flex justify-between items-center xl:px-4">
                <h4 className="text-xl font-semibold opacity-70 ">
                  Total Items ({cartItems.length})
                </h4>
                <h4 className="text-xl font-semibold opacity-70">
                  Total Price : {totalPrice}
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
          <div className="cart-items-list xl:w-[80%]">
            <div className="items-container w-full">
              {groupedItems.map((card, index) => (
                <div
                  className="items-cards "
                  key={card?.card?.info?.name + index}
                >
                  <div className="line w-full h-[2px] bg-[#dededecc] mt-4 "></div>
                  <div className="inner-section w-full xl:h-48  xl:mt-1 flex justify-between items-start xl:px-2 ">
                    <div className="details xl:mt-5  xl:w-[70%] ">
                      <div className="w-9 h-9 border-2 border-[#c2bdbd] rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold">
                          X {card.quantity}
                        </span>
                      </div>

                      <h2 className="xl:text-xl font-semibold mt-1">
                        {card.card.info.name}
                      </h2>
                      <p className=" xl:text-lg font-semibold">
                        ₹
                        {card.card.info.price
                          ? card.card.info.price / 100
                          : card.card.info.defaultPrice / 100}
                      </p>
                      <div className="rating flex gap-1 items-center">
                        <i class="ri-star-fill text-green-600 font-bold xl:text-lg "></i>
                        <p className="xl:text-s font-base">
                          {card.card.info.ratings.aggregatedRating.rating
                            ? card.card.info.ratings.aggregatedRating.rating
                            : "0"}
                        </p>
                      </div>

                      <div className=" description xl:w-[70 xl:mt-1">
                        <p className="text-sm font-sans">
                          {card.card.info.description}
                        </p>
                      </div>
                    </div>
                    <div className="img-section-right  xl:h-[95%] relative">
                      <div className="img-section bg-[#83c791e2] xl:w-40 xl:h-40 xl:rounded-2xl flex overflow-hidden items-center justify-center xl:mt-3 cursor-pointer">
                        <img
                          className="  xl:w-full xl:h-full object-cover"
                          src={imgaeBaseURL + card?.card.info.imageId}
                          alt=""
                        />
                      </div>
                      <button
                        key={card.card.info.id}
                        onClick={handleRemove}
                        className="add-item absolute bg-[#e33f3f] xl:px-4 xl:py-2 xl:rounded-lg text-white xl:bottom-[-5px] xl:left-[42px] xl:font-semibold text-sm "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
