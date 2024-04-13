import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  let [resData, setResData] = useState([]);

  const target_url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6542&lng=77.2373&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
  useEffect(() => {
    dispatch(fetchData(target_url));
  }, []);
  useEffect(() => {
    if (data && data?.data && data?.data?.data?.cards) {
      const restaurants = data?.data?.data?.cards || [];
      setResData(restaurants);
    }
  }, [data]);

  const { name } = resData[2]?.card?.card?.info || {};

  return (
    <>
      <div className="restaurant-menu w-full min-h-screen py-24 px-80">
        <div className="restaurant-menu-container w-full h-screen bg-white pt-20 ">
          <div className="w-full h-1/3 rounded-md bg-red-100">
            <div className="w-full bg-pink-300 pt-2">
              <h1 className="text-5xl">{name} </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
