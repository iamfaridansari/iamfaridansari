import React, { useEffect, useRef } from "react";
import { FaLink } from "react-icons/fa";
import { projects } from "../data/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Projectcs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const projectsList = useRef([]);
  projectsList.current = [];
  const addProjects = (item) => {
    if (item && !projectsList.current.includes(item)) {
      projectsList.current.push(item);
    }
  };
  useEffect(() => {
    projectsList.current.forEach((item) => {
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
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        }
      );
    });
  }, []);
  return (
    <div className="pad10 mb-4" id="projects">
      <h1 className="mb-4">Projects</h1>
      <div className="projects">
        {projects.map((item, index) => {
          return (
            <div
              className="project"
              key={index}
              ref={addProjects}
            >
              <p>{item.project_name}</p>
              <a href={item.link} rel="noreferrer" target="_blank">
                <FaLink />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projectcs;
