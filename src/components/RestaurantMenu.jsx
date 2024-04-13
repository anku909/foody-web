import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  let [resData, setResData] = useState([]);
  console.log();

  const target_url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6542&lng=77.2373&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
  useEffect(() => {
    dispatch(fetchData(target_url));
  }, []);
  useEffect(() => {
    if (data && data.data) {
      const restaurants = data?.data.data.cards || [];
      setResData(restaurants);
    }
  }, [data]);
  console.log(resData.cards);
  <>
    <div className="restaurant-menu w-full min-h-screen bg-red-100 py-24 px-80">
      <div className="restaurant-menu-container w-full h-screen bg-white ">
        {}
      </div>
    </div>
  </>;
}

export default RestaurantMenu;
