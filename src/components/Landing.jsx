import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scrollspeed="-.8" className="w-full h-screen bg-black border-t-2">
        <div className="textstructure mt-60 px-20">
            <div className="masker">
              <div className="w-fit">
                <h2 className="pt-[2vw] uppercase text-[8vw] leading-[3.3vw] font-['Founders_Grotesk_X-Condensed'] font-semibold (600)">Welcome  to</h2>
                <h1 className="pt-[2vw] uppercase text-[8vw] leading-[3.6vw] text-yellow-400 font-['Founders_Grotesk_X-Condensed'] font-bold transform scale-y-140">MITESH CHAUHAN's</h1>
                <h1 className="pt-[2vw] uppercase text-[8vw] leading-[3.6vw] font-['Founders_Grotesk_X-Condensed'] font-bold">Digital Playground</h1>
              </div>
            </div>

        </div>
        <div className="border-t-2 border-zinc-800 mt-32"></div>
    </div>

  )
}

export default Landing