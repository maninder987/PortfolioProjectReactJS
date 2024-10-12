import React from "react";
import Wrapper from "../utils/Wrapper";
import { motion } from "framer-motion";
import EachEducation from "../utils/EachEducation";

export default function Education() {
  const mainVariant = {
    initialLeft: {
      x: -200,
      opacity: 0,
    },
    animateLeft: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.7,
      },
    },
    initialRight: {
      x: 200,
      opacity: 0,
    },
    animateRight: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.7,
      },
    },
    initialCenter: {
      y: 200,
      opacity: 0,
    },
    animateCenter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="education" id="education">
      <Wrapper backgroundColor={"#f9fbfd"} heading={"Education"}>
        <div className=" py-[100px] m-[50px]">
          <div className="education-horizontal-timeline">
            <div className="flex flex-col lg:flex-row">
              <motion.div
                className="w-full lg:w-1/3"
                variants={mainVariant}
                initial="initialLeft"
                whileInView="animateLeft"
              >
                <EachEducation />
              </motion.div>
              <motion.div
                className="w-full lg:w-1/3 my-[100px] lg:mt-0"
                variants={mainVariant}
                initial="initialCenter"
                whileInView="animateCenter"
              >
                <EachEducation />
              </motion.div>
              <motion.div
                className="w-full lg:w-1/3"
                variants={mainVariant}
                initial="initialRight"
                whileInView="animateRight"
              >
                <EachEducation />
              </motion.div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
