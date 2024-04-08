import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import { Link } from "react-router-dom";

function AllCards({ visible, setVisible }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const [listOfRestaurants, setRestaurants] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (data && data.data) {
      const restaurants = data?.data?.allResList || [];
      setRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
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
      setFilteredRestaurants();
    }
    console.log(searchName);
  };

  const handlefitlerOptions = () => {
    setVisible(!visible);
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
        <button onClick={handlefitlerOptions} className="filter-options-btn">
          Filter
        </button>
        {visible && (
          <FilterOptionsPopup visible={visible} setVisible={setVisible} />
        )}
        <button
          onClick={handlesortDeliveryTime}
          className="fast-delivery-sort-button"
        >
          Fast Delivery
        </button>
      </div>
      <div className="all-cards-section">
        {filteredRestaurants.map((resData) => (
          <RestaurantCard resdata={resData} key={resData.info.id} />
        ))}
      </div>
    </>
  );
}

export default AllCards;
