import React from "react";
import { education } from "../data/data";

const Education = () => {
  return (
    <div className="mt-5 pad10" id="education">
      <h2 className="mb-4">Education</h2>
      {education.map((item, index) => {
        return (
          <div
            className={index === education.length - 1 ? "" : "mb-4"}
            key={index}
          >
            <p>{item.institution_name}</p>
            <p className="text-secondary">{item.board}</p>
            <div className="d-flex align-items-center justify-content-start gap-4">
              <p className="text-secondary">{item.passing_year}</p>
              <p>{item.result}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
