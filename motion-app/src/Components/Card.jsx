import React from 'react';
import transition from '../transition';
import { animate, easeIn, motion, stagger } from "framer-motion";

import Marquee from "react-fast-marquee";

import { useState } from "react";





const images = [
  "../card1.png",
  "./image-2.jpg",
  "/image-3.jpg",
  "/image-4.jpg",
  "/image-5.jpg",
  "/image-6.jpg",
  "/image-7.jpg",
]


 

export const Card = () => {

 
  return (

    
    <div className="cards">
      <Marquee>

        <motion.div 
                    className="card"
        > 
        Read More
        </motion.div>


</Marquee>
    </div>
  );
};


export default transition(Card);