import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About'
import Eyes from './components/eyes'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion';

const App = () => {
  const locomotivescroll = new LocomotiveScroll();
  motion
  return (
    <div className='overflow-x-hidden overflow-y-scroll w-full min-h-screen text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;

// import React, { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import Navbar from './components/Navbar';
// import LandingPage from './components/Landing';
// import Marquee from './components/Marquee';
// import About from './components/About';
// import Eyes from './components/eyes';
// import Skills from './components/skills';
// import Projects from './components/projects';
// import Contact from './components/contact';
// // import 'locomotive-scroll/dist/locomotive-scroll.css';

// const App = () => {
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector("[data-scroll-container]"),
//       smooth: true,
//       multiplier: 1, // Adjust for overall scroll speed
//       lerp: 0.1, // Controls inertia (lower is smoother, higher is faster)
//       smoothMobile: true, // Enable smooth scrolling on mobile
//       smartphone: {
//       smooth: true,
//       },
//       tablet: {
//         smooth: true,
//       },
//     });
  
//     return () => scroll.destroy();
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-black text-white">
//       <Navbar />
//       <LandingPage />
//       <Marquee />
//       <About />
//       <Eyes />
//       <Skills />
//       <Projects />
//       <Contact />
//      </div>
//   )
// };

// export default App;