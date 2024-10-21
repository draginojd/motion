import React from 'react';
import transition from '../transition';
import { motion } from "framer-motion";


const cards = {
    hidden: { opacity: 1, scale: 0.5},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 10
      }
    }
   
  };
  
  const card = {
   
    hidden: {x: 0},
    visible: {y: 0, opacity: 1, x: "1"},
    transition: {  repeat:Infinity,duration: 1}
  
  };

export const Card = () => {
  return (
    <div className="card-container">

<motion.div className="cards" 
             
             variants={cards}
             initial="hidden"
             transition={{duration: 5, ease: [5.22, 1, 4.4, 1]}}
             animate={{ rotate:0,x: "0%"}}
            
       >

           {[[1,2,3,4,5,6]].map((index) => (
         <motion.div  key={index} className="card" variants={card} 
         
         transition={{repeat:Infinity ,duration: 5 }}
         animate={{ rotate:0,x: "50%"}}/>
       ))}
       
       </motion.div>

  </div>
  );
};


export default transition(Card);