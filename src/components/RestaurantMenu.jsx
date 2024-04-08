import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  let [resData, setResData] = useState([]);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (data && data.data) {
      const restaurants = data?.data?.allResList || [];

      setResData(restaurants);
    }
  }, [data]);

  const clickedCard = resData.find((elem) => elem.info.id === resId);
  //   console.log(clickedCard);

  //   console.log(data.data.allResList.info.name);

  return (
    <>
      <div className="restaurant-menu w-full min-h-screen bg-red-100 py-24 px-80">
        <div className="restaurant-menu-container w-full h-screen bg-white ">
          {clickedCard ? (
            <div key={clickedCard.info.id}>
              <p>{clickedCard.info.id}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
