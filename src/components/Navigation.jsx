import React from "react";

export default function Navigation() {
  return (
    <div className="navigation fixed z-10 flex  pl-[50px] lg:pl-[0px] lg:justify-evenly w-full bg-white h-[100px] items-center shadow-xl ">
      <a href="" className="text-brand uppercase font-extrabold text-md">
        Dark Night
      </a>
      <ul className="justify-center hidden lg:flex">
        <li className="mx-5 uppercase text-navlink font-sm ">Education</li>
        <li className="mx-5 uppercase text-navlink font-sm">Skills</li>
        <li className="mx-5 uppercase text-navlink font-sm">Experience</li>
        <li className="mx-5 uppercase text-navlink font-sm">Profile</li>
        <li className="mx-5 uppercase text-navlink font-sm">Portfolio</li>
        <li className="mx-5 uppercase text-navlink font-sm">Clients</li>
        <li className="mx-5 uppercase text-navlink font-sm">Contact</li>
      </ul>
    </div>
  );
}
