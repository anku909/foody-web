import React, { useState } from "react";

function PartnerAccordion({ title, description, hyperLinkText, options }) {
  const [toggle, setToggle] = useState(false);
  const documentLines = description?.split("\n");
  console.log(description);
  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div>
      <div className="accordion-div w-full ">
        <div
          onClick={handleToggle}
          className="query-1 w-full h-8 mt-3 flex items-center justify-between mb-4 bg-white"
        >
          <div className=" text-base font-medium ">{title}</div>
          <div
            onClick={handleToggle}
            className="button cursor-pointer text-2xl"
          >
            {toggle ? (
              <i class="ri-arrow-down-s-line"></i>
            ) : (
              <i class="ri-arrow-up-s-line"></i>
            )}
          </div>
        </div>
        {toggle && (
          <div className="more-text-on-click-section w-full mb-2 ">
            <h5 className="text-green-800 font-semibold cursor-pointer">
              {hyperLinkText}
            </h5>
            {documentLines?.map((line, index) => (
              <p className="text-xs" key={index}>
                {line}
              </p>
            ))}
            {options ? (
              <div className="mt-2">
                <button className="px-3 py-[4px] border-2 border-orange-500 mt-3 rounded-sm ">
                  Send An Mail
                </button>
                <p className="text-[10px] pt-1 opacity-70 ">
                  We will revert within 24-48 hrs
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      <div className="help-comp-line w-full h-[1px] bg-slate-300 mt-4"></div>
    </div>
  );
}

export default PartnerAccordion;
