import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  let heading1 = document.querySelectorAll("main h1");
  let heading2 = document.querySelectorAll("main h2");
  let paragraph = document.querySelectorAll("main p");
  let arrows = document.querySelectorAll(".invert");
  let project = document.querySelectorAll(".project");
  let button = document.querySelectorAll(".button");
  const toggleTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme) {
      document.body.style.background = "#000";
      heading1.forEach((item) => {
        item.style.color = "#fff";
      });
      heading2.forEach((item) => {
        item.style.color = "#fff";
      });
      paragraph.forEach((item) => {
        item.style.color = "#fff";
      });
      arrows.forEach((item) => {
        item.style.filter = "invert(1)";
      });
      project.forEach((item) => {
        item.classList.add("active");
      });
      button.forEach((item) => {
        item.classList.add("active");
      });
    } else {
      document.body.style.background = "#fff";
      heading1.forEach((item) => {
        item.style.color = "#000";
      });
      heading2.forEach((item) => {
        item.style.color = "#000";
      });
      paragraph.forEach((item) => {
        item.style.color = "#000";
      });
      arrows.forEach((item) => {
        item.style.filter = "none";
      });
      project.forEach((item) => {
        item.classList.remove("active");
      });
      button.forEach((item) => {
        item.classList.remove("active");
      });
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
