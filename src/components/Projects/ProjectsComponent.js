import React from "react";
import "./ProjectsComponentStyles.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCardComponent.js";
import DevilImage from '../../assets/images/devilf.png'
import Carousel from "../../components/Carousel/CarouselComponent.js";



const Project = () => {
  const slides = [
    <ProjectCard
      title="Project 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      imageUrl={DevilImage}
    />,
    <ProjectCard
      title="Project 2"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      imageUrl=""
    />,
    <ProjectCard
      title="Project 3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      imageUrl='https://placehold.co/512x512'
    />
  ]
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <Carousel slides={slides}/>
      </div>
    </section>
  );
};
export default Project;
