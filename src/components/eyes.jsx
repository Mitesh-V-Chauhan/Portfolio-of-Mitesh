import React from 'react';
import { useState, useEffect } from 'react';

const eyes = () => {
    const [rotate, setRotate]= useState(0);
    const [rotate2, setRotate2]= useState(0);
    

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mousex= e.clientX;
            let mousey= e.clientY;

            let deltax1 = mousex - window.innerWidth / 2 - (15 * window.innerWidth / 100 * 2 / 3) - window.innerWidth/100;
            let deltax2 = mousex - window.innerWidth / 2 + (15 * window.innerWidth / 100 * 2 / 3) + window.innerWidth/100;
            let deltay1= mousey - window.innerHeight/2;

            var angle= Math.atan2(deltay1, deltax1) * (180/Math.PI);
            setRotate(angle - 180);

            var angel2= Math.atan2(deltay1, deltax2) * (180/Math.PI);
            setRotate2(angel2 - 180)
        })
    })
  return (
    <div className="relative eyes w-full h-screen overflow-hidden bg-zinc-100 rounded-tl-3xl rounded-tr-3xl">
        <div className="w-full h-full bg-cover bg-center bg-[url(img2.jpeg)] ">
            <div data-scroll className="flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-[2vw]">
                <div className="flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate2}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
                <div className="flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default eyes