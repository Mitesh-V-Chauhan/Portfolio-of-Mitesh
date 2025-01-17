import React from 'react'

const contact = () => {
  return (
    <div className="w-full h-screen bg-[#754E1A] py-20 px-20 flex rounded-tl-3xl rounded-tr-3xl">
        <div className="flex flex-col h-full justify-between w-1/2 font-['Founders_Grotesk_X-Condensed']"> 
        <div className="heading">
            <h1 className="text-[10vw] uppercase leading-none -mb-10 hover:text-orange-400 hover:scale-110" style={{ fontWeight: 550 , wordSpacing: '10px'}}>CONNECT</h1>
            <h1 className="text-[10vw] uppercase leading-none -mb-10 hover:text-orange-400 hover:scale-110" style={{ fontWeight: 550 , wordSpacing: '10px'}}>With Me</h1>
        </div>
        <div>
            {/* <h3 className="font-['Neue_Montreal'] hover:bg-[url()]">Designed and Developed by: MITESH CHAUHAN</h3> */}
            <p class="text-sm text-[20px] font-light font-['Neue_Montreal']">
              &copy; 2025 Designed and Developed by <span class="font-bold text-[#FFF]">Mitesh Chauhan</span>.
            </p>
        </div>
            
        </div>

        <div className="flex flex-col gap-20 h-full w-1/2 font-['Founders_Grotesk_X-Condensed']">
        <div className="heading">
            <h1 className="text-[10vw] uppercase leading-none -mb-10 hover:text-orange-300 hover:scale-110" style={{ fontWeight: 550 }}>HERE</h1>
        </div>
        <div className="flex flex-col gap-5  pt-30 font-['Neue_Montreal']">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/mitesh_.07?igsh=MWpkN25nMGVncnBhaw=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-2xl font-light text-white hover:text-yellow-400 transition-all"
      >
        <i className="fab fa-instagram mr-2 text-pink-500 hover:text-yellow-400 transition-all"></i>
        Instagram
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Mitesh-V-Chauhan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-2xl font-light text-white hover:text-blue-400 transition-all"
      >
        <i className="fab fa-github mr-2 text-gray-700 hover:text-blue-400 transition-all"></i>
        GitHub
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/mitesh-chauhan-9a079631a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-2xl font-light text-white hover:text-blue-600 transition-all"
      >
        <i className="fab fa-linkedin mr-2 text-blue-500 hover:text-blue-600 transition-all"></i>
        LinkedIn
      </a>
    </div>
        </div>
        
    </div>
  )
}

export default contact