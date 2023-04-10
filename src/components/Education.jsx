import React from "react";
import { education } from "../data/data";
import fashiontv from "../assets/image/fashiontv.png";
import saboo_siddik from "../assets/image/saboo_siddik.png";
import lala_lajpat_rai from "../assets/image/lala_lajpat_rai.png";
import path from "../assets/image/path.png";

const Education = () => {
  return (
    <div className="mt-5 pad10" id="education">
      <h2 className="mb-4">Education</h2>
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
            <p>St Ignatius' high school</p>
            <p className="text-secondary">Maharashtra state board</p>
            <p>
              <span className="text-secondary">March 2015</span> - 74.80%
            </p>
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
            <img src={saboo_siddik} alt="" />
          </a>
          <div className="mt-2">
            <p>M.H. Saboo siddik college</p>
            <p className="text-secondary">Maharashtra state board</p>
            <p>
              <span className="text-secondary">March 2017</span> - 62.15%
            </p>
          </div>
        </div>
        <div className="path2 dropshadow invert">
          <img src={path} alt="" />
        </div>
        <div className="step3">
          <a href="/" target="_blank" className="companylogo dropshadow">
            <img src={lala_lajpat_rai} alt="" />
          </a>
          <div className="mt-2">
            <p>Lala Lajpat Rai college</p>
            <p className="text-secondary">Mumbai university</p>
            <p>
              <span className="text-secondary">March 2021</span> - 7.97 CGPA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
