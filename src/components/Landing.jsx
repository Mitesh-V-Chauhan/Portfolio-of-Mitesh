import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <section data-scroll-section>
    <div className="w-full h-screen bg-[#E4C087] border-t-2">
        <div className="textstructure mt-60 px-20">
            <div className="masker">
              <div className="w-fit flex flex-col">
                <h2 className="pt-[2vw] uppercase text-[8vw] leading-[4vw] font-['Founders_Grotesk_X-Condensed'] font-semibold (600)">Welcome  to</h2>
                <h1 className="pt-[2vw] uppercase text-[9vw] leading-[3.6vw] text-[#493628] font-['Founders_Grotesk_X-Condensed'] font-bold transform scale-y-140">MITESH CHAUHAN's</h1>
                <h1 className="pt-[2vw] uppercase text-[8vw] leading-[3.6vw] font-['Founders_Grotesk_X-Condensed'] font-bold hover:text-[]">Digital Playground</h1>
              </div>
            </div>

        </div>
        <div className="border-t-2 border-zinc-800 mt-32"></div>
    </div>
    </section>

  )
}

export default Landing