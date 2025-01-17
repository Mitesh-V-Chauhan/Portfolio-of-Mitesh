// import React, { useEffect } from "react";
// import "./CustomCursor.css";

// const CustomCursor = () => {
//   useEffect(() => {
//     const cursor = document.querySelector("#cursor");
//     const cursorBlur = document.querySelector("#cursor-blur");

//     const handleMouseMove = (e) => {
//       cursor.style.left = `${e.clientX}px`;
//       cursor.style.top = `${e.clientY}px`;

//       cursorBlur.style.left = `${e.clientX - 125}px`;
//       cursorBlur.style.top = `${e.clientY - 125}px`;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div id="cursor"></div>
//       <div id="cursor-blur"></div>
//     </>
//   );
// };

// export default CustomCursor;

import React, { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const cursorBlur = document.querySelector("#cursor-blur");

    let cursorX = 0, cursorY = 0; 
    let blurX = 0, blurY = 0;    

    const handleMouseMove = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;

      
      cursor.style.transform = `translate(${cursorX-10}px, ${cursorY-10}px)`;
    };

    const animateCursorBlur = () => {
      
      blurX += (cursorX - blurX) * 0.1;
      blurY += (cursorY - blurY) * 0.1;

      cursorBlur.style.transform = `translate(${blurX - 50}px, ${blurY - 50}px)`;

      requestAnimationFrame(animateCursorBlur);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateCursorBlur(); 

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
    </>
  );
};

export default CustomCursor;