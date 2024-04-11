import React from "react";
import CategoriesComp from "./Categories";
import TopRestaurant from "./TopRestaurantCards";
import AllCards from "./AllCards";

function Body() {
  return (
    <>
      <div className="body sm:w-full sm:px-40 sm:pt-12 md:w-full md:px-80 md:pt-24 xl:w-full xl:px-80 xl:pt-24 ">
        <div className="body-container w-full min-h-screen ">
          <CategoriesComp />
          <div className="line"></div>
          <TopRestaurant />
          <div className="body-all-cards w-full min-h-screen ">
            <AllCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
