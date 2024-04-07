import React, { useState } from "react";
import { faqs, partnerOnBoarding } from "../data/accordionData";
import PartnerAccordion from "./partnerAccordion";

function Help() {
  const [partnerdata, setPartnerData] = useState(partnerOnBoarding);

  return (
    <>
      <div className="help-comp w-full min-h-[120vh] bg-cyan-700 xl:px-80 xl:pt-14">
        <div className="help-comp-heading w-full h-[140px] xl:mt-[50px] flex flex-col justify-start xl:px-20">
          <h3 className="heading-text font-medium xl:text-5xl text-white xl:pt-5">
            Help & Support
          </h3>
          <p className="sub-heading-text font-thin text-white xl:text-xl xl:pt-2">
            Let's Connect Make Experience Better
          </p>
        </div>
        <div className="help-body-container  w-full min-h-[700px] bg-white rounded-sm xl:px-12 xl:py-16 flex">
          <div className="categories-section sticky bg-slate-400 xl:w-72 xl:h-[800px] rounded-sm xl:pl-6 xl:py-10 flex flex-col items-start">
            <div className="inside-div w-full xl:min-h-[65px] bg-white flex justify-center items-center">
              <h4 className="xl:text-lg font-medium">partner Onboarding</h4>
            </div>
            <div className="inside-div w-full xl:min-h-[65px] bg-gray-500 flex justify-center items-center">
              <h4 className="xl:text-lg font-medium">FAQs</h4>
            </div>
          </div>
          <div className="suggestion-helps w-full  xl:min-h-[600px] xl:px-10 xl:py-14 bg-pink-400 ">
            <h3 className="font-semibold xl:text-2xl">Partner Onboarding</h3>
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
