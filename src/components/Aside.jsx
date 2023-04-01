import React, { useEffect, useState, useRef } from "react";
import {
  FaBook,
  FaBriefcase,
  FaChartLine,
  FaCube,
  FaMoon,
  FaSun,
  FaUser,
} from "react-icons/fa";
import gsap from "gsap";

const Aside = () => {
  const [theme, setTheme] = useState(false);
  let heading1 = document.querySelectorAll("main h1");
  let heading2 = document.querySelectorAll("main h2");
  let paragraph = document.querySelectorAll("main p");
  const toggleTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme) {
      document.body.style.background = "#000";
      heading1.forEach((item) => {
        item.style.color = "#eee";
      });
      heading2.forEach((item) => {
        item.style.color = "#eee";
      });
      paragraph.forEach((item) => {
        item.style.color = "#eee";
      });
    } else {
      document.body.style.background = "#eee";
      heading1.forEach((item) => {
        item.style.color = "#000";
      });
      heading2.forEach((item) => {
        item.style.color = "#000";
      });
      paragraph.forEach((item) => {
        item.style.color = "#000";
      });
    }
  }, [theme]);

  //
  const links = useRef([]);
  links.current = [];
  const addLinks = (link) => {
    if (link && !links.current.includes(link)) {
      links.current.push(link);
    }
  };
  useEffect(() => {
    const timeline = gsap.timeline();
    links.current.forEach((link) => {
      timeline.fromTo(
        link,
        {
          opacity: 0,
          transform: "translateX(-50%)",
        },
        {
          opacity: 1,
          transform: "translateX(0)",
          duration: 0.5,
        }
      );
    });
  }, []);
  return (
    <aside>
      <ul>
        <li ref={addLinks}>
          <a href="#introduction">
            <FaUser />
          </a>
          <a href="#introduction" className="link-name">
            Introduction
          </a>
        </li>
        <li ref={addLinks}>
          <a href="#experience">
            <FaBriefcase />
          </a>
          <a href="#experience" className="link-name">
            Experience
          </a>
        </li>
        <li ref={addLinks}>
          <a href="#skills">
            <FaCube />
          </a>
          <a href="#skills" className="link-name">
            Skills
          </a>
        </li>
        <li ref={addLinks}>
          <a href="#education">
            <FaBook />
          </a>
          <a href="#education" className="link-name">
            Education
          </a>
        </li>
        <li ref={addLinks}>
          <a href="#projects">
            <FaChartLine />
          </a>
          <a href="#projects" className="link-name">
            Projects
          </a>
        </li>
      </ul>
      <div className="theme-toggle" onClick={toggleTheme} ref={addLinks}>
        {theme ? <FaSun /> : <FaMoon />}
      </div>
    </aside>
  );
};

export default Aside;
