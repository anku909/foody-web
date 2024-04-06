import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";

function TopRestaurant() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [restaurantslist, setRestaurantslist] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    if (data && data.data && data.data.data && data.data.data.cards) {
      const restaurantsData =
        data.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantslist(restaurantsData);
    }
  }, [data]);

  function handleSlideLeft() {
    var slider = document.querySelector(".cards-div");
    slider.scrollLeft -= 1100;
  }
  function handleSlideRight() {
    var slider = document.querySelector(".cards-div");
    slider.scrollLeft += 1100;
  }
  return (
    <>
      <div className="top-cards-container">
        <div className="crousal-text-div">
          <h2>Top Restaurant chains Near You</h2>
          <div className="controls">
            <button onClick={handleSlideLeft} className="left-btn">
              <i class="ri-arrow-left-s-line"></i>
            </button>
            <button onClick={handleSlideRight} className="right-btn">
              <i class="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
        <div className="cards-div">
          <div className="cards-section">
            {restaurantslist.map((resData) => (
              <RestaurantCard key={resData.info.id} resdata={resData} />
            ))}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}

export default TopRestaurant;
