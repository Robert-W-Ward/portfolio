import React from "react";
import "./ProjectsComponentStyles.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCardComponent.js";
import PortfolioLogoImage from '../../assets/images/robert_ina_box.png'
import TestImage from '../../assets/images/test.png'
import PuzzleImage from '../../assets/images/15-puzzle-solvable.svg.png'
import Carousel from "../../components/Carousel/CarouselComponent.js";



const Project = () => {
  const slides = [
    <ProjectCard
      title="This very website!"
      description="This website was made me to showcase the projects I'm most proud of. It is a single page web app written using React.js"
      imageUrl={PortfolioLogoImage}
      url={"https://github.com/Robert-W-Ward/portfolio"}
    />,
    <ProjectCard
      title="Iterative Deepening A*"
      description="Implementation and Analysis of the Iterative Deepening A* pathfinding algorithm for my AI class"
      imageUrl={PuzzleImage}
      url={"https://github.com/Robert-W-Ward/IDAStarAnalysis"}
    />,
    // <ProjectCard
    //   title="Project 3"
    //   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    //   imageUrl='https://placehold.co/512x512'
    // />
  ]
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <Carousel slides={slides} />
      </div>
    </section>
  );
};
export default Project;
