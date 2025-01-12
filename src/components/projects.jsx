import React from 'react'

const projects = () => {
  return (

      <div> 
        <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-10 bg-zinc-800">
            <h1 className="text-7xl font-['Neue_Montreal' tracking-tight ]">Projects</h1>
        </div>

      <div className="w-full h-screen bg-zinc-800 flex gap-10 px-19 pl-10 pr-10 pt-10">
        <div className="frontend cardcontainer h-[40vh] w-0.49">
        <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
            <img
            src="/frontend1.png" 
            alt="Frontend Example"
            className="rounded-xl w-full h-full object-cover"
            />
        </div>
        </div>

        <div className="frontend cardcontainer h-[40vh] w-0.26">
        <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
            <img
            src="/simongame.png" 
            alt="Frontend Example"
            className="rounded-xl w-full h-full object-cover"
            />
        </div>
        </div>

        <div className="frontend cardcontainer h-[40vh] w-0.25">
        <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
            <img
            src="/drumkit.png" 
            alt="Frontend Example"
            className="rounded-xl w-full h-full object-cover"
            />
        </div>
        </div>
      </div>
      </div>


  )
}

export default projects