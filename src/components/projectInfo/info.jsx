import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Slider from "react-slick";  // ✅ Import Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../asserts/image1.png';
import image2 from '../asserts/image2.png';
import image3 from '../asserts/image3.png';
import graph1 from '../asserts/graph1.jpg';
import graph2 from '../asserts/graph2.jpg';
import graph3 from '../asserts/graph3.jpg';

const sections = [
    {
        title: "Why We Chose This Project",
        content: "This project combines Artificial Intelligence (AI) and Web3 technology to analyze, predict, and validate social media trends in a decentralized and tamper-proof manner. Traditional social media platforms manipulate and control trending topics, creating fake engagement and misinformation. Our approach ensures data authenticity, transparency, and user trust by using AI-driven analysis and blockchain-based validation.",
        bgImage: image1,
    },
    {
        title: "Data Sets",
        content: "We analyzed various social media datasets using advanced AI models...",
        bgImage: image2,
        graphs: [graph1, graph2, graph3],  // ✅ Array for Slider Images
        whatWeuse: {
            0: "ARIMA for Twitter",
            1: "Random Forest for GitHub",
            2: "Neural Network for Instagram",
        },
        whatWeGet: {
            0: "Twitter - 89%",
            1: "GitHub - 80%",
            2: "Instagram - 88%",
        },
    },
    {
        title: "Target Audience and Benefits",
        content: "The target audience for this project spans multiple industries, including social media influencers, digital marketers, developers, businesses, and researchers. Influencers and marketers can leverage the Instagram trend prediction model to optimize content strategy, ensuring posts stay relevant and maximize engagement. Open-source developers and GitHub users can utilize the GitHub trend prediction model to track which repositories are gaining traction, helping them improve project visibility and attract more contributors. Brands and businesses can use the insights from both Instagram and Twitter trends to align their marketing strategies with viral topics, ensuring their campaigns remain impactful. Additionally, researchers and data analysts can benefit from analyzing long-term social media engagement patterns to gain deeper insights into audience behavior. Investors and venture capitalists may also find the GitHub model useful in identifying promising open-source projects and emerging tech trends before they become mainstream. Furthermore, news and media companies can use the Twitter trend predictions to stay ahead of breaking news, while content creators and YouTubers can align their videos with trending topics for higher engagement. Overall, this project serves as a powerful tool for data-driven decision-making, combining AI-driven trend prediction across multiple platforms to benefit a broad spectrum of users.",
        bgImage: image3,
    },
];

const bgblur = {

background:' rgba(255, 255, 255, 0.2)',
borderRadius: '16px',
boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
backdropFilter: 'blur(5px)',
// -webkit-backdrop-filter: 'blur(5px)',
border: '1px solid white'
}
const Section = ({ title, content, bgImage, graphs, whatWeuse,whatWeGet }) => {
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

    // ✅ Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

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
                background: `url(${bgImage}) center/cover no-repeat`,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                   
                    padding: "50px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "50%",
                }}
            >
                <h1>{title}</h1>
                <p style={{ textAlign: "justify", width: "100%" }}>{content}</p>

                {/* ✅ Image Slider (Only if graphs exist) */}
                {graphs && (
                    <div style={{ width: "100%", margin: "20px 0" }}>
                        <Slider {...sliderSettings}>
                            {graphs.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        alt={`Graph ${index + 1}`}
                                        style={{ width: "100%", borderRadius: "10px" }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}

                {/* ✅ Buttons for "What We Use" */}
                {whatWeuse && (
                    <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                        {Object.values(whatWeuse).map((model, idx) => (
                            <button
                                key={idx}
                                style={{
                                    padding: "10px 20px",
                                   
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    color: "white",
                                    fontWeight: "bold",
                                    transition: "background 0.3s", ...bgblur
                                }}
                                className="small"
                    
                            >
                                {model}
                            </button>
                        ))}
                    </div>
                )}
                {/* ✅ Buttons for "What We Use" */}
                {whatWeGet && (
                    
                    
                    <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                        
                        {Object.values(whatWeGet).map((model, idx) => (
                            <button
                            className="bgblur"
                                key={idx}
                                style={{
                                    padding: "10px 20px",
                                   ...bgblur,
                                    
                                    borderRadius: "9px",
                                    cursor: "pointer",
                                    color: "white",
                                    fontWeight: "bold",
                                    transition: "background 0.3s",
                                }}
                            
                            >
                                {model} Accuracy
                            </button>
                        ))}
                    </div>
                     
                )}
            </motion.div>
        </motion.div>
    );
};

export default function Info() {
    return (
        <div style={{ position: "relative" }}>
            {sections.map((section, index) => (
                <Section key={index} {...section} />
            ))}
        </div>
    );
}
