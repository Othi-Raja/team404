import React from 'react';
import Nav from '../nav';
import { motion } from "framer-motion";
import { IoAnalyticsSharp } from "react-icons/io5";
import Waves from './waves.jsx';
 
export default function Home() {
  return (
    <div>
      {/* Fixed Navbar */}
      <div className='fixed-top'>
        <Nav />
      </div>
   <Waves/>
      {/* Main Section */}
      <motion.div
        style={{ height: '100vh' }}
        className='d-flex flex-column justify-content-center align-items-center text-center'
      >
        {/* AI Powered Trends */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ fontSize: "70px", fontWeight: "bold", marginBottom: "10px" }}
        >
          AI Powered Trends
        </motion.p>
        {/* ANALYSIS with Icon */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: .3 }}
          style={{ fontSize: "50px", fontWeight: "thin", display: "flex", alignItems: "center", gap: "10px" }}
        >
          A<IoAnalyticsSharp />ALYSIS
        </motion.p>
      </motion.div>
    </div>
  );
}
