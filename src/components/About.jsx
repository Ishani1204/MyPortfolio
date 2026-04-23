import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="group w-[220px]" onMouseMove={handleMouseMove}>
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 400,
        }}
        className="w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
          whileHover={{ scale: 1.05 }}
          className="relative w-full rounded-[20px] p-[1px]"
        >
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500" />
          <div
            className="pointer-events-none absolute w-40 h-40 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-30 blur-3xl transition duration-300"
            style={{
              top: position.y - 80,
              left: position.x - 80,
            }}
          />
          <div className="relative bg-tertiary rounded-[20px] py-6 px-6 h-[250px] flex flex-col items-center justify-center shadow-lg">
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-white text-[18px] font-bold text-center leading-tight">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center text-center mt-10">
        <motion.div variants={textVariant()} className="max-w-3xl w-full">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px] text-justify"
        >
          I’m a Machine Learning enthusiast with hands-on experience in building
          models like Linear Regression, Logistic Regression, Decision Trees,
          and KNN.<br></br>I enjoy creating projects, exploring new technologies, and
          learning advanced concepts like Quantum Machine Learning and RAG
          systems. I’m always eager to apply my skills to real-world problems
          and grow as a developer.
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center items-center gap-10 flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
//1:35:27