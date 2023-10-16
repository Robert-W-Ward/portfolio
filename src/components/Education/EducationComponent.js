import React from 'react';
import './EducationComponentStyles.scss';
import MSstateLogo from '../../assets/images/msstate_logo.svg';
import ECCCLogo from '../../assets/images/eccc_logo.png';

const Education = () => {
  const educationData = [
    {
      institution: 'Mississippi State University',
      degree: 'Master\'s of Science in Computer Science',
      graduationDate: 'May 2024',
      website: 'https://www.msstate.edu/',
      logo: MSstateLogo,
    },
    {
      institution: 'Mississippi State University',
      degree: 'Bachelor of Science in Computer Science',
      graduationDate: 'May 2022',
      website: 'https://www.msstate.edu/',
      logo: MSstateLogo,
    },
    {
      institution: 'East Central Community College',
      degree: 'Associate\'s Of Arts',
      graduationDate: 'May 2020',
      website: 'https://www.eccc.edu/',
      logo: ECCCLogo,
    },
  ];

  return (
    <section className="education" id="education">
      <h2>Education</h2>
      {educationData.map((educationItem, index) => (
        <div className="education-item" key={index}>
          <a
            href={educationItem.website}
            className="institution-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={educationItem.logo} alt={educationItem.institution} className="institution-logo" />
          </a>
          <p className="education-details">{educationItem.degree}</p>
          <p className="education-details">Graduated:{educationItem.graduationDate}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
