import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const HeroForm = () => {
  const [state, handleSubmit] = useForm("xzblnglk");

  return (
    <div className="relative z-10 flex mt-10 md:mt-0 items-center justify-center">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="relative bg-gray-100 bg-opacity-[85%] w-full py-7 px-4 md:px-6 rounded boxShadow"
      >
        <div className="flex flex-col">
          <p className="text-gray-900 text-[13px] md:text-sm">
            What type of Electrical assistance do you need?
          </p>
          <select
            id="worktype"
            name="worktype"
            required
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          >
            <option value="">Choose an option</option>
            <option value="electrical wiring">
              Electrical wiring installation or repair{" "}
            </option>
            <option value="Outlet or switch replacement">
              Outlet or switch replacement
            </option>
            <option value="Circuit breaker troubleshooting">
              Circuit breaker troubleshooting
            </option>
            <option value="Lighting fixture installation or repair">
              Lighting fixture installation or repair
            </option>
            <option value="Appliance installation or repair">
              Appliance installation or repair
            </option>
            <option value="Electrical panel upgrade">
              Electrical panel upgrade
            </option>
            <option value="Surge protection installation">
              Surge protection installation
            </option>
            <option value=" Home rewiring"> Home rewiring</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            When would you like the electrician to attend?
          </p>
          <select
            id="assistance"
            name="assistance"
            required
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          >
            <option value="">Choose an option</option>
            <option value="urgently">Urgently</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this week">This Week</option>
            <option value="next week">Next Week</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Name</p>
          <input
            id="name"
            type="name"
            name="name"
            // value={name}
            required
            // onChange={(event) => setName(event.target.value)}
            placeholder="John Smith"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Email</p>
          <input
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
            id="email"
            type="email"
            name="email"
            required
            placeholder="Johnsmith@email.com"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Phone Number</p>
          <input
            id="tel"
            name="phone number"
            type="tel"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="07595 123 3456"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Address</p>
          <input
            id="address"
            name="address"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="1 Buckingham Palace Road"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Postcode</p>
          <input
            id="postcode"
            name="postcode"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="W11 7HA"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>

        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Your message here
          </p>
          <textarea
            required
            // value={message}
            // onChange={(event) => setMessage(event.target.value)}
            id="message"
            name="message"
            // name="email"
            rows={5}
            placeholder="Tell us about your electrical issue in as much detail as possible"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <button className="mt-6 w-full bg-[#3152F4] py-3 text-white font-semibold rounded text-sm md:text-base hover:opacity-80 transition-all">
          BOOK AN ELECTRICIAN
        </button>
        {state.succeeded ? (
          <p className="mt-4 text-sm text-gray-700 font-light w-full text-center">
            ✅ Form submitted succesfully!
          </p>
        ) : (
          <p className="mt-4 text-sm text-gray-700 font-light w-full text-center">
            🔒 Your information is 100% secure
          </p>
        )}
      </form>
    </div>
  );
};

export default HeroForm;
