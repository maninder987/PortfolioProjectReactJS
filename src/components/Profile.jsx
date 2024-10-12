import React from "react";
import Wrapper from "../utils/Wrapper";
import EachProfile from "../utils/EachProfile";

export default function Profile() {
  return (
    <section className="profile" id="profile">
      <Wrapper backgroundColor={"#fff"} heading={"Profile"}>
        <div className="container mx-auto py-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <EachProfile
              title={"ThemeForest"}
              icon={"fa flaticon-themeforest"}
            />
            <EachProfile title={"Dribbble"} icon={"fa flaticon-dribbble"} />
            <EachProfile title={"Behance"} icon={"fa flaticon-behance-logo"} />

            <EachProfile title={"GitHub"} icon={"fa flaticon-github-logo"} />
          </div>

          <div className="my-4 border-t border-gray-300"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <EachProfile
              title={"Flickr"}
              icon={"flaticon-flickr-website-logo-silhouette"}
            />

            <EachProfile title={"SmugMug"} icon={"flaticon-smug"} />

            <EachProfile
              title={"SquareSpace"}
              icon={"flaticon-squarespace-logo"}
            />

            <EachProfile
              title={"Bitbucket"}
              icon={"flaticon-bitbucket-logotype-camera-lens-in-perspective"}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
