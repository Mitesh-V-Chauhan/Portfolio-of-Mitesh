// import React from 'react'


// const projects = () => {
//   return (

//       <div  bg-zinc-700> 
//          <div className="flex w-full px-20 border-b-[1px] border-zinc-300 pb-10 bg-zinc-800 pt-10">
//             <h1 className="text-7xl font-['Neue_Montreal' tracking-tight ] hover:text-[#FACC14] duration-300 ease-in-out hover:scale-110">Projects</h1>
//         </div>

//       <div className="w-full h-screen flex items-center justify-center gap-10 px-19 pl-10 pr-10 bg-zinc-800 pb-0">
//         <div className="frontend cardcontainer h-[40vh] w-0.49">
//         <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
//             <img
//             src="/frontend1.png" 
//             alt="Frontend Example"
//             className="rounded-xl w-full h-full object-cover"
//             />
//         </div>
//         </div>

//         <div className="frontend cardcontainer h-[40vh] w-0.26">
//         <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
//             <img
//             src="/simongame.png" 
//             alt="Frontend Example"
//             className="rounded-xl w-full h-full object-cover"
//             />
//         </div>
//         </div>

//         <div className="frontend cardcontainer h-[40vh] w-0.25">
//         <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
//             <img
//             src="/drumkit.png" 
//             alt="Frontend Example"
//             className="rounded-xl w-full h-full object-cover"
//             />
//         </div>
//         </div>
//       </div>
//       </div>


//   )
// }

// export default projects



// import React from 'react';

// const Projects = () => {
//   return (
//     <div className="bg-[#bc8653] rounded-tl-3xl rounded-tr-3xl">
//       <div className="flex w-full px-20 border-b-[1px] border-[#54473F] pb-10 pt-10">
//         <h1 className="text-7xl font-['Neue_Montreal' tracking-tight] hover:text-[#FACC14] text-black duration-300 ease-in-out hover:scale-110">
//           Projects
//         </h1>
//       </div>

//       <div className="w-full h-screen flex items-center justify-center gap-10 px-19 pl-10 pr-10 pb-0">
//         {/* Frontend Card 1 (with size 0.49) */}
//         <div className="frontend cardcontainer h-[40vh] w-[49%] perspective-150rem">
//           <div className="card w-full h-full rounded-xl flex items-center justify-center relative">
//             <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden">
//               <img
//                 src="/frontend1.png"
//                 alt="Frontend Example"
//                 className="rounded-xl w-full h-full object-cover"
//               />
//             </div>

//             <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
//               <div className="text-center text-xl p-4">
//                 <p>Back side text content for Frontend Card 1</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Frontend Card 2 (with size 0.26) */}
//         <div className="frontend cardcontainer h-[40vh] w-[26%] perspective-150rem">
//           <div className="card w-full h-full rounded-xl flex items-center justify-center relative">
//             <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden">
//               <img
//                 src="/simongame.png"
//                 alt="Simon Game Example"
//                 className="rounded-xl w-full h-full object-cover"
//               />
//             </div>

//             <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
//               <div className="text-center text-xl p-4">
//                 <p>Back side text content for Simon Game Card</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Frontend Card 3 (with size 0.25) */}
//         <div className="frontend cardcontainer h-[40vh] w-[25%] perspective-150rem">
//           <div className="card w-full h-full rounded-xl flex items-center justify-center relative">
//             <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden">
//               <img
//                 src="/drumkit.png"
//                 alt="Drumkit Example"
//                 className="rounded-xl w-full h-full object-cover"
//               />
//             </div>

//             <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
//               <div className="text-center text-xl p-4">
//                 <p>Back side text content for Drumkit Card</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React from 'react';

// const Projects = () => {
//   return (
//     <div className="bg-[#bc8653] rounded-tl-3xl rounded-tr-3xl">
//       <div className="flex w-full px-20 border-b-[1px] border-[#54473F] pb-10 pt-10">
//         <h1 className="text-7xl font-['Neue_Montreal' tracking-tight] hover:text-[#FACC14] text-black duration-300 ease-in-out hover:scale-110">
//           Projects
//         </h1>
//       </div>

