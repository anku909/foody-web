import React, { useState } from "react";
import { faqs, partnerOnBoarding } from "../data/accordionData";
import AccordianHelp from "./AccordionHelp";

function Help() {
  const [partnerToggle, setPartnerToggle] = useState(true);
  const [faqsToggle, setFaqsToggle] = useState(false);

  function handleTogglePartner() {
    setPartnerToggle(true);
    setFaqsToggle(false);
  }
  function handleToggleFaqs() {
    setPartnerToggle(false);
    setFaqsToggle(true);
  }

  return (
    <>
      <div className="help-comp w-full lg:min-h-[114vh] bg-[#0a5d31c1] xl:px-80 py-24 xl:pt-14">
        <div className="help-comp-heading w-full h-[140px] xl:mt-[50px] flex flex-col justify-start xl:px-20">
          <h3 className="heading-text font-medium xl:text-5xl text-white xl:pt-5">
            Help & Support
          </h3>
          <p className="sub-heading-text font-thin text-white xl:text-xl xl:pt-2">
            Let's Connect Make Experience Better
          </p>
        </div>
        <div className="help-body-container w-full xl:min-h-[550px] bg-white rounded-lg xl:px-12 xl:py-16 flex">
          <div
            className={`categories-section sticky bg-slate-400 xl:w-72 xl:min-h-[400px] rounded-sm xl:pl-6 xl:py-10 flex flex-col items-start`}
          >
            <div
              onClick={handleTogglePartner}
              className={`inside-div w-full xl:min-h-[65px] flex justify-center items-center ${
                partnerToggle ? "bg-white" : ""
              }`}
            >
              <h4 className="xl:text-lg font-medium cursor-pointer">
                partner Onboarding
              </h4>
            </div>
            <div
              onClick={handleToggleFaqs}
              className={`inside-div xl:w-full xl:min-h-[65px]  flex justify-center items-center ${
                faqsToggle ? "bg-white" : ""
              }`}
            >
              <h4 className="xl:text-lg font-medium cursor-pointer">FAQs</h4>
            </div>
          </div>
          <div className="suggestion-helps xl:w-full xl:min-h-[300px] xl:px-10 xl:py-14 ">
            {partnerToggle ? (
              <h3 className="font-semibold xl:text-2xl">Partner Onboarding</h3>
            ) : (
              <h3 className="font-semibold xl:text-2xl">FAQs</h3>
            )}
            {partnerToggle
              ? partnerOnBoarding.map((elem) => (
                  <AccordianHelp key={elem.id} {...elem} />
                ))
              : faqs.map((elem) => <AccordianHelp key={elem.id} {...elem} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
