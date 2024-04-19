import React from "react";

function AccordianItemList({ itemCards }) {
  let imgaeBaseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <>
      <div className="items-container w-full  ">
        {itemCards.map((card, index) => (
          <div className="items-cards " key={card?.card?.info?.name + index}>
            <div className="line w-full h-[2px] bg-[#dededecc] mt-4 "></div>
            <div className="w-full h-48  mt-3 flex justify-between items-start px-2 ">
              <div className="details mt-8  w-[70%]">
                <h2 className="text-xl font-semibold">{card.card.info.name}</h2>
                <p className=" text-lg font-semibold">
                  ₹
                  {card.card.info.price
                    ? card.card.info.price / 100
                    : card.card.info.defaultPrice / 100}
                </p>
                <div className="rating flex gap-1 items-center">
                  <i class="ri-star-fill text-green-600 font-bold text-lg "></i>
                  <p className="text-s font-base">
                    {card.card.info.ratings.aggregatedRating.rating
                      ? card.card.info.ratings.aggregatedRating.rating
                      : "0"}
                  </p>
                </div>
                <div className="w-[70 mt-1">
                  <p className="text-sm font-sans">
                    {card.card.info.description}
                  </p>
                </div>
              </div>
              <div className="img-section-right  h-[95%] relative">
                <div className="img-section bg-[#83c791e2] w-40 h-40 rounded-2xl flex overflow-hidden items-center justify-center mt-3 cursor-pointer">
                  <img
                    className="  w-full h-full object-cover"
                    src={imgaeBaseURL + card?.card.info.imageId}
                    alt=""
                  />
                </div>
                <button className="add-item absolute bg-[#2f792f] px-8 py-2 rounded-lg text-white bottom-[-5px] left-[34px] font-semibold ">
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
