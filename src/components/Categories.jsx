import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import { Link } from "react-router-dom";
import { headingData } from "../data/headingData";

function CategoriesComp({}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [categories, setCategories] = useState([]);
  const url = "https://proxy-server-alpha-eosin.vercel.app/api/v1/collections";
  const [heading, setHeading] = useState(headingData[0].heading);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchData(url));
  }, []);

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
    }
  }, [data]);

  let baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
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
            {categoriesWithUrlTags.map((catges) => {
              {
                return (
                  <Link
                    to={`/categories/${catges.urlTags.tags}/${catges.urlTags.collectionId}`}
                  >
                    <img
                      key={catges.category.id}
                      src={baseUrl + catges.category.imageId}
                      alt=""
                    />
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesComp;
