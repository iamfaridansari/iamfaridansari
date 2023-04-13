import React from "react";
import resume from "../assets/resume/Farid Ansari resume.pdf";

const Desciption = () => {
  return (
    <div className="mb-5">
      <p className="mb-4">
        Nearly two years of experience in developing user interface, frontend of
        web applications and websites. I have successfully contributed my part
        in the development of more than 15 projects till now in my professional
        career .<br />
        <br />
        Seeing the MERN stack development growing so fast, I also want to make
        this technology as a part of my career.
      </p>
      <a href={resume} className="button" download="Farid Ansari Resume">
        Download resume
      </a>
    </div>
  );
};

export default Desciption;
