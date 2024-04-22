import React, { useState } from "react";
import AccordianItemList from "./AccordianItemList";

function CategoreyAccordian({ data, showItem, setShowIndex }) {
  const handleShowItem = () => {
    setShowIndex();
  };
  return (
    <>
      <div className="items-accordion w-full mt-6 xl:px-6 rounded-lg">
        <div
          onClick={handleShowItem}
          className=" items-accordion-details flex justify-between"
        >
          <h1 className="xl:text-xl font-semibold">
            {data.title} <span>({data.itemCards.length})</span>
          </h1>
          <h4 className="cursor-pointer font-semibold xl:text-xl">
            {showItem ? (
              <i class="ri-arrow-up-s-line"></i>
            ) : (
              <i class="ri-arrow-down-s-line"></i>
            )}
          </h4>
        </div>
        <div className=" w-full flex justify-center  ">
          {showItem && <AccordianItemList itemCards={data.itemCards} />}
        </div>
        <div className="bottom-border w-full h-3 bg-[#c7c7c775] mt-3"></div>
      </div>
    </>
  );
}

export default CategoreyAccordian;
