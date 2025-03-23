import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Marquee from "react-fast-marquee";
import image1 from '../asserts/image1.png'
import image2 from '../asserts/image2.png'
import image3 from '../asserts/image3.png'
const sections = [
    {
        title: "Why We Chose This Project",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat modi incidunt.",
        bgImage: image1,
    },
    {
        title: "Data Sets",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat modi incidunt.",
        bgImage: image2,
    },
    {
        title: "Target Audience and Benefits",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat modi incidunt.",
        bgImage: image3,
    },
];
const Section = ({ title, content, bgImage }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 });
    const controls = useAnimation();
    useEffect(() => {
        if (isInView) {
            controls.start({ scale: 1, opacity: 1, y: 0 });
        } else {
            controls.start({ scale: 0.5, opacity: 0, y: 50 });
        }
    }, [isInView, controls]);
    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                padding: "20px",
                background: `url(${bgImage}) center/cover no-repeat`, // ✅ Set Background Image
            }}
        >
           <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    padding: "20px",
                    borderRadius: "10px",
                
                }}
            >
                <h1>{title}</h1>
                <p>{content}</p>
            </motion.div>
        </motion.div>
    );
};
export default function Info() {
    return (
        <div style={{ position: "relative" }}>
            <Marquee speed={10} autoFill className="border-b-3 pt-1 pb-4 border-white">
                <p className="text-white bg-slate-400 border mx-3 px-5 pt-2 pb-2 rounded-4">dcw</p>
            </Marquee>
            <Marquee speed={10} direction="right" autoFill className="border-b-3 pt-1 pb-4 border-white">
                <p className="text-white bg-slate-400 border mx-3 px-5 pt-2 pb-2 rounded-4">dcw</p>
            </Marquee>
            {sections.map((section, index) => (
                <Section key={index} {...section} />
            ))}
        </div>
    );
}
