import React from "react";

export default function ButtonOrLink({ link, width, text, download }) {
  return (
    <>
      {link && (
        <a href={download} style={{ width: width }} 
        className="h-[60px] leading-[3px] px-7 py-5 capitalize text-white bg-brand border border-brand
        shadow-lg text-lg">
          {text}
        </a>
      )}
    </>
  );
}
