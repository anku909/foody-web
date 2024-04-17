import React, { useState } from "react";
import AccordianItemList from "./AccordianItemList";

function CategoreyAccordian(data) {
  const [showItem, setShowItem] = useState(true);
  const handleShowItem = () => {
    setShowItem(!showItem);
  };

  return (
    <>
      <div className="itmes-accordian w-full mt-6 b px-6 rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-xl ">
            {data.data.title} <span>({data.data.itemCards.length})</span>
          </h1>
          <h4
            className="cursor-pointer font-semibold text-xl"
            onClick={handleShowItem}
          >
            {showItem ? (
              <i class="ri-arrow-up-s-line"></i>
            ) : (
              <i class="ri-arrow-down-s-line"></i>
            )}
          </h4>
        </div>
        <div className=" w-full flex justify-center  ">
          {showItem && <AccordianItemList itemCards={data.data.itemCards} />}
        </div>
        <div className="bottom-border w-full h-3 bg-[#c7c7c775] mt-3"></div>
      </div>
    </>
  );
}

export default CategoreyAccordian;
