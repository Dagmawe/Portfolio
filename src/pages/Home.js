import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import vid2 from "../img/header/video-2.mp4";

const Home = () => {
  return (
    <>
      <video src={vid2} loop autoPlay muted id="bg_vid" />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="section"
      >
        <div className="container flex-col mx-auto h-max relative">
          <div className="h-screen">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="w-full pt-36 lg:pt-50 pb-5 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start "
            >
              <h1 className="h1 mb-40 mt-5 font-extrabold shadow-md text-white">
                Dagmawe Legesse
              </h1>
              <p className="text-[26px] lg:text-[36px] font-primary mb-5 shadow-md text-white">
                Software Engineer
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
