// import React, {useEffect} from 'react';
// import Navbar from './components/Navbar';
// import LandingPage from './components/Landing';
// import Marquee from './components/Marquee';
// import About from './components/About'
// import Eyes from './components/eyes'
// import Skills from './components/skills'
// import Projects from './components/projects'
// import Contact from './components/contact'
// import LocomotiveScroll from 'locomotive-scroll';
// import { motion } from 'framer-motion';
// import 'font-awesome/css/font-awesome.min.css';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "locomotive-scroll/dist/locomotive-scroll.css";




// const App = () => {
//   return (
//     <div data-scroll-container className='scroll-container overflow-x-hidden overflow-y-scroll w-full min-h-screen text-white'>
//       <Navbar />
//       <LandingPage />
//       <Marquee />
//       <About />
//       <Eyes />
//       <Skills />
//       <Projects />
//       <Contact />
//     </div>
//   )
// }

// export default App;

// // import React, { useEffect } from 'react';
// // import LocomotiveScroll from 'locomotive-scroll';
// // import Navbar from './components/Navbar';
// // import LandingPage from './components/Landing';
// // import Marquee from './components/Marquee';
// // import About from './components/About';
// // import Eyes from './components/eyes';
// // import Skills from './components/skills';
// // import Projects from './components/projects';
// // import Contact from './components/contact';
// // // import 'locomotive-scroll/dist/locomotive-scroll.css';

// // const App = () => {
// //   useEffect(() => {
// //     const scroll = new LocomotiveScroll({
// //       el: document.querySelector("[data-scroll-container]"),
// //       smooth: true,
// //       multiplier: 1, // Adjust for overall scroll speed
// //       lerp: 0.1, // Controls inertia (lower is smoother, higher is faster)
// //       smoothMobile: true, // Enable smooth scrolling on mobile
// //       smartphone: {
// //       smooth: true,
// //       },
// //       tablet: {
// //         smooth: true,
// //       },
// //     });
  
// //     return () => scroll.destroy();
// //   }, []);

// //   return (
// //     <div className="relative w-full min-h-screen bg-black text-white">
// //       <Navbar />
// //       <LandingPage />
// //       <Marquee />
// //       <About />
// //       <Eyes />
// //       <Skills />
// //       <Projects />
// //       <Contact />
// //      </div>
// //   )
// // };

// // export default App;

import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Navbar from './components/Navbar';
import LandingPage from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/eyes';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import CustomCursor from "./components/CustomCursor";


const App = () => {
  const scrollRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollTop(scrollRef.current.scrollTop);
    }
  };


  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('scroll', handleScroll);
    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollAnim1 = useSpring({
    transform: `translateY(${scrollTop * 0.4}px)`,
    config: { tension: 80, friction: 10 },
  });

  const scrollAnim2 = useSpring({
    transform: `translateY(${scrollTop * 0.5}px)`,
    config: { tension: 80, friction: 10 },
  });

  const scrollAnim3 = useSpring({
    transform: `translateY(${scrollTop * 0.3}px)`,
    config: { tension: 80, friction: 10 },
  });

  const scrollAnim4 = useSpring({
    transform: `translateY(${scrollTop * 0.28}px)`,
    config: { tension: 80, friction: 10 },
  });
  
  const scrollAnim5 = useSpring({
    transform: `translateY(${scrollTop * 0.25}px)`,
    config: { tension: 80, friction: 10 },
  });

  const scrollAnim6 = useSpring({
    transform: `translateY(${scrollTop * 0.22}px)`,
    config: { tension: 80, friction: 10 },
  });

  const scrollAnim7 = useSpring({
    transform: `translateY(${scrollTop * 0.18}px)`,
    config: { tension: 80, friction: 10 },
  });

  const scrollAnim8 = useSpring({
    transform: `translateY(${scrollTop * 0.15}px)`,
    config: { tension: 80, friction: 10 },
  });
  

  return (
    <div ref={scrollRef} className="scroll-container overflow-x-hidden overflow-y-scroll w-full min-h-screen text-white bg-black">
      <CustomCursor />
      <div className="shadow-[6px_5px_0px_#54473F]" >
        <Navbar />
      </div>
   
      <animated.div className="shadow-[6px_5px_0px_#54473F]" style={scrollAnim2}>
        <LandingPage />
      </animated.div>

      <animated.div className="shadow-[6px_5px_0px_#54473F]" style={scrollAnim1}>
        <Marquee />
      </animated.div>

      <animated.div  id="aboutme" className="shadow-[6px_5px_0px_#54473F]" style={scrollAnim5}>
        <About />
      </animated.div>

      <animated.div className="shadow-[6px_5px_0px_#54473F]" style={scrollAnim5}>
        <Eyes />
      </animated.div>

      <animated.div id="skills" className="shadow-[6px_5px_0px_#54473F]" style={scrollAnim6}>
        <Skills />
      </animated.div>

      <animated.div id="projects" className="shadow-[6px_5px_0px_#54473F]" style={scrollAnim7}>
        <Projects />
      </animated.div>

      <animated.div id="contactme"className="shadow-[6px_5px_0px_#54473F]" style={scrollAnim8}>
        <Contact />
      </animated.div>
    </div>
  );
};

export default App;