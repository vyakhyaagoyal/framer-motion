import React from 'react'
import { useEffect,useState } from 'react'

const MousePosition = () => {
const [position,setPosition]=useState({x:0,y:0})

const updateMousePosition=(e)=>{
    setPosition({x:e.clientX,y:e.clientY});
}

useEffect(()=>{
    window.addEventListener('mousemove',updateMousePosition)
    return()=>{
        window.removeEventListener('mousemove',updateMousePosition)
    }
},[]);

  return position;
}

export default MousePosition
