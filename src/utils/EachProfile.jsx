import React from "react";

export default function EachProfile({ title, icon }) {
  return (
    <div
      className="relative h-36 flex justify-center items-center border-r border-gray-300 overflow-hidden
    transition-colors duration-500 group"
    >
      <div className="text-center profile-text p-4">
        <a href="#" className="text-xl text-gray-800 hover:text-blue-500">
          <i className={icon}></i>
        </a>
        <div className="profile-icon-name mt-2 text-lg">{title}</div>
      </div>
      <div
        className="absolute inset-0 bg-brand bg-opacity-100 flex items-center transform justify-center
      scale-0 group-hover:scale-100 transition-transform duration-500"
      >
        <div className="text-white uppercase">
          <div className="text-center profile-text p-4">
            <a href="#" className="text-xl text-white hover:text-blue-500">
              <i className={icon}></i>
            </a>
            <div className="profile-icon-name mt-2 text-lg">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
