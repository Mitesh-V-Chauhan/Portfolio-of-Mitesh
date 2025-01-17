// import { motion } from 'framer-motion'
// import React from 'react'

// const Marquee = () => {
//   motion
//   return (
//     <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#754E1A]">
//         <div className="text border-t-2 border-b-2 hover:border-[#CBA35C] border-zinc-300 flex whitespace-nowrap">
//             <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear" ,repeat: Infinity, duration: 15 }} className= "text-[17vw] leading-none font-['Founders_Grotesk_X-Condensed'] -mb-10 pt-10 font-semibold pr-20 hover:text-[#CBA35C] ease-in-out" >LEARN·CODE·DEVELOPE</motion.h1>
//             <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear" ,repeat: Infinity, duration: 15 }} className= "text-[17vw] leading-none font-['Founders_Grotesk_X-Condensed'] -mb-10 pt-10 font-semibold pr-20 hover:text-[#CBA35C] ease-in-out">LEARN·CODE·DEVELOPE</motion.h1>
//         </div>
//     </div>
//   )
// }

// export default Marquee;

import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#754E1A]">
        <div className="text border-t-2 border-b-2 hover:border-[#CBA35C] border-zinc-300 flex whitespace-nowrap">
            <motion.h1 
              initial={{x: 0}} 
              animate={{x: "-100%"}} 
              transition={{ease: "linear", repeat: Infinity, duration: 15}} 
              className="text-[10vw] sm:text-[12vw] md:text-[17vw] leading-none font-['Founders_Grotesk_X-Condensed'] -mb-10 pt-10 font-semibold pr-20 hover:text-[#CBA35C] ease-in-out"
            >
              LEARN·CODE·DEVELOPE
            </motion.h1>
            <motion.h1 
              initial={{x: 0}} 
              animate={{x: "-100%"}} 
              transition={{ease: "linear", repeat: Infinity, duration: 15}} 
              className="text-[10vw] sm:text-[12vw] md:text-[17vw] leading-none font-['Founders_Grotesk_X-Condensed'] -mb-10 pt-10 font-semibold pr-20 hover:text-[#CBA35C] ease-in-out"
            >
              LEARN·CODE·DEVELOPE
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee;