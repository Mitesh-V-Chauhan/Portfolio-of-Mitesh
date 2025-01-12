import React from 'react'

const contact = () => {
  return (
    <div className="w-full h-screen bg-black py-20 px-20 flex">
        <div className="flex flex-col h-full justify-between w-1/2 font-['Founders_Grotesk_X-Condensed']"> 
        <div className="heading">
            <h1 className="text-[10vw] uppercase leading-none -mb-10" style={{ fontWeight: 550 }}>CONNECT</h1>
            <h1 className="text-[10vw] uppercase leading-none -mb-10" style={{ fontWeight: 550 , wordSpacing: '10px'}}>With Me</h1>
        </div>
        <div>
            <h3 className="font-['Neue_Montreal']">MITESH CHAUHAN</h3>
        </div>
            
        </div>
        <div className="flex flex-col h-full justify-between w-1/2 font-['Founders_Grotesk_X-Condensed']">
        <div className="heading">
            <h1 className="text-[10vw] uppercase leading-none -mb-10" style={{ fontWeight: 550 }}>HERE</h1>
            <div className="font-['Neue_Montreal'] mt-10">
                <a className="block text-2xl font-light" href="#">

                    Instagram
                </a>
                <a className="block text-2xl font-light" href="#">
                    
                    GitHub
                </a>
                <a className="block text-2xl font-light" href="#">
                    
                    LinkedIN
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default contact