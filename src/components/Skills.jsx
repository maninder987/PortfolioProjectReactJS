import React from "react";
import Wrapper from "../utils/Wrapper";
import EachSkill from "../utils/EachSkill";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <Wrapper backgroundColor={"#fff"} heading={"Skills"}>
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 lg:my-[100px]">
              <EachSkill
                skillName={"Web Development"}
                color={"blue"}
                percentage={75}
              />
              <EachSkill
                skillName={"Adobe Photoshop"}
                color={"orange"}
                percentage={95}
              />
              <EachSkill
                skillName={"Adobe Illustrator"}
                color={"green"}
                percentage={95}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 lg:my-[100px]">
              {" "}
              <EachSkill
                skillName={"Api Development"}
                color={"pink"}
                percentage={75}
              />
              <EachSkill
                skillName={"Cloud Computing"}
                color={"red"}
                percentage={80}
              />
              <EachSkill
                skillName={"Coding"}
                color={"magenta"}
                percentage={98}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
