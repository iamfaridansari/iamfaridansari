import React from "react";
import fashiontv from "../assets/image/fashiontv.png";
import mcbird from "../assets/image/mcbird.png";
import path from "../assets/image/path.png";

const Experience = () => {
  return (
    <div className="mt-5 pad10" id="experience">
      <h2 className="mb-4">Experience</h2>
      <div className="route-grid">
        <div className="step1">
          <a
            href="https://fashiontv.in/"
            target="_blank"
            className="companylogo dropshadow"
          >
            <img src={fashiontv} alt="" />
          </a>
          <div className="mt-2">
            <p>FashionTV</p>
            <p className="text-secondary">Web developer</p>
            <p className="text-secondary">May 2021 - May 2022</p>
          </div>
        </div>
        <div className="path1 dropshadow invert">
          <img src={path} alt="" />
        </div>
        <div className="step2">
          <a
            href="https://mcbirdtechnologies.com/"
            target="_blank"
            className="companylogo dropshadow"
          >
            <img src={mcbird} alt="" />
          </a>
          <div>
            <p>McBird Technologies</p>
            <p className="text-secondary">Software Engineer</p>
            <p className="text-secondary">June 2022 - April 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
