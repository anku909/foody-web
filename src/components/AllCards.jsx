import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import Shimmer from "./Shimmer";
import { mobileApiUrl, pcApiUrl } from "../Constants";

function AllCards({ visible, setVisible }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const [listOfRestaurants, setRestaurants] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    let apiUrl = isMobile ? mobileApiUrl : pcApiUrl;
    dispatch(fetchData(apiUrl));
  }, []);

  useEffect(() => {
    if (
      data &&
      data?.data &&
      data?.data?.data &&
      data?.data?.data?.cards[4] &&
      data?.data?.data?.cards[4]?.card?.card
    ) {
      const restaurants =
        data?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
      setIsLoading(false);
    }
  }, [data]);



  const handlesortDeliveryTime = () => {
    const filterlist = listOfRestaurants.filter(
      (res) => res.info.sla.deliveryTime < 30
    );
    setFilteredRestaurants(filterlist);
  };

  const handleSearchCard = (e) => {
    e.preventDefault();
    const searchValue = e.target.value.toLowerCase();
    setInputValue(searchValue);
    const searchName = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (searchName.length !== 0) {
      setFilteredRestaurants(searchName);
    } else {
      setFilteredRestaurants(filteredRestaurants);
    }
  };

  return (
    <>
      <div className="filters-search-section">
        <div className="searchBar">
          <input
            onChange={handleSearchCard}
            value={inputValue}
            type="text"
            placeholder="Search Here"
          />
        </div>
        <button onClick="" className="filter-options-btn">
          Filter
        </button>
     
        <button
          onClick={handlesortDeliveryTime}
          className="fast-delivery-sort-button"
        >
          Fast Delivery
        </button>
      </div>
      <div className="all-cards-section">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Shimmer key={index} />
            ))
          : filteredRestaurants.map((res) => (
              <RestaurantCard resdata={res} key={res.info.id} />
            ))}
      </div>
    </>
  );
}

export default AllCards;
