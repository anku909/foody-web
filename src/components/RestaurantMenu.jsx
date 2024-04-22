import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import { useParams } from "react-router-dom";
import CategoreyAccordian from "./CategoreyAccordian";

function RestaurantMenu() {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [resData, setResData] = useState([]);
  const [showIndex, setShowIndex] = useState(0);

  const target_url = `https://proxy-server-alpha-eosin.vercel.app/api/v1/restaurantmenu/${resId}`;
  useEffect(() => {
    dispatch(fetchData(target_url));
  }, []);
  useEffect(() => {
    if (data && data?.data && data?.data?.data && data?.data?.data?.cards) {
      const restaurants = data?.data?.data?.cards || {};
      setResData(restaurants);
    }
  }, [data]);

  const categoriesData =
    data?.data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, costForTwoMessage, cuisines, avgRatingString, areaName, sla } =
    resData[2]?.card?.card?.info || {};

  const handleAccordionClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="restaurant-menu w-full min-h-screen xl:pt-12 xl:px-[30rem] ">
        <div className="restaurant-menu-container w-full bg-white xl:pt-20 bg-green-100">
          <div className="top-details-container w-full xl:h-[33%] rounded-md">
            <div className="name-section w-full xl:pt-1 ">
              <h1 className="xl:text-4xl xl:h-12 opacity-80 font-mono">
                {name}{" "}
              </h1>
              <div className="line w-full h-[3px] bg-[#ecececb0] mt-3"></div>
            </div>
            <div className="menu-restaurant-details w-full xl:h-full rounded-t-md rounded-b-[35px] bg-gradient-to-t from-[#049d4b83] xl:px-10 xl:py-6 xl:mt-6">
              <div className="inside-content w-full h-full bg-white rounded-2xl border-[1px] border-[#919191a1] px-6 py-6">
                <div className="details-section w-full xl:h-[15%] flex xl:gap-4">
                  <i className="ri-star-fill text-[#0a5d31c1] xl:text-xl">
                    <span className="xl:text-lg ml-1">{avgRatingString}</span>
                  </i>
                  <h2 className="xl:text-lg font-semibold">
                    {costForTwoMessage}
                  </h2>
                </div>
                <div className="cuisines w-full xl:h-6 xl:mt-3 ">
                  <span className="text-md text-[#088120eb] font-semibold cursor-pointer underline">
                    {cuisines?.join(" ,")}
                  </span>
                </div>
                <div className="delivery-details w-full xl:h-18 xl:mt-2  xl:py-2 flex xl:gap-3 ">
                  <div className="visual xl:w-3 xl:h-14  flex flex-col items-center justify-center">
                    <div className="circle-upper w-2 h-2 bg-[#aaa9a9] rounded-full"></div>
                    <div className="vertical-line h-[50%] w-[1px] bg-[#aaa9a9]"></div>
                    <div className="circle-down w-2 h-2 bg-[#aaa9a9] rounded-full"></div>
                  </div>
                  <div className="details flex flex-col items-start justify-between">
                    <h2 className="text-sm font-semibold">
                      {areaName && areaName}
                    </h2>
                    <h2 className="text-sm font-semibold">{sla?.slaString}</h2>
                  </div>
                </div>
                <div className="line w-full h-[1px] bg-[#c7c6c6] mt-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-upper-line w-full h-[3px] bg-[#e8e8e8] xl:mt-14"></div>
        <div className="menu-text bg-[#f2f2f2] h-12 mt-10 mb-10 rounded-md">
          <h1 className="text-3xl font-bold opacity-60 text-center py-2 ">
            MENU
          </h1>
        </div>
        {categoriesData &&
          categoriesData.map((category, index) => (
            <CategoreyAccordian
              key={index}
              data={category?.card?.card}
              showItem={showIndex === index}
              setShowIndex={() => handleAccordionClick(index)}
            />
          ))}
      </div>
    </>
  );
}

export default RestaurantMenu;
