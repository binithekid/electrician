import React from "react";
import { FaPhoneVolume, FaStar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import imagesrow from "../../public/images/imagesrow.png";

const HeroLeft = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full md:justify-start md:items-start justify-center items-center relative flex flex-col z-10">
      <div
        onClick={handleCall}
        className="w-max cursor-pointer hidden md:flex hover:opacity-80 transition-all flex-row bg-[#3152F4] items-center justify-center gap-3 rounded-full shadow-lg md:py-3 py-2 px-3 md:px-6"
      >
        <FaPhoneAlt className="text-base md:text-xl text-white" />{" "}
        <p className="text-2xl text-white">07301 611 578</p>
      </div>
      <div className="flex-row w-max md:mt-4 flex md:hidden justify-center items-center">
        <div
          onClick={handleCall}
          className="px-4 py-3 bg-[#3152F4] flex-row gap-2 text-xl cursor-pointer flex rounded-l font-medium hover:opacity-80 transition-all"
        >
          <FaPhoneVolume className="text-white mt-1" />
          <p className="text-white">OPEN 24 HRS </p>
        </div>
        <div
          onClick={handleCall}
          className="px-4 py-3 bg-red-700 flex-row gap-2 text-xl cursor-pointer flex rounded-r font-medium hover:opacity-80 transition-all"
        >
          <p className="text-white">07301 611 578</p>
        </div>
      </div>
      <div>
        <p className="text-3xl md:text-5xl md:leading-[3.5rem] mt-5 text-center md:text-left text-white font-semibold">
          Fast and efficient emergency <br /> Electricians in London
        </p>
      </div>
      <div className="flex items-center mt-8 flex-col md:flex-row gap-1 md:gap-6">
        <div className="flex gap-1 flex-row">
          <FaStar className="text-yellow-300 text-lg md:text-2xl" />{" "}
          <FaStar className="text-yellow-300 text-lg md:text-2xl" />{" "}
          <FaStar className="text-yellow-300 text-lg md:text-2xl" />{" "}
          <FaStar className="text-yellow-300 text-lg md:text-2xl" />{" "}
          <FaStar className="text-yellow-300 text-lg md:text-2xl" />{" "}
        </div>
        <div className="flex flex-row gap-4 mt-1">
          <p className="text-white font-light text-sm md:text-lg">
            5.0 star rating
          </p>
          <p className="text-white font-light text-sm md:text-lg italic">
            351 reviews
          </p>
        </div>
      </div>
      <div className="flex-row gap-2 md:flex hidden w-1/2 mt-6 rounded items-center justify-center">
        <img src={imagesrow.src} className="rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default HeroLeft;
