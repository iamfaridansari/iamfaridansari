import React from "react";
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

const Skills = () => {
  return (
    <div className="mt-5 pad10" id="skills">
      <h2 className="mb-4">Skills</h2>
      <div className="skills">
        <div className="html dropshadow">
          <FaHtml5 />
        </div>
        <div className="css dropshadow">
          <FaCss3 />
        </div>
        <div className="sass dropshadow">
          <FaSass />
        </div>
        <div className="bootstrap dropshadow">
          <FaBootstrap />
        </div>
        <div className="javascript dropshadow">
          <FaJsSquare />
        </div>
        <div className="react dropshadow">
          <FaReact />
        </div>
        <div className="node dropshadow">
          <FaNode />
        </div>
        <div className="express dropshadow">
          <SiExpress />
        </div>
        <div className="mongodb dropshadow">
          <SiMongodb />
        </div>
        <div className="git dropshadow">
          <FaGitAlt />
        </div>
        <div className="github dropshadow">
          <FaGithub />
        </div>
        <div className="postman dropshadow">
          <SiPostman />
        </div>
      </div>
    </div>
  );
};

export default Skills;
