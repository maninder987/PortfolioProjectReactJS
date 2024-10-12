import React from "react";
import Wrapper from "../utils/Wrapper";
import ButtonOrLink from "../utils/ButtonOrLink";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Wrapper backgroundColor={"#fff"} heading={"Contact"}>
        <div className="container mx-auto py-[100px]">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-5/12 sm:w-6/12 px-4">
              <div className="single-contact-box">
                <div className="contact-form mb-[100px] lg:mb-0">
                  <form>
                    <div className="flex flex-wrap mb-4">
                      <div className="w-1/2 px-2">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full p-6 text-sm border border-white rounded-none shadow-none bg-white text-gray-600"
                            id="name"
                            placeholder="Name*"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="w-1/2 px-2">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control w-full p-6 text-sm border border-white rounded-none shadow-none bg-white text-gray-600"
                            id="email"
                            placeholder="Email*"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control w-full p-6 text-sm border border-white rounded-none shadow-none bg-white text-gray-600"
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="form-group">
                        <textarea
                          className="form-control w-full p-6 text-sm border border-white rounded-none shadow-none bg-white text-gray-600"
                          rows="8"
                          id="comment"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center">
                        <ButtonOrLink
                          link={"/"}
                          width={"200px"}
                          text="Submit"
                          download={false}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 sm:w-6/12 px-4">
              <div className="single-contact-box">
                <div className="contact-address">
                  <div className="contact-add-head">
                    <h3 className="text-xl text-gray-800">Browny Star</h3>
                    <p className="text-gray-600 text-base capitalize font-light mt-1">
                      UI/UX Designer
                    </p>
                  </div>
                  <div className="contact-add-info mt-10 mb-12">
                    <div className="single-contact-add-info mb-4">
                      <h3 className="text-gray-600 font-medium">Phone</h3>
                      <p className="text-gray-500">987-123-6547</p>
                    </div>
                    <div className="single-contact-add-info mb-4">
                      <h3 className="text-gray-600 font-medium">Email</h3>
                      <p className="text-gray-500">browny@info.com</p>
                    </div>
                    <div className="single-contact-add-info mb-4">
                      <h3 className="text-gray-600 font-medium">Website</h3>
                      <p className="text-gray-500">www.brownsine.com</p>
                    </div>
                  </div>
                </div>
                <div className="hm-foot-icon mt-6">
                  <ul className="flex space-x-4">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition duration-300"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition duration-300"
                      >
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition duration-300"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition duration-300"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition duration-300"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
