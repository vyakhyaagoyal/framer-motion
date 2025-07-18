import React,{useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import content from './content'

const Card = ({title,description,color}) => {
    return (
        <div className="card-container mb-100" style={{position: 'sticky', top: '0px'}}>
                <div className='card' style={{height:'100vh', width:'200vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:color, borderRadius:'25px' }}>
                    {/* <div className='card-color' style={{ backgroundColor: color }}></div> */}
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-content'>{description}</p>
                </div>
                </div>
                )
    
}

export default Card
