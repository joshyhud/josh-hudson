import React from "react";
import "../assets/css/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h2>
        <a href="/">Josh Hudson</a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
