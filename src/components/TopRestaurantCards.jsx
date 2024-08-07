import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import Shimmer from "./Shimmer";

function TopRestaurant() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [restaurantslist, setRestaurantslist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    if (
      data &&
      data.data &&
      data.data.data &&
      data.data.data.cards[1] &&
      data.data.data.cards[1].card.card
    ) {
      const restaurantsData =
        data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantslist(restaurantsData);
      setIsLoading(false);
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
            {isLoading
              ? Array.from({ length: 15 }).map((_, index) => (
                  <Shimmer key={index} />
                ))
              : restaurantslist.map((resData) => (
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
