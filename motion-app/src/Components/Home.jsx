import React from 'react';
import transition from '../transition';
import { motion } from "framer-motion";


export const Home = () => {
  return (
   
    <div className="home-containers">
      <div className="container">
        <motion.h1 className='wobble'
                initial={{ left: 2}}
                animate={{ scaleY: 1}}
                exit={{ scaleY: 1}}
                transition={{ duration: 1, ease: [1.22, 1, 0.4, 1]}}
        >Home</motion.h1>
      </div>
      <div className="container">
        <div className="cards">
          <div  className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          
        </div>
      </div>
    </div>
  );
};

/* export default transition(Home); */
export default transition(Home);