import React from "react";
function RestaurantCard(resData) {
  const { resdata } = resData;

  let imgaeBaseURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <>
      <div className="card">
        <a href={"/restaurant"}>
          <div className="card-img">
            <img
              src={imgaeBaseURL + resdata.info.cloudinaryImageId}
              alt="food-image"
            />
          </div>
          <div className="details-section">
            <div className="text-details">
              <div className="name-div">
                <h3 className="name">{resdata.info.name}</h3>
              </div>
              <div className="stars-and-more">
                <span className="rating">
                  <i className="ri-star-fill"></i>
                  {resdata.info.avgRating}
                </span>
                <p className="deliveryTime">
                  <i className="ri-time-line"></i>
                  {resdata.info.sla.deliveryTime}
                </p>
              </div>
              <div className="types-div">
                <p className="type">{resdata.info.cuisines.join(", ")}</p>
              </div>
              <div className="location-div">
                <h5 className="location">{resdata.info.locality}</h5>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default RestaurantCard;
