import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { headingData } from "../data/headingData";
import loadingImg from "../assets/loading-logo.png";
import { categoriesImgBaseUrl } from "../Constants";

function CategoriesComp({}) {
  const data = useSelector((state) => state.data);
  const [categories, setCategories] = useState([]);
  const [heading, setHeading] = useState(headingData[0].heading);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (
      data &&
      data.data &&
      data.data.data &&
      data.data.data.cards[0] &&
      data.data.data.cards[0].card.card
    ) {
      const categoriesData =
        data?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
      setCategories(categoriesData);
      setIsloading(false);
    }
  }, [data]);

  function handleSlideLeft() {
    var slider = document.querySelector(".categories-choices");
    slider.scrollLeft -= 600;
  }
  function handleSlideRight() {
    var slider = document.querySelector(".categories-choices");
    slider.scrollLeft += 600;
  }
  function extractParamsFromURL(url) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const collectionId = urlParams.get("collection_id");
    const tags = urlParams.get("tags");
    return { collectionId, tags };
  }

  const categoriesWithUrlTags = categories.map((category) => {
    const urlTags = extractParamsFromURL(category.action.link);
    return {
      category: { ...category }, // Spread the category object to create a shallow copy
      urlTags: urlTags,
    };
  });

  // Function to increment the current heading index, wrapping around to 0 after reaching the end
  const incrementHeadingIndex = () => {
    setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headingData.length);
  };

  // Use useEffect to trigger the rendering of headings
  useEffect(() => {
    // Start with a delay of 5 seconds
    const timer = setTimeout(() => {
      setHeading(headingData[currentHeadingIndex].heading);
      incrementHeadingIndex();
    }, 8000);

    // Set up intervals to render headings every 5 seconds
    const interval = setInterval(() => {
      setHeading(headingData[currentHeadingIndex].heading);
      incrementHeadingIndex();
    }, 8000);

    // Clear the timer and interval when the component unmounts
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [currentHeadingIndex]);

  return (
    <>
      {isLoading ? (
        <div className="categories-loading w-full h-[32vh] bg-[#0f5734d7] flex flex-col items-center justify-center">
          <div className="circle w-28 h-28 rounded-full bg-[#f0ebeb] opacity-90 flex justify-center items-center">
            <img src={loadingImg} width="100" alt="Food Transparent PNG" />
          </div>
          <h1 className="text-3xl font-semibold text-white mt-2">
            Looking for greate food near you
          </h1>
        </div>
      ) : (
        <div className="categories">
          <div className="controls-text-area">
            <h3>{heading}</h3>
            <div className="controls">
              <button onClick={handleSlideLeft} className="left-btn">
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button onClick={handleSlideRight} className="right-btn">
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
          <div className="categories-choices">
            <div className="categories-scroll-div">
              {categoriesWithUrlTags.map((catges, index) => {
                {
                  return (
                    <Link
                      to={`/categories/${catges.urlTags.tags}/${catges.urlTags.collectionId}`}
                    >
                      <img
                        key={index}
                        src={categoriesImgBaseUrl + catges.category.imageId}
                        alt=""
                      />
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CategoriesComp;
