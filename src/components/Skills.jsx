import React, { useEffect, useRef } from "react";
import { skills } from "../data/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const pills = useRef([]);
  pills.current = [];
  const addSkills = (skill) => {
    if (skill && !pills.current.includes(skill)) {
      pills.current.push(skill);
    }
  };
  useEffect(() => {
    pills.current.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          transform: "scale(0.5)",
        },
        {
          opacity: 1,
          transform: "scale(1)",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        }
      );
    });
  }, []);
  return (
    <div className="pad10 mt-5" id="skills">
      <h2 className="mb-4">Skills</h2>
      <div className="skills">
        {skills.map((item, index) => {
          return (
            <div
              className="gradient-background pill"
              ref={addSkills}
              key={index}
            >
              <p className="text-capitalize">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
