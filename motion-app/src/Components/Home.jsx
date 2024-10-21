import React from 'react';
import transition from '../transition';
import { motion } from "framer-motion";
import Card from "./Card";
import Data from '../CardData';


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
      {Data.map((data) => (
        <Card 
        key={data.id}
        title={data.title}
        description={data.description}
        imageUrl={data.imageUrl}
        />
       

      ))}
      </div>
      
    </div>
  );
};

/* export default transition(Home); */
export default transition(Home);