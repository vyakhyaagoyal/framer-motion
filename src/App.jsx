import React from 'react';
import './App.css'
import { motion,useScroll } from "motion/react"
import content from './components/content';
import Card from './components/card';

function App() {
  // console.log(useScroll())
  // const {scrollYProgress}=useScroll();
  return (
    <>
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
