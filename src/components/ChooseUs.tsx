import React from "react";
import image from "../../public/images/choose.webp";

const ChooseUs = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="px-6 md:px-20 w-full gap-10 bg-white items-center flex flex-col md:flex-row py-20">
      <div className="md:w-1/2 flex flex-col gap-4 md:gap-8 h-max">
        <h1 className="text-2xl md:text-4xl font-light text-gray-800">
          Why choose our <span className="font-bold">Electricians</span>
        </h1>
        <hr className="w-1/5 border-t-4 border-[#3152F4]" />
        <p className="text-gray-700">
          {" "}
          Any work on your electrical system must be undertaken by a qualified
          electrician. All our electricians are NICEIC Approved and work to
          British Standard BS 7671 to meet installation and safety regulations.
          <br /> <br />
          Our 24/7 electricians are skilled with installations, fault finding
          and can provide Fusebox MOT’s to ensure old boxes are safe and
          maintenance is carried out. Our electrical engineers always ensure
          minimum disruption and that they leave your premises clean and tidy
          following their visit.
        </p>
        <button
          onClick={handleCall}
          className="mt-6 w-full bg-[#3152F4] py-3 text-white font-semibold rounded text-sm md:text-base hover:opacity-80 transition-all"
        >
          BOOK A SAME DAY ELECTRICAL SERVICE
        </button>
      </div>
      <div className="w-1/2 hidden md:flex">
        <img src={image.src} />
      </div>
    </div>
  );
};

export default ChooseUs;
