import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import logo from "../../public/images/logo.png";

const NavBar = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+447301611578"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };
  return (
    <main className="w-full flex-col py-4 md:flex-row shadow relative px-4 sm:px-10 md:px-20 lg:px-30 bg-white flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="Spark Electrics"
          className="w-auto cursor-pointer h-[4.5rem] hover:opacity-80 transition-all"
        />
      </Link>
      <div className="flex flex-row md:mt-4  justify-center items-center">
        <div
          onClick={handleCall}
          className="px-4 py-2 bg-[#3152F4] flex-row gap-2 text-lg cursor-pointer hidden md:flex rounded-l font-medium hover:opacity-80 transition-all"
        >
          <FaPhoneVolume className="text-white mt-1" />
          <p className="text-white">24 HOURS & EMERGENCIES</p>
        </div>
        <div
          onClick={handleCall}
          className="px-4 py-2 bg-red-700 flex-row gap-2 text-lg cursor-pointer hidden md:flex rounded-r font-medium hover:opacity-80 transition-all"
        >
          <p className="text-white">07301 611 578</p>
        </div>
      </div>
    </main>
  );
};

export default NavBar;
