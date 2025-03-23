import React from 'react';
import Nav from '../nav';
import { motion } from "framer-motion";
import { IoAnalyticsSharp } from "react-icons/io5";
import Squares from './waves.jsx';

export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Fixed Navbar */}
      {/* <div className='fixed-top'>
        <Nav />
      </div> */}

      {/* Background Animation (Relative to Parent) */}
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <Squares smooth={true} glitchSpeed={100} />
      </div>

      {/* Main Text (Absolutely Positioned) */}
      <motion.div style={{  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {/* AI Powered Trends */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
         
          className="z-3 text-white"
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            transition: "all 0.3s ease-in-out", 
       
            textAlign: "center"
          }}
        >
          AI Powered Trends
        </motion.p>

        {/* ANALYSIS with Icon */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="z-3 d-flex text-center justify-content-center align-items-center"
          style={{
            fontSize: "50px",
            fontWeight: "bold", 
          
            color:'white'
            
          }}
        >
          A<IoAnalyticsSharp />ALYSIS
        </motion.p>

      </motion.div>
    </div>
  );
}
