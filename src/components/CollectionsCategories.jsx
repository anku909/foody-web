import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slices/DataSlice";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom";

function CollectionsCategories() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [collectionsData, setCollectionsData] = useState();
  const { id, type } = useParams();
  const Url = `http://localhost:3000/api/v1/collections/${id}/${type}`;
  console.log(id);

  useEffect(() => {
    dispatch(fetchData(Url));
  }, []);

  useEffect(() => {
    if (data && data?.data && data?.data?.data) {
      const collections = data?.data?.data;
      setCollectionsData(collections);
    }
  }, [data]);

  const collectionsTypesData = collectionsData?.cards?.filter(
    (c) =>
      c?.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  return (
    <>
      <div className="collections w-full min-h-screen xl:pt-12 xl:px-[24rem]">
        <div className="collections-inner-section w-full min-h-screen  xl:pt-28">
          <div className="top-details-section w-full h-24  ">
            <h1 className="text-4xl font-semibold opacity-70 mb-4">
              {collectionsData?.cards[0]?.card?.card?.title}
            </h1>
            <span className="text-base font-base opacity-70">
              {collectionsData?.cards[0]?.card?.card?.description}
            </span>
          </div>
          <div className="cards-section w-full min-h-[130vh] mt-10">
            <div className="heading w-full h-10 mb-5">
              <h1 className="text-2xl font-semibold">
                {
                  collectionsData?.cards[2]?.card?.card?.gridElements
                    ?.infoWithStyle?.text
                }
              </h1>
            </div>
            <div className="cards-inner-section w-full min-h-screen flex flex-wrap justify-start gap-10">
              {collectionsTypesData &&
                collectionsTypesData.map((c, i) => (
                  <RestaurantCard resdata={c?.card?.card} key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionsCategories;
