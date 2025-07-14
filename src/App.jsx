import React,{useState} from 'react';
'use client';
import MousePosition from './MousePosition';
import './App.css'
import { motion, useScroll,useTransform } from "motion/react"
import content from './components/content';
import Card from './components/card';

function App() {
  // console.log(useScroll())
  const {scrollY}=useScroll();
  // const {scrollYProgress}=useScroll();
  const opacity=useTransform(scrollY, [0, 300], [1, 0]);
  // console.log(opacity);

  const [hovered,setHovered]=useState(false);
  const [slow, setSlow] = useState(false);

  const{x,y}=MousePosition();
  const size=hovered?350:50;

  return (
    <>
    <motion.div className="div">
      <motion.h1 className='text-9xl mb-175 ml-20 mt-25 items-center'
      style={{
          opacity,
          color: "white",
      }}>Wix studio
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
      {/* <p id='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aperiam eaque est necessitatibus temporibus explicabo voluptas. Modi amet pariatur, optio atque, fugiat eaque ut, impedit suscipit quo vero accusamus a.</p> */}
      {/* <footer className='footer mx-2 my-4 text-red-800'>contact us</footer> */}
    </>
  )
}

export default App
