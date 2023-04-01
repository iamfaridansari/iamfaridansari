import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-fluid p-0">
      <div className="container p-2 text-center">
        <p>
          Copyright <FaCopyright /> Farid Ansari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
