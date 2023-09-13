import React from "react";
import Image1 from "../img/portfolio/javascript.png";
import Image2 from "../img/portfolio/css3.png";
import Image3 from "../img/portfolio/html.png";
import Image4 from "../img/portfolio/python.png";
import Image5 from "../img/portfolio/react.png";
import Image6 from "../img/portfolio/django.png";
import Image7 from "../img/portfolio/kali.png";
import Image8 from "../img/portfolio/spring.png";
import Image9 from "../img/portfolio/java.png";
import Image10 from "../img/portfolio/git.png";
import Image11 from "../img/portfolio/node.png";
import Image12 from "../img/portfolio/postman.png";
import kali from "../img/portfolio/cloud_img.jpg";
import ML from "../img/portfolio/ML_img.jpg";
import p1 from "../img/portfolio/web_img_1.jpg";
import netflix from "../img/portfolio/netflix.png";

import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Portfolio = () => {
  return (
    <>
      <motion.section
        // initial={{ opacity: 0, y: "100%" }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: "100%" }}
        // exit={{ opacity: 0, x: "-90%" }}
        className="section bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      >
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
            <motion.div
              initial={{ opacity: 0, x: "-80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-90%" }}
              transition={transition1}
              className="flex flex-col lg:items-start"
            >
              <div className="flex lg:items-start">
                <div className="grid grid-cols-4 gap-2 ">
                  <div class="overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a
                      href="https://github.com/Dagmawe/Netflix"
                      target="_blank"
                    >
                      <img
                        class="rounded-t-lg object-contain hover:scale-110 "
                        src={netflix}
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Project 1: Built a Netflix Clone application where users
                        are able to view different movies and shows along with
                        the youtube trailer
                      </p>
                      <a
                        href="https://github.com/Dagmawe/Senior_Project_CRS_App"
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Check it out
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a
                      href="https://github.com/Dagmawe/Senior_Project_CRS_App"
                      target="_blank"
                    >
                      <img
                        class="rounded-t-lg object-contain hover:scale-110"
                        src={p1}
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Project 2: Built an application to aid and educate
                        farmers in Guatemala to utilize their farmland to
                        optimize crop growth.
                      </p>
                      <a
                        href="https://github.com/Dagmawe/Senior_Project_CRS_App"
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Check it out
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a
                      href="https://github.com/Dagmawe/Cloud_Security_Project"
                      target="_blank"
                    >
                      <img
                        class="rounded-t-lg justify-center object-contain hover:scale-110"
                        src={kali}
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Project 3: Exploited many different services and
                        manually exploited Tomcat by injected a war file
                        containing payloads remote tcp shells using Kali Linux
                      </p>
                      <a
                        href="https://github.com/Dagmawe/Cloud_Security_Project"
                        target="_blank"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Check it out
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div class="overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a
                      href="https://github.com/Dagmawe/ML_Project_ECE5400"
                      target="_blank"
                    >
                      <img
                        class="rounded-t-lg object-contain hover:scale-110"
                        src={ML}
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Project 4: Built a Diabetes Binary Classification model
                        using Various Machine Learning Algorithms
                      </p>
                      <a
                        href="https://colab.research.google.com/drive/14d5TD-pwo3Ok429v0N2HOjahKutY_Hky"
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Check it out
                        <svg
                          class="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="grid grid-cols-4 lg:gap-2 -right-80"
            >
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image1}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image2}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image3}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image4}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image9}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image5}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image6}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image8}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image10}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image11}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image12}
                  alt=""
                />
              </div>
              <div className="max-w-[250px] lg:max-w-[150px] h-[187px] lg:h-[150px] transparent overflow-hidden">
                <img
                  className=" object-contain  relative scale-50 h-full hover:scale-75 transition-all duration-500"
                  src={Image7}
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Portfolio;
