import React from 'react'

export default function Headings({heading}) {
  return (
    <div className='text-center uppercase font-semibold p-[40px] 
    text-2xl border-b border-[#e5ebf2]'>
      <h2>{heading}</h2>
    </div>
  )
}
