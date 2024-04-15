import React from "react";

function AccordianItemList({ itemCards }) {
  console.log(itemCards);
  let imgaeBaseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <>
      <div className="items-container w-full  ">
        {itemCards.map((card, index) => (
          <div className="items-cards ">
            <div className="line w-full h-[2px] bg-[#dededecc] mt-4"></div>
            <div
              key={index}
              className="w-full h-48  mt-3 flex justify-between items-start px-2 "
            >
              <div className="details mt-8">
                <h2 className="text-xl font-semibold">{card.card.info.name}</h2>
                <p className=" text-lg font-semibold">
                  ₹{Math.floor(card.card.info.price / 100)}
                </p>
                <div className="rating">
                  <p className="text-s font-thin">
                    {card.card.info.ratings.aggregatedRating.rating
                      ? card.card.info.ratings.aggregatedRating.rating
                      : "0"}
                  </p>
                </div>
              </div>
              <div className="img-section bg-[#83c791e2] w-40 h-40 rounded-3xl flex overflow-hidden items-center justify-center mt-3 cursor-pointer">
                <img
                  className=" object-cover w-[160px] h-[160px] "
                  src={imgaeBaseURL + card?.card.info.imageId}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AccordianItemList;
