import React from "react";
import appStoreImg from "../assets/app_store.png";
import playStoreImg from "../assets/play_store.png";

function Footer() {
  return (
    <>
      <div className="footer w-full h-[30vh] xl:mt-60">
        <div className="app-links w-full xl:h-28 bg-[#e7f2f3] flex justify-between items-center xl:px-[22vw]">
          <h1 className="text-4xl font-semibold ">
            {" "}
            For better experience, download <br /> the foody app now
          </h1>
          <div className="image-section flex justify-center gap-8 ">
            <img className="w-52 cursor-pointer" src={playStoreImg} alt="" />
            <img className="w-52 cursor-pointer" src={appStoreImg} alt="" />
          </div>
        </div>
        <div className="footer-content w-full xl:h-full bg-black flex xl:px-80 xl:gap-4 xl:py-10">
          <div className=" logo-section xl:w-1/3 xl:h-3/4 flex flex-col items-center">
            <span className="logo text-white xl:text-4xl ">Foody</span>
            <span className="copyright text-white xl:text-base xl:mt-2">
              &copy; Foody Pvt. Ltd
            </span>
          </div>
          <div className="details-section xl:w-1/3 xl:h-3/4 flex flex-col text-white xl:text-lg">
            <h1 className="text-2xl font-semibold xl:mb-2">company</h1>
            <span className="text-white xl:mb-2 opacity-70">About</span>
            <span className="text-white xl:mb-2 opacity-70">Careers</span>
            <span className="text-white xl:mb-2 opacity-70">Team</span>
          </div>
          <div className="details-section xl:w-1/3 xl:h-3/4 flex flex-col text-white xl:text-lg">
            <h1 className="text-2xl font-semibold xl:mb-2">Contact Us</h1>
            <span className="text-white xl:mb-2 opacity-70">
              Help & Support
            </span>
            <span className="text-white xl:mb-2 opacity-70">
              Partner with us
            </span>
            <span className="text-white xl:mb-2 opacity-70">Support us</span>
          </div>
          <div className="details-section xl:w-1/3 xl:h-3/4 flex flex-col xl:text-lg">
            <h1 className="text-2xl font-semibold text-white xl:mb-2">
              Legal{" "}
            </h1>
            <span className="text-white xl:mb-2 opacity-70">
              Terms & Conditions
            </span>
            <span className="text-white xl:mb-2 opacity-70">cookie Policy</span>
            <span className="text-white xl:mb-2 opacity-70">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
