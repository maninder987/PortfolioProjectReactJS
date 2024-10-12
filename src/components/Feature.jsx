import React from 'react'
import { motion } from "framer-motion";

export default function Feature() {

  const sliderVariant = {
    initial: {
        x: 0
    },
    animate: {
        x: "-70%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30
        }
    }
  }

  return (
    <div className='relative h-[calc(10vh-10px)] overflow-hidden text-white
    top-[180px] md:top-[200px]'>
      <motion.div className="absolute text-[10vh] top-[-35px] whitespace-nowrap
      text-white/40 w-full font-bold"
      
      variants={sliderVariant}
      initial="initial"
      animate="animate"
      >
        Some About You, That you want to share, Should be long string
      </motion.div>
    </div>
  )
}
