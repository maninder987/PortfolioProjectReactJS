import React from "react";

export default function EachSkill({ skillName, color, percentage }) {
  return (
    <div className="single-skill-content py-[50px]">
      <span className="progressText">{skillName}</span>
      <div className="bg-white rouded-xl shadow-sm overflow-hidden p-1">
        <div className="relative h-6 flex items-center justify-center">
          <div
            className="absolute top-0 bottom-0 left-0 rounded-lg"
            style={{ backgroundColor: color, width: percentage + "%" }}
          ></div>
          <div className="relative text-center font-medium text-sm">
            {percentage}%
          </div>
        </div>
      </div>
    </div>
  );
}
