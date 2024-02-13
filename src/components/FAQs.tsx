import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQs = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: "What do you do in an electrical emergency?",
      answer:
        "It is important to remain calm in the event of an emergency and check trip switches and report any damaged power lines or equipment. Reach out to a 24 hour emergency electrician as soon as possible before the problem gets worse.",
      isAnswerVisible: false,
    },
    {
      question: "What is considered an electric emergency?",
      answer:
        "An electric emergency encompasses situations such as downed power lines, electrical fires, electrical shocks, power outages during extreme weather, burning smells from electrical appliances or wiring, electrical hazards in water, and electrical equipment malfunctions in healthcare facilities. In each case, immediate action is necessary to mitigate risks to safety, property, or infrastructure. This includes contacting emergency services, turning off power sources if safe to do so, and evacuating affected areas. Prioritizing safety and following appropriate protocols is crucial when encountering any electric emergency.",
      isAnswerVisible: false,
    },
  ]);

  const toggleAnswer = (index: any) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isAnswerVisible: !item.isAnswerVisible } : item
      )
    );
  };

  return (
    <div className="flex w-full mb-20 md:mt-20 flex-row flex-wrap items-center justify-center">
      <div className="w-full px-8 flex gap-2 flex-col">
        <h1 className="text-2xl font-bold md:text-4xl pb-1 text-center  text-gray-800">
          Emergency electrical FAQ’s
        </h1>
        <p className="text-gray-800 font-uncut tracking-tight text-center">
          Some frequently asked questions
        </p>
        <div className="flex items-center justify-center flex-col mt-4 px-0 w-full flex-wrap">
          <div className="w-1/2">
            {faqItems.map((item, index) => (
              <div key={index}>
                <p
                  onClick={() => toggleAnswer(index)}
                  className="flex m-4 flex-row gap-2 text-lg sm:text-xl items-center cursor-pointer text-gray-800"
                >
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: item.isAnswerVisible ? 90 : 0,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {" "}
                    <AiOutlinePlus className="text-blue-600 text-[13px] sm:text-lg" />{" "}
                  </motion.span>
                  {item.question}
                </p>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: item.isAnswerVisible ? "auto" : 0,
                    opacity: item.isAnswerVisible ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="flex text-gray-700 text-sm sm:text-md flex-wrap mt-1 mb-3 mx-10">
                    {/* Replace with your answer content */}
                    {item.answer}
                  </p>
                </motion.div>
                <hr className="my-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
