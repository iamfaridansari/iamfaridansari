import React from "react";
import { experience } from "../data/data";

const Experience = () => {
  return (
    <div className="mt-5 pad10" id="experience">
      <h2 className="mb-4">Experience</h2>
      {experience.reverse().map((item, index) => {
        return (
          <div
            className={index === experience.length - 1 ? "" : "mb-4"}
            key={index}
          >
            <p>{item.company_name}</p>
            <p className="text-secondary">{item.designation}</p>
            <p className="text-secondary">
              {item.start} - {item.end}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
