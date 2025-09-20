import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero: React.FC = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#EFBF04]" />
          <div className="w-1 sm:h-80 h-40 golden-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, my <br /> name's <span className="text-[#EFBF04]">Olha</span>
          </h1>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
