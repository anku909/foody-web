import React, { useState } from "react";
import { faqs, partnerOnBoarding } from "../data/accordionData";
import PartnerAccordion from "./partnerAccordion";

function Help() {
  const [partnerdata, setPartnerData] = useState(partnerOnBoarding);

  return (
    <>
      <div className="help-comp w-full min-h-[200vh] bg-cyan-700 px-80 pt-14">
        <div className="help-comp-heading w-full min-h-[140px]  mt-[50px] flex flex-col justify-start px-20">
          <h3 className="heading-text font-medium text-5xl text-white pt-5">
            Help & Support
          </h3>
          <p className="sub-heading-text font-thin text-white text-xl pt-2">
            Let's Connect Make Experience Better
          </p>
        </div>
        <div className="help-body-container cart-container w-full h-screen bg-white rounded-sm px-12 py-16 flex">
          <div className="categories-section bg-slate-400 w-72 min-h-[600px] rounded-sm pl-6 py-10 flex flex-col items-start">
            <div className="div w-full h-[65px] bg-white flex justify-center items-center">
              <h4 className="text-lg font-medium">partner Onboarding</h4>
            </div>
          </div>
          <div className="suggestion-helps w-full min-h-[600px] px-10 py-14 ">
            <h3 className="font-semibold text-2xl">Partner Onboarding</h3>
            {partnerdata.map((elem) => (
              <PartnerAccordion key={elem.id} {...elem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
