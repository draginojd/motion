import React from 'react';
import transition from '../transition';
import { motion } from "framer-motion";
import Card from "./Card";



const images = [
  "/image-1.jpg",
  "/image-2.jpg",
  "/image-3.jpg",
  "/image-4.jpg",
  "/image-5.jpg",
  "/image-6.jpg",
  "/image-7.jpg",
]



export const Home = () => {
  return (
  
   
    <div className="home-containers">
      
      <div className="header">
        <motion.h1 className='wobble'
                initial={{ left: 2}}
                animate={{ scaleY: 1}}
                exit={{ scaleY: 1, duration: 10}}
                transition={{ duration: 1, ease: [1.22, 1, 0.4, 1]}}
        >Home</motion.h1>
      </div>


      <div className="container">

   <Card />

      </div>
    </div>
  );
};

/* export default transition(Home); */
export default transition(Home);