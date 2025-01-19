// import React from 'react'
// import { FaArrowUpLong } from "react-icons/fa6";

// const Landing = () => {
//   return (
//     <section data-scroll-section>
//     <div className="w-full h-screen bg-[#E4C087] border-t-2">
//         <div className="textstructure mt-60 px-20">
//             <div className="masker flex gap-40">
//               <div className="w-fit flex flex-col">
//                 <h2 className="pt-[2vw] uppercase text-[8vw] leading-[4vw] font-['Founders_Grotesk_X-Condensed'] font-semibold (600)">Welcome  to</h2>
//                 <h1 className="pt-[2vw] uppercase text-[9vw] leading-[3.6vw] text-[#493628] font-['Founders_Grotesk_X-Condensed'] font-bold transform scale-y-140 ">MITESH CHAUHAN's</h1>
//                 <h1 className="pt-[2vw] uppercase text-[8vw] leading-[3.6vw] font-['Founders_Grotesk_X-Condensed'] font-bold hover:text-[]">Digital Playground</h1>
//               </div>
//               <div className="mt-15 overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 rounded-full hover:shadow-[6px_5px_0px_#754E19]">
//                 <img src="NewLogo.jpeg" alt="" className="w-64 h-64 object-cover rounded-full  hover:border-4 border-[#493628]"/>
//               </div>
//             </div>

//         </div>
//         <div className="border-t-2 border-zinc-800 mt-32"></div>
//     </div>
//     </section>

//   )
// }

// export default Landing;

import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <section data-scroll-section>
      <div className="w-full h-screen bg-[#E4C087] border-t-2">
        <div className="textstructure mt-60 px-6 sm:px-20">
          <div className="masker flex flex-col sm:flex-row gap-10 sm:gap-40">
            <div className="w-fit flex flex-col">
              <h2 className="pt-[2vw] sm:pt-[2vw] uppercase text-[8vw] sm:text-[8vw] md:text-[7vw] leading-[4vw] sm:leading-[4vw] md:leading-[3vw] font-grotesk font-semibold">
                Welcome to
              </h2>
              <h1 className="pt-[2vw] sm:pt-[2vw] uppercase text-[9vw] sm:text-[9vw] md:text-[8vw] leading-[3.6vw] sm:leading-[3.6vw] md:leading-[3vw] text-[#493628] font-grotesk font-bold transform scale-y-140">
                MITESH CHAUHAN's
              </h1>
              <h1 className="pt-[2vw] sm:pt-[2vw] uppercase text-[8vw] sm:text-[8vw] md:text-[7vw] leading-[3.6vw] sm:leading-[3.6vw] md:leading-[3vw] font-grotesk font-bold hover:text-[]">
                Digital Playground
              </h1>
            </div>
            <div className="mt-15 sm:mt-15 overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 rounded-full">
              <img src="/NewLogo.jpeg" alt="" className="w-auto h-64 sm:w-auto sm:h-64 object-cover rounded-full hover:border-4 border-[#493628] hover:shadow-[6px_5px_0px_#754E19]" />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-zinc-800 mt-32 sm:mt-32"></div>
      </div>
    </section>
  )
}

export default Landing;