import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
  return (
    <main>
      <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
        <Introduction />
        <Experience />
        <Skills />
        <Education />
        <Projects />
      </div>
      <Footer />
    </main>
  );
};

export default Main;
