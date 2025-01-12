import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-3 font-['Neue_Montreal'] flex justify-between items-center backdrop-blur-md bg-black/30 shadow-md">
      <div className = 'logo px-10'>
        <img src="./PHOTO-2025-01-06-22-34-27-removebg.png" alt="logo" className='h-12 w-auto object-contain' />
      </div>
      <div className='links flex gap-10 '>
        {["Skills", "Projects", "About Me", "Contact Me"].map((item, index)=>(
          <a key={index} className = "text-md font-light capitalize">{item}</a>
        ))}
      </div>
        
    </div>
  )
};

export default Navbar