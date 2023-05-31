import React from 'react';
import './ExperienceCardComponentStyles.scss'
const ExperienceCard = ({title,company,description,dates,link,fallbackLink}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else if (fallbackLink) {
      window.open(fallbackLink, '_blank');
    }
  };
  return (
    <div className="experience-card" onClick={handleClick}>
      <div className="experience-card-top">
        <h2>{company}</h2>
        <h4>{title}</h4>
        <h5>{dates}</h5>
      </div>
      <div className='experience-card-bottom'>
      <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
