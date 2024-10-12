import React from "react";
import ButtonOrLink from "../utils/ButtonOrLink";
import { motion } from "framer-motion";
import Feature from "./Feature";

export default function Hero() {
  const textVariant = {
    initial: {
      opacity: 0,
      y: -200,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delay: 1,
      },
    },
  };

  return (
    <section
      id="welcome-hero"
      className="welcome-hero flex bg-center justify-center items-center text-center leading-normal bg-no-repeat mt-0 pt-0 h-[950px]"
      style={{ backgroundImage: `url("/assets/img/welcome-banner.jpg")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 h-[875px]"></div>

      <div className="w-full">
        <motion.div
          className="row w-full relative z-10 top-20"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          <div className="header-text font-bold uppercase">
            <h2 className="font-bold text-6xl text-white uppercase">
              hi <span className="text-brand">,</span> i am browny <br /> star{" "}
              <span className="text-brand">.</span>{" "}
            </h2>
          </div>
          <p className="text-white text-[20px] font-medium uppercase mt-[30px] mb-[60px] leading-snug">
            ui/ux designer and web developer
          </p>
          <ButtonOrLink
            link={true}
            width={"200px"}
            text={"Download Resume"}
            download="assets/download/file.pdf"
          />
        </motion.div>
        <Feature />
      </div>
    </section>
  );
}
