import React, { useState } from "react";

function PartnerAccordion({ title }) {
  console.log(console.log(title));
  return (
    <div>
      <div className="accordion-div w-full bg-red-100">
        <div className="query-1 w-full h-8 mt-3 flex items-center justify-between mb-4 bg-white">
          <div className="text text-md">{title}</div>
          <div className="button">^</div>
        </div>
        <div className="more-text-on-click-section w-full h-32 mb-2 ">
          <h5 className="">Partner with us</h5>
          <button className="px-4 py-[6px] border-2 border-orange-500 mt-3 rounded-sm ">
            Send An Mail
          </button>
          <p className="text-[10px] pt-1 opacity-70">
            We will revert within 24-48 hrs
          </p>
        </div>
      </div>
      <div className="help-comp-line w-full h-[1px] bg-slate-300"></div>
    </div>
  );
}

export default PartnerAccordion;
