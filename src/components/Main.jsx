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
      <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
        <Introduction />
        <hr />
        <Experience />
        <hr />
        <Skills />
        <hr />
        <Education />
        <hr />
        <Projectcs />
      </div>
      <Footer />
    </main>
  );
};

export default Main;
