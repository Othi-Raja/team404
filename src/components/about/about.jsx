import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./about.css";
import Cyberbutton from "./custmbutton";

export default function About() {
  const buttons = ["X", "Instagram", "GitHub"];
  const [bgGradient, setBgGradient] = useState("linear-gradient(to bottom, #000000, #1a1a2e)");
  const controls = useAnimation();
  
  // Function to get the circle size based on scroll
  const getCircleSize = (scrollY) => {
    const baseSize = 50; // Starting size
    const maxSize = 2000; // Max expansion size
    return Math.min(baseSize + scrollY * 5, maxSize);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBgGradient(getSmoothGradient(scrollY)); // Update gradient

      // Animate circle expansion
      controls.start({
        width: getCircleSize(scrollY),
        height: getCircleSize(scrollY),
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Smooth gradient transition
  const getSmoothGradient = (scrollY) => {
    const colors = ["#000000", "#1a1a2e", "#16213e", "#0f3460", "#1b1b1b"];
    const maxScroll = 800;
    const percentage = Math.min(scrollY / maxScroll, 1);
    const index = Math.floor(percentage * (colors.length - 1));
    return `linear-gradient(to bottom, ${colors[index]}, ${colors[index + 1] || colors[index]})`;
  };

  return (
    <div
      style={{
        height: "100vh",
        background: bgGradient,
        transition: "background 0.3s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Expanding Circle */}
      <motion.div
        animate={controls}
        initial={{ width: 100, height: 100 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "20px", position: "relative", zIndex: 1 }}>
        {buttons.map((label, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <Cyberbutton InputText={label} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
