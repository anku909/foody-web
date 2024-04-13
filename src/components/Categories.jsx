import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import { Link } from "react-router-dom";

function CategoriesComp({}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
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
  return (
    <>
      <div className="categories">
        <div className="controls-text-area">
          <h3>Aaj Kya mangtta?</h3>
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
            {categories.map((catges) => {
              {
                return (
                  <Link to={`/categories`}>
                    <img
                      key={catges.id}
                      src={baseUrl + catges.imageId}
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
