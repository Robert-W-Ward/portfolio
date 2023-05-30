import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCardComponent.js";
import './ExperiencesComponentStyles.scss'

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Company Inc.",
            description: "Lorem ipsum dore",
            dates: "yadda - yadda"
        },
        {
            title: "Full-stack developer",
            company: "II-VI Inc.",
            description: "Ullamco culpa consectetur dolore consequat dolore laboris nostrud eiusmod duis irure ut qui consectetur ea.",
            dates: "yadda - yadda"
        },
        {
            title:"Cloud Engineer",
            company:"Microsoft",
            description:"Irure duis ipsum eu nulla ex enim aute et nulla irure fugiat commodo ex ex.",
            dates: "1980 - 2013"
        }
    ];

    return (
        <section className="experiences-section">
            <div className="experiences-container">
                <h2 className="section-title">Work Experience</h2>
                <div className="experiences-row">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
