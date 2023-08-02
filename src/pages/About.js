import React, { useState } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import resume from "../img/about/resume.png";
import VU from "../img/about/VU.png";

import "./Home.css";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <motion.section
        // initial={{ opacity: 0, y: "100%" }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: "100%" }}
        className="section flex flex-row  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      >
        {show ? (
          <motion.div
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
            // exit={{ scale: 0 }}
            // transition={transition1}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="flex flex-col gap-2 pt-20"
          >
            <div className="flex justify-end w-full ">
              <button
                onClick={() => setShow(!show)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col lg:h-[480px] shadow-2xl">
              <div className="object-contain overflow-scroll ">
                <img className="object-contain " src={resume} alt="" />
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="container mx-auto h-full relative">
            <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
              <motion.div
                // initial={{ scale: 0 }}
                // animate={{ scale: 1 }}
                // exit={{ scale: 0 }}
                // transition={transition1}
                initial={{ opacity: 0, x: "-80%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-90%" }}
                transition={transition1}
                className="flex flex-col  lg:items-start"
              >
                <div className="flex lg:items-start">
                  <div className="scale-50 h-max">
                    <img src={VU} alt="" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1}
          className="container mx-auto h-full relative"
        >
          <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
            <div className="flex w-full h-full justify-center flex-col">
              <div className=" flex flex-col w-full justify-center items-center gap-2">
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="btn w-[220px] justify-center hover:scale-110 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  {show ? <text>Close Resume</text> : <text>View Resume</text>}
                </button>

                <a
                  href={resume}
                  download="Dagmawe_Legesse_Resume"
                  className="btn hover:scale-110 w-[220px] justify-center hover:scale-110 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;