//       <div className="w-full h-screen flex items-center justify-center gap-10 px-19 pl-10 pr-10 pb-0">
//         {/* Frontend Card 1 (with size 0.49) */}
//         <div className="frontend cardcontainer h-[40vh] w-[49%] perspective-150rem">
//           <div className="card w-full h-full rounded-xl flex items-center justify-center relative transition-transform duration-500">
//             <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
//               <div className="text-center text-xl p-4">
//                 <p>Front side text content for Frontend Card 1</p>
//               </div>
//             </div>

//             <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
//               <img
//                 src="/frontend1.png"
//                 alt="Frontend Example"
//                 className="rounded-xl w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Frontend Card 2 (with size 0.26) */}
//         <div className="frontend cardcontainer h-[40vh] w-[26%] perspective-150rem">
//           <div className="card w-full h-full rounded-xl flex items-center justify-center relative transition-transform duration-500">
//             <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
//               <div className="text-center text-xl p-4">
//                 <p>Front side text content for Simon Game Card</p>
//               </div>
//             </div>

//             <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
//               <img
//                 src="/simongame.png"
//                 alt="Simon Game Example"
//                 className="rounded-xl w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Frontend Card 3 (with size 0.25) */}
//         <div className="frontend cardcontainer h-[40vh] w-[25%] perspective-150rem">
//           <div className="card w-full h-full rounded-xl flex items-center justify-center relative transition-transform duration-500">
//             <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
//               <div className="text-center text-xl p-4">
//                 <p>Front side text content for Drumkit Card</p>
//               </div>
//             </div>

//             <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
//               <img
//                 src="/drumkit.png"
//                 alt="Drumkit Example"
//                 className="rounded-xl w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';


const Projects = () => {
  return (
    <div className="bg-[#bc8653] rounded-tl-3xl rounded-tr-3xl">
      <div className="flex w-full px-20 border-b-[1px] border-[#54473F] pb-10 pt-10">
        <h1 className="text-7xl font-montreal tracking-tight  text-black duration-300 ease-in-out hover:scale-110">
          Projects
        </h1>
      </div>

      <div className="w-full h-screen flex items-center justify-center gap-10 px-19 pl-10 pr-10 pb-0">
        <div className="frontend cardcontainer h-[40vh] w-[49%] perspective-150rem">
          <div className="card shadow-[5px_5px_0px_#54473F] w-full h-full rounded-xl flex items-center justify-center relative transition-transform duration-500">
            <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
              <div className="text-center text-xl p-4 font-montreal text-[#54473F] text-bold">
                <p>My first Frontend Project</p>
              </div>
            </div>

            <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
              <a href="https://mitesh-v-chauhan.github.io/SidCup-Clone/" target="_blank"><img
                src="/frontend1.png"
                alt="Frontend Example"
                className="rounded-xl w-full h-full object-cover shadow-lg"
              /></a>
            </div>
          </div>
        </div>

        <div className="frontend cardcontainer h-[40vh] w-[26%] perspective-150rem">
          <div className="card shadow-[5px_5px_0px_#54473F] w-full h-full rounded-xl flex items-center justify-center relative transition-transform duration-500">
            <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
              <div className="text-center text-xl p-4 font-montreal text-[#54473F]">
                <p>My first JavaScript Project</p>
              </div>
            </div>

            <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
              <a href=" https://mitesh-v-chauhan.github.io/Simon_Game/" target="_blank"><img
                src="/simongame.png"
                alt="Simon Game Example"
                className="rounded-xl w-full h-full object-cover shadow-lg"
              /></a>
            </div>
          </div>
        </div>

        <div className="frontend cardcontainer h-[40vh] w-[25%] perspective-150rem">
          <div className="card shadow-[5px_5px_0px_#54473F] w-full h-full rounded-xl flex items-center justify-center relative transition-transform duration-500">
            <div className="card-side front w-full h-full absolute top-0 left-0 backface-hidden bg-[#c69363] flex items-center justify-center text-white rounded-xl">
              <div className="text-center text-xl p-4 font-montreal text-[#54473F] text-bold">
                <p>My Second Project with JavaScript</p>
              </div>
            </div>

            <div className="card-side back w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
              <a href="https://mitesh-v-chauhan.github.io/Complete-DrumKit/" target="_blank"><img
                src="/drumkit.png"
                alt="Drumkit Example"
                className="rounded-xl w-full h-full object-cover shadow-lg"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;