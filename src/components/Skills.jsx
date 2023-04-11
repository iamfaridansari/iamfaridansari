import React, { useEffect, useRef } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const skills = useRef([]);
  skills.current = [];
  const addSkills = (item) => {
    if (item && !skills.current.includes(item)) {
      skills.current.push(item);
    }
  };
  //
  useEffect(() => {
    const skillsTimeline = gsap.timeline();
    skills.current.forEach((item) => {
      skillsTimeline.fromTo(
        item,
        {
          transform: "scale(0)",
        },
        {
          transform: "scale(1)",
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: "#skills",
            start: "top 50%",
            end: "top 50%",
            scrub: 1,
            toggleActions: "restart none none reverse",
          },
        }
      );
    });
  }, []);
  return (
    <div className="pad10" id="skills">
      <h1 className="mb-4">Skills</h1>
      <div className="skills">
        <div className="html dropshadow" ref={addSkills}>
          <FaHtml5 />
        </div>
        <div className="css dropshadow" ref={addSkills}>
          <FaCss3 />
        </div>
        <div className="sass dropshadow" ref={addSkills}>
          <FaSass />
        </div>
        <div className="bootstrap dropshadow" ref={addSkills}>
          <FaBootstrap />
        </div>
        <div className="javascript dropshadow" ref={addSkills}>
          <FaJsSquare />
        </div>
        <div className="react dropshadow" ref={addSkills}>
          <FaReact />
        </div>
        <div className="node dropshadow" ref={addSkills}>
          <FaNode />
        </div>
        <div className="express dropshadow" ref={addSkills}>
          <SiExpress />
        </div>
        <div className="mongodb dropshadow" ref={addSkills}>
          <SiMongodb />
        </div>
        <div className="git dropshadow" ref={addSkills}>
          <FaGitAlt />
        </div>
        <div className="github dropshadow" ref={addSkills}>
          <FaGithub />
        </div>
        <div className="postman dropshadow" ref={addSkills}>
          <SiPostman />
        </div>
      </div>
    </div>
  );
};

export default Skills;
