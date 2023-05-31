import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCardComponent.js";
import './ExperiencesComponentStyles.scss'

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "NHC Distributors",
            description: "Full-stack development with ASP.net. Desktop App development with .NET framework, WPF, and C#",
            dates: "06/2022 - present",
            link: "https://nhcdist.com/"
        },
        {
            title: "Data Automation Intern",
            company: "II-VI Inc.",
            description: "Data processing automation and analysis using Numpy, Pandas, MatplotLib, and OCR libraries for wafer identification and recycling",
            dates: "05/2021 - 08/2023",
            link: "https://ii-vi.com/",
            fallbacklink: "https://www.coherent.com/"
        },
    ];

    return (
        <section className="experiences-section" id="experience">
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
