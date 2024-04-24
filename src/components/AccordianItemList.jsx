import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/CartSlice";

function AccordianItemList({ itemCards }) {
  const dispatch = useDispatch();
  const handleAdd = (card) => {
    dispatch(addItem(card));
  };

  let imgaeBaseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <>
      <div className="items-container w-full">
        {itemCards.map((card, index) => (
          <div className="items-cards " key={card?.card?.info?.name + index}>
            <div className="line w-full h-[2px] bg-[#dededecc] mt-4 "></div>
            <div className="inner-section w-full xl:h-48  xl:mt-3 flex justify-between items-start xl:px-2">
              <div className="details xl:mt-8  xl:w-[70%]">
                <h2 className="xl:text-xl font-semibold">
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
                  onClick={() => handleAdd(card)}
                  className="add-item absolute bg-[#2f792f] xl:px-8 xl:py-2 xl:rounded-lg text-white xl:bottom-[-5px] xl:left-[34px] xl:font-semibold "
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AccordianItemList;
