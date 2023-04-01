import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Projectcs from "./Projectcs";
import Skills from "./Skills";

const Main = () => {
  return (
    <main>
      <Introduction />
      <Experience />
      <Skills />
      <Education />
      <Projectcs />
      <Footer />
    </main>
  );
};

export default Main;
