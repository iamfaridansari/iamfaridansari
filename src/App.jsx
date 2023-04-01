import React from "react";
//
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Aside from "./components/Aside";
import Main from "./components/Main";

const App = () => {
  return (
    <section className="body">
      <Aside />
      <Main />
    </section>
  );
};

export default App;
