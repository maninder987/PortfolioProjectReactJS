import React from "react";
import Wrapper from "../utils/Wrapper";
import EachEperience from "../utils/EachEperience";

export default function Experience() {
  return (
    <section id="experience" className="experiencelg:m-0">
      <Wrapper backgroundColor={"#f9fbfd"} heading={"Education"}>
        <div className="experience-content  py-[100px] m-[50px] ">
          <div className="main-timeline">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <EachEperience />
              <EachEperience />
              <EachEperience />
            </ol>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
