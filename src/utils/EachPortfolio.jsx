import React from "react";

export default function EachPortfolio({ title, url }) {
  return (
    <div className="item relative overflow-hidden mb-6 group">
      <img
        src={url}
        alt={title}
        className="w-full h-full transition-transform duration-500 
        group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center transform
      scale-0 group-hover:scale-100 transition-transform duration-500">
        <a href="" className="text-white text-lg">
          {title}
        </a>
      </div>
    </div>
  );
}
