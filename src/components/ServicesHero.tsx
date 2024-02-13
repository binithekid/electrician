import React from "react";
import { FaHouseDamage, FaFire } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { MdElectricalServices } from "react-icons/md";
import { MdWaterDamage } from "react-icons/md";
import { PiThermometerHotFill } from "react-icons/pi";
import { TiSpanner } from "react-icons/ti";
import { MdOutlineHomeRepairService } from "react-icons/md";

const ServicesHero = () => {
  return (
    <div className="px-6 md:px-20 w-full bg-gray-200 flex flex-col py-20">
      <div className="flex w-full items-center justify-center">
        <h1 className="text-2xl md:text-4xl md:pb-4 text-center font-light text-gray-800">
          Our <span className="font-bold">Electrician</span> services
        </h1>
      </div>
      <p className="text-gray-800 font-light pt-6 text-sm md:py-1 text-center">
        Our Electrician services are designed to cater to all your needs.
        Whether you’re looking for regular electricial maintenance or find
        yourself in a crisis, our skilled technicians have you covered. When you
        require an Electrician in London, you can count on us, with our 24/7
        availability we’re here to provide swift and reliable assistance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-6 justify-center">
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <FaHouseDamage className="text-4xl" />
          <p className="text-gray-800 text-center font-light">
            Domestic Emergencies
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <AiFillShop className="text-4xl" />
          <p className="text-gray-800 text-center font-light">
            Commercial Emergencies{" "}
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <MdElectricalServices className="text-4xl" />
          <p className="text-gray-800 text-center font-light">
            Electrical Services{" "}
          </p>
        </div>
        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <MdWaterDamage className="text-4xl" />
          <p className="text-gray-800 text-center font-light">
            Water Heater Repair & Replacement
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <PiThermometerHotFill className="text-4xl" />
          <p className="text-gray-800 font-light text-center">
            Storage Heaters Repair & Replacement
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <FaFire className="text-4xl" />
          <p className="text-gray-800 font-light text-center">
            Fire Alarm & Emergency Lighting{" "}
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <TiSpanner className="text-4xl" />
          <p className="text-gray-800 font-light text-center">
            Testing & Inspection{" "}
          </p>
        </div>

        <div className="flex flex-col bg-white border-2 shadow-sm rounded-lg border-b-blue-900 py-8 px-3 gap-2 items-center justify-center">
          <MdOutlineHomeRepairService className="text-4xl" />
          <p className="text-gray-800 font-light text-center">
            Gledhill Pulsacoil Repair
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
