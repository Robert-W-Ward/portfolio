import React from "react";
import "./HeaderComponentStyles.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#Skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
