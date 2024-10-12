import React from "react";

export default function EachEducation() {
  return (
    <div className="col-span-1">
      <div className="relative p-4">
        <div className="education-block mb-4">
          <h2 className="text-2xl font-normal">2008-2010</h2>
          <h3 className="text-lg font-light capitalize">
            <span>Master</span> Of Computer science
          </h3>
        </div>
        <div className="flex items-center py-6">
          <i className="fa fa-circle text-purple-600 text-xs mr-2"></i>
          <span className="bg-gray-300 h-px w-96 inline-block"></span>
        </div>
        <div className="eduDetails m-6">
          <div className="eduDetailContent">
            <h4 className="title text-lg font-normal uppercase">
              Univerity Of North Carolina
            </h4>
            <h5 className="text-gray-600 text-base font-light my-2">
              North Carolina, USA
            </h5>
            <p className="description text-gray-400 text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
