import React from "react";
import "./ProjectsComponentStyles.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCardComponent.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <Carousel
          showStatus={false}
          showThumbs={true}
          emulateTouch={true}
          infiniteLoop={true}
          selectedItem={0} // Change the value to set the default focused project
        >
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProjectCard
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ProjectCard
            title="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Carousel>
      </div>
    </section>
  );
};
export default Project;
