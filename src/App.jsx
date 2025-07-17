'use client';
import React,{useState,useRef,useEffect} from 'react';
import MousePosition from './MousePosition';
import './App.css'
import { motion, useScroll,useTransform } from "motion/react"
import content from './components/content';
import Card from './components/card';

function App() {
  const ref=useRef();
  const {scrollYProgress}=useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  const {scrollY}=useScroll();
  const opacity=useTransform(scrollY, [0, 800], [1, 0]);

  const [hovered,setHovered]=useState(false);
  const [slow, setSlow] = useState(false);

  const{x,y}=MousePosition();
  const size=hovered?350:50;

  // State to control scroll lock
  const [animationDone, setAnimationDone] = useState(false);
  const [wixTextDone, setWixTextDone] = useState(false);

  // // Lock scroll until animation is done
  // useEffect(() => {
  //   if (!animationDone || !wixTextDone) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [animationDone,wixTextDone]);


  return (
    <>
      <div className="flex items-center justify-start min-h-screen" style={{backgroundColor: 'black'}}>
        <div className="text-8xl mb-100 ml-20 mt-25 items-center" style={{ flex: 1 }}>

          <motion.h1
            className='main mb-150'
            style={{ clipPath }}
            // onAnimationComplete={() => setWixTextDone(true)}
          >
            Wix studio<br />

          </motion.h1>

          <motion.h1
            style={{
              opacity,
              color: "white",
            }} className='mb-100'
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            // wixTextDone={() => setWixTextDone(true)}
          >
            Wix studio<br />
            Deliver brilliance.<br />
            Smash deadlines.
          </motion.h1>
          
        </div>
        <div className="flex-1 flex justify-center items-center">
          <iframe
            src="https://clear-beautifully-265808.framer.app/"
            width="600"
            height="600"
            style={{ background: "black" }}
            title="Framer Project"
          />
        </div>
      </div>

    <motion.div className="div">
      <motion.h1 className='text-overlay'>Wix studio
      <br />
        Deliver brilliance.
        <br />
        Smash deadlines.</motion.h1>
    </motion.div>
      {/* <header className='header bg-gray-200 text-black flex-col italic'>welcome</header> */}
      {/* <h1 className='text-blue-500 bg-red-300 font-bold underline flex flex-col'>framer motion</h1>
      <motion.div 
      style={{
        scaleX:scrollYProgress
      }}
      className="line"></motion.div> */}

      {/* <motion.div className='box'
        initial={{
          x: 200,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        // whileDrag={{
        //   backgroundColor:'blue'
        // }}
        // dragConstraints={{
        //   left:50,
        //   right:1300
        // }}
        // dragDirectionLock='true'
        
        // animate={{
        //   x: [0, 800, 800, 0, 0],
        //   y: [0, 0, 300, 300, 0], //keyframe animation

        // }}
        // transition={{
        //   duration: 3,
        //   delay: 1,
        //   ease: 'anticipate'
        // }}
        >
</motion.div> */}
      <motion.div className='mask-container h-100vh bg-black text-stone-400 m-0 font-serif relative'>
        <motion.div className="mask h-screen flex justify-center items-center text-8xl cursor-default absolute top-0 left-0 w-full h-full z-10"
        animate={{
          maskPosition:`${x-size/2}px ${y-size/2}px`,
          maskSize:`${size}px`
        }}
        transition={{
          type:'tween',
          ease:'backOut',
          duration:slow?1.5:0.5,
        }}>
          <p onMouseEnter={() => {setHovered(true); setSlow(true);}} onMouseLeave={() => {setHovered(false); setSlow(false);}}>THE EVIL TWIN.</p>
        </motion.div>
        <motion.div className="body h-screen flex justify-center items-center text-8xl cursor-default z-0">
          <p>THIS IS <span className='text-rose-600'>VYAKHYA</span>.</p>
        </motion.div>
      </motion.div>
      
      {content.map((content, index) => {
        return (
          <Card key={index} {...content} />
        )
      })}
      
      {/* <footer className='footer mx-2 my-4 text-red-800'>contact us</footer> */}
    </>
  )
}

export default App