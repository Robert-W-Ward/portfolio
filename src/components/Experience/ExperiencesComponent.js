import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCardComponent.js";
import Timeline from "../Timeline/TimelineComponent.js"
import './ExperiencesComponentStyles.scss'

const Experience = () => {
    const experiences = [
        <ExperienceCard
            title="Software Engineer"
            company="Company Inc."
            description="Lorem ipsum dore"
            dates="yadda - yadda"
        />
    ]
    return (
        <section className="experiences-section">
            <div className="experiences-container">
                <h2 className="section-title"> Experience</h2>
                <Timeline experiences={experiences}/>
            </div>
        </section>
    )
}
export default Experience