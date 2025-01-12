import { motion, useAnimation } from 'framer-motion'
import { span } from 'framer-motion/client'
import { useState } from 'react';
import React from 'react'

const skills = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()]

  const handleHover= (index)=>{
    cards[index].start({y: '0'})
  }

  const handleHoverEnd= (index)=>{
    cards[index].start({y: '100%'})
  }

  return (
    <div className="w-full py-20 rounded-bl-3xl rounded-br-3xl bg-black">
        <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-10">
            <h1 className="text-7xl font-['Neue_Montreal' tracking-tight ]">Skills</h1>
        </div>
        <div className="px-20 py-10">
          <div className="cards w-full flex gap-10 mt-10">

          <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cursor-pointer cardcontainer rounded-xl relative w-[25vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 ">
              <h1 className="absolute -translate-x-1 -translate-y-12 z-[9] text-[#FF8] font-['Neue_Montreal] text-4xl tracking-tight font-semibold leading-none overflow-hidden">
              {"C".split('').map((item, index) => (
                    <motion.span initial={{y: '100%'}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}
              </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../c.svg" alt="" />
                </div>
              </motion.div>

              <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cursor-pointer cardcontainer rounded-xl relative w-[25vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 ">
              <h1 className="absolute -translate-x-1 -translate-y-12 z-[9] text-[#FF8] font-['Neue_Montreal] text-4xl tracking-tight font-semibold leading-none overflow-hidden">
              {"Python".split('').map((item, index) => (
                    <motion.span initial={{y: '100%'}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}
              </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../python.svg" alt="" />
                </div>
              </motion.div>

              <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className="cursor-pointer cardcontainer rounded-xl relative w-[25vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 ">
              <h1 className="absolute -translate-x-1 -translate-y-12 z-[9] text-[#FF8] font-['Neue_Montreal] text-4xl tracking-tight font-semibold leading-none overflow-hidden">
              {"HTML".split('').map((item, index) => (
                    <motion.span initial={{y: '100%'}} animate={cards[2]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}
              </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../html.svg" alt="" />
                </div>
              </motion.div>

              <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className="cursor-pointer cardcontainer rounded-xl relative w-[25vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 ">
              <h1 className="absolute -translate-x-1 -translate-y-12 z-[9] text-[#FF8] font-['Neue_Montreal] text-4xl tracking-tight font-semibold leading-none overflow-hidden">
              {"CSS".split('').map((item, index) => (
                    <motion.span initial={{y: '100%'}} animate={cards[3]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}
              </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../css.svg" alt="" />
                </div>
              </motion.div>

              <motion.div onHoverStart={()=>handleHover(4)} onHoverEnd={()=>handleHoverEnd(4)} className="cursor-pointer cardcontainer rounded-xl relative w-[25vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 ">
              <h1 className="absolute -translate-x-1 -translate-y-12 z-[9] text-[#FF8] font-['Neue_Montreal] text-4xl tracking-tight font-semibold leading-none overflow-hidden">
              {"JavaScript".split('').map((item, index) => (
                    <motion.span initial={{y: '100%'}} animate={cards[4]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}
              </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../javascript.svg" alt="" />
                </div>
              </motion.div>

              <motion.div onHoverStart={()=>handleHover(5)} onHoverEnd={()=>handleHoverEnd(5)} className="cursor-pointer cardcontainer rounded-xl relative w-[25vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110 ">
              <h1 className="absolute -translate-x-1 -translate-y-12 z-[9] text-[#FF8] font-['Neue_Montreal] text-4xl tracking-tight font-semibold leading-none overflow-hidden">
              {"Bootstrap".split('').map((item, index) => (
                    <motion.span initial={{y: '100%'}} animate={cards[5]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}
              </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../boostrap.svg" alt="" />
                </div>
              </motion.div>

              {/* tailwind react node npm */}
         </div>
         <br></br>
         <div className="cards w-full flex gap-10 mt-10 justify-center">
               <motion.div onHoverStart={()=>handleHover(6)} onHoverEnd={()=>handleHoverEnd(6)} className="cardcontainer w-[23vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110">
               <h1 className="absolute -translate-x-1 -translate-y-12 z-[] text-[#FF8343] text-4xl tracking-tight font-semibold leading-none overflow-hidden">{"Git".split('').map((item,index)=>(
                    <motion.span initial={{y: '100%'}} animate={cards[6]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}</h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../git.svg" alt="" />
                </div>
              </motion.div>

               <motion.div onHoverStart={()=>handleHover(7)} onHoverEnd={()=>handleHoverEnd(7)} className="cardcontainer w-[23vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110">
               <h1 className="absolute -translate-x-1 -translate-y-12 z-[] text-[#FF8343] text-4xl tracking-tight font-semibold leading-none overflow-hidden">{"React".split('').map((item,index)=>(
                    <motion.span initial={{y: '100%'}} animate={cards[7]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}</h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../react.svg" alt="" />
                </div>
              </motion.div>

              <motion.div onHoverStart={()=>handleHover(8)} onHoverEnd={()=>handleHoverEnd(8)} className="cardcontainer w-[23vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110">
               <h1 className="absolute -translate-x-1 -translate-y-12 z-[] text-[#FF8343] text-4xl tracking-tight font-semibold leading-none overflow-hidden">{"JQuery".split('').map((item,index)=>(
                    <motion.span initial={{y: '100%'}} animate={cards[8]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}</h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../jquery.svg" alt="" />
                </div>
              </motion.div>

              <motion.div onHoverStart={()=>handleHover(9)} onHoverEnd={()=>handleHoverEnd(9)} className="cardcontainer w-[23vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110">
               <h1 className="absolute -translate-x-1 -translate-y-12 z-[] text-[#FF8343] text-4xl tracking-tight font-semibold leading-none overflow-hidden">{"Tailwind".split('').map((item,index)=>(
                    <motion.span initial={{y: '100%'}} animate={cards[9]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}</h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../tailwind-svgrepo-com.svg" alt="" />
                </div>
              </motion.div>

              <motion.div onHoverStart={()=>handleHover(10)} onHoverEnd={()=>handleHoverEnd(10)} className="cardcontainer w-[23vh] h-[23vh] flex justify-center transform transition-all duration-500 ease-in-out hover:scale-110">
               <h1 className="absolute -translate-x-1 -translate-y-12 z-[] text-[#FF8343] text-4xl tracking-tight font-semibold leading-none overflow-hidden">{"GitHub".split('').map((item,index)=>(
                    <motion.span initial={{y: '100%'}} animate={cards[10]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}} className="inline-block">
                       {item}
                    </motion.span>
              ))}</h1>
                <div className="card w-full h-full rounded-xl overflow-hidden ">
                  <img className="w-full h-full bg-cover" src="../github-mark.svg" alt="" />
                </div>
              </motion.div>

         </div>
        </div> 
    </div>
  )
}

export default skills