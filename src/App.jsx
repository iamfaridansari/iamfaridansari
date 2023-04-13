import React from "react";
//
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Aside from "./components/Aside";
import Main from "./components/Main";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <section className="body">
        <Aside />
        <Main />
      </section>
    </AppContextProvider>
  );
};

export default App;
