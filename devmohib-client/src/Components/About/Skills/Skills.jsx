import { motion } from "framer-motion";
import { GiLaserSparks } from "react-icons/gi";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../utils/motion";

import SkillCard from "./SkillCard";
import {
  Backend_skill,
  Design,
  Frontend_skill,
  Skill_data,
} from "../../../utils/skilldata";

const Skills = () => {
  return (
    <section>
      <div className="w-full h-auto flex flex-col items-center justify-center md:mt-20">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-2 border border-borderPri opacity-[0.9]"
        >
          <GiLaserSparks className="mx-auto animate-spin-slow h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-textColor">
            Think better with React world
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl font-medium mt-[10px] text-center text-textColor mb-[15px]"
        >
          Making websites with modern Technologies
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="cursive text-xl mb-10 mt-3 text-textColor text-center"
        >
          Never miss a task, deadline or idea
        </motion.div>
      </div>

      {/* skill data is here */}

      <div
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-28"
        style={{ transform: "scale(0.9" }}>
        <div className="flex flex-row justify-around flex-wrap mt-4 md:gap-5 items-center">
          {Skill_data?.map((image, index) => (
            <SkillCard
              key={index}
              name={image.skill_name}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 md:gap-5 items-center">
          {Frontend_skill?.map((image, index) => (
            <SkillCard
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 md:gap-5 items-center">
          {Backend_skill?.map((image, index) => (
            <SkillCard
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Design.map((image, index) => (
            <SkillCard
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
