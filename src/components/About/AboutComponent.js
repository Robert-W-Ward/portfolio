import React from "react";
import "./AboutComponentStyles.scss";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          sapien vel tellus gravida finibus. Fusce sagittis, lorem vitae
          volutpat dignissim, mauris nunc accumsan lorem, sit amet efficitur
          diam mi in turpis.
        </p>
      </div>
    </section>
  );
};

export default About;
