import React from "react";
import Wrapper from "../utils/Wrapper";
import EachPortfolio from "../utils/EachPortfolio";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <Wrapper backgroundColor={"#fff"} heading={"Portfolio"}>
        <div className="container mx-auto py-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <EachPortfolio
              url={"/assets/img/portfolio/p1.jpg"}
              title={"UI/UX Design"}
            />

            <EachPortfolio
              url={"/assets/img/portfolio/p2.jpg"}
              title={"UI/UX Design"}
            />

            <EachPortfolio
              url={"/assets/img/portfolio/p3.jpg"}
              title={"Web Design"}
            />

            <EachPortfolio
              url={"/assets/img/portfolio/p4.jpg"}
              title={"Web Development"}
            />

            <EachPortfolio
              url={"/assets/img/portfolio/p5.jpg"}
              title={"Web Development"}
            />

            <EachPortfolio
              url={"/assets/img/portfolio/p4.jpg"}
              title={"Testing"}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
