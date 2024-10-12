import React from "react";
import Wrapper from "../utils/Wrapper";
import { motion } from "framer-motion";

export default function About() {
  const textVariantLeft = {
    initial: {
      opacity: 0,
      x: -200,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const imageRight = {
    initial: {
      opacity: 0,
      x: 200,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <section className="about w-full" id="about">
      <Wrapper backgroundColor={"#fff"} heading="About Us">
        <motion.div className="container mx-auto py-[100px] px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 m-0 lg:m-10 pr-0 lg:pr-[50px]">
              <motion.div
                className="single-about-text"
                variants={textVariantLeft}
                initial="initial"
                whileInView="whileInView"
              >
                <h3
                  className="font-poppins text-xl font-semibold leading-relaxed pb-12 border-b
                            border-[#3c4258]"
                >
                  I am a Professional UI/UX Designer and Web developer.
                  Consectetur an adipisi elita, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam quis
                  nostrud.
                </h3>
                <p className="text-base text-[#999fb3] py-[35px] pb-[43px] border-b border-[#999fb3]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Sed ut perspi unde omnis
                  iste natus error sit voluptatem accusantium doloremque lauda
                  ntium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam vo luptatem quia voluptas sit
                  aspernatur aut odit aut fugit,
                </p>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 pt-7">
                    <div className="single-about-add-info">
                      <h3 className="text-base capitalize text-[#636a82]">
                        phone
                      </h3>
                      <p className="font-light border-0 p-0 mt-3">
                        987-123-6547
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 pt-7">
                    <div className="single-about-add-info">
                      <h3 className="text-base capitalize text-[#636a82]">
                        email
                      </h3>
                      <p className="font-light border-0 p-0 mt-3">
                        test@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 pt-7">
                    <div className="single-about-add-info">
                      <h3 className="text-base capitalize text-[#636a82]">
                        Website
                      </h3>
                      <p className="font-light border-0 p-0 mt-3">test.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 m-0 lg:m-10 pr-0 lg:pr-[50px]">
              <motion.div
                className="single-about-img"
                variants={imageRight}
                initial="initial"
                whileInView="whileInView"
              >
                <img
                  src="/assets/img/about/profile_image.jpg"
                  alt="profile_image"
                  className="w-full h-auto"
                />
                <div className="about-list-icon">
                  <ul className="flex justify-evenly relative right-5 top-5">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Wrapper>
    </section>
  );
}
