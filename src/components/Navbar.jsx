// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className="fixed z-[999] w-full px-20 py-3 font-['Neue_Montreal'] flex justify-between items-center backdrop-blur-md shadow-md">
//       <div className = 'logo px-10'>
//         <img src="./PHOTO-2025-01-06-22-34-27-removebg.png" alt="logo" className='h-12 w-auto object-contain' />
//       </div>
//       <div className='links flex gap-10 '>
//         {["Skills", "Projects", "About Me", "Contact Me"].map((item, index)=>(
//           <a key={index} className = "text-md font-light capitalize">{item}</a>
//         ))}
//       </div>
        
//     </div>
//   )
// };

// export default Navbar

// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="fixed z-[999] w-full px-20 py-3 font-['Neue_Montreal'] flex justify-between items-center backdrop-blur-md shadow-md">
//       <div className="logo px-10">
//         <img
//           src="./PHOTO-2025-01-06-22-34-27-removebg.png"
//           alt="logo"
//           className="h-12 w-auto object-contain"
//         />
//       </div>
//       <div className="links flex gap-10">
//         {["Skills", "Projects", "About Me", "Contact Me"].map((item, index) => (
//           <a
//             key={index}
//             href={`#${item.toLowerCase().replace(" ", "-")}`}
//             className="text-md font-light capitalize hover:text-[#F29F58] hover:underline transition-all duration-300"
//           >
//             {item}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="fixed z-[1000] w-full px-20 py-3 font-['Neue_Montreal'] flex justify-between items-center backdrop-blur-md shadow-md">
//       <div className="logo px-10">
//         <img
//           src="./mitesh.jpeg"
//           alt="logo"
//           className="h-12 w-auto object-contain rounded-full transition-transform duration-300 ease-in-out scale-110"
//         />
//       </div>
//       <div className="links flex gap-40 text-2xl">
//         {["Skills", "Projects", "About Me", "Contact Me"].map((item, index) => (
//           <a
//             key={index}
//             href={`#${item.toLowerCase().replace(" ", "-")}`}
//             className="text-[#493628] font-light capitalize relative group hover:animate-jelly hover:text-[#CB6040]"
//           >
//             {item}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="fixed z-[1000] w-full px-20 py-3 font-['Neue_Montreal'] flex justify-between items-center backdrop-blur-md shadow-md">
//       <div className="logo px-10 group">
//         <img
//           src="./mitesh.jpeg"
//           alt="logo"
//           className="h-12 w-12 object-cover rounded-full overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-110"
//         />
//       </div>
//       <div className="links flex gap-40 text-2xl">
//         {["Skills", "Projects", "About Me", "Contact Me"].map((item, index) => (
//           <a
//             key={index}
//             href={`#${item.toLowerCase().replace(" ", "-")}`}
//             className="text-[#493628] font-light capitalize relative group hover:animate-jelly hover:text-[#CB6040]"
//           >
//             {item}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed z-[1000] w-full px-20 py-3 font-['Neue_Montreal'] flex justify-between items-center backdrop-blur-md shadow-md">
      <div className="logo px-10 relative group">
      
        <img
          src="/src/assets/NewLogo.jpeg"
          alt="logo"
          className="h-12 w-12 object-cover rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-110 hover:border-2 border-[#493628]"
        />
    
      </div>
      <div className="links flex gap-40 text-2xl">
      
        {["Skills", "Projects", "About Me", "Contact Me"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="text-[#493628] font-light capitalize relative group hover:animate-jelly hover:text-[#CB6040] scroll-smooth"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;