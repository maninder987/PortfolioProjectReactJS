import React from 'react'
import Headings from './Headings'

export default function Wrapper({backgroundColor, heading, children}) {
  return (
    <div style={{background: backgroundColor}}>
      <Headings heading={heading}/>
      <div className="w-full lg:w-[1170px] m-auto">
        {children}
      </div>
    </div>
  )
}
