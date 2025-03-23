import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Drawer, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./about.css";
import Github from "./microcomponent/github";
import X from "./microcomponent/x";
import Instagram from "./microcomponent/instagram";
export default function About() {
  const buttons = ["X", "Instagram", "GitHub"];
  const [bgGradient, setBgGradient] = useState("linear-gradient(to bottom, #000000, #1a1a2e)");
  const controls = useAnimation();
  const [open, setOpen] = useState(false); // Drawer state
  const [selectedcomponent, setselectedcomponent] = useState('')
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
  const handlebutton = (data) => {
    setOpen(!open)
    setselectedcomponent(data)
  }
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
      {/* Faded Top Border */}
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50px", // Adjust the fade height
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent)",
          zIndex: 2,
        }}
      /> */}
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
            <Button
              className="bg-transparent text-white"
              onClick={() => handlebutton(label)} // Open Drawer on click
            >
              {label}
            </Button>
          </motion.div>
        ))}
      </div>
      {/* MUI Drawer (Slider) */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: { width: "100%", background: "#1a1a2e", color: "white", padding: "20px" },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={() => setOpen(false)}
          style={{ color: "white", position: "absolute", top: 10, left: 10 }}
        >
          <CloseIcon style={{ fontSize: 32 }} /> {/* Increased size */}
        </IconButton>
        <div className="px-5">
          {
            selectedcomponent === 'X' ? (
              <>
                <X />
              </>
            )
              : selectedcomponent === 'Instagram' ? (
                <>
                  <Instagram />
                </>
              )
                : selectedcomponent === 'GitHub' ? (
                  <>
                    <Github />
                  </>
                ) :
                  <h1>Welcome to About Page!</h1>
          }
        </div>
      </Drawer>
    </div>
  );
}
