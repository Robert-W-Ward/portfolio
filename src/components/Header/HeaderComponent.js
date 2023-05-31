import React from "react";
import Logo from '../../assets/images/robert_ina_box.png'
import "./HeaderComponentStyles.scss";
const Header = () => {
  return (
    <header className="header">

      <nav className="nav-bar">
        <div className="logo">
          <img classname='logo-image' src={Logo} />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
