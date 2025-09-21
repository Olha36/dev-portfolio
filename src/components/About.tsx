import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

interface Service {
  title: string;
  icon: string;
}

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full white-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        // options={{
        //   max: 45,
        //   scale: 1,
        //   speed: 450,
        // }}
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={`${styles.sectionHeadText} text-animation`}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a motivated Frontend Developer specializing in React.js, Next.js,
        JavaScript, HTML, and CSS, with 2.5 years of experience coaching
        teenagers in web development. Since February 2025, I have been part of
        Solvd Laba, working on real-world projects and strengthening my skills
        in React, Next.js, TypeScript, and MUI. My background in software
        engineering (Master’s) and hands-on projects with APIs, forms, and UI
        flows gives me strong problem-solving and analytical skills. I aim to
        grow into a senior developer and contribute to impactful
        international projects.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
