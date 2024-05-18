import React from 'react';
import './Project.css';

const Project = ({ id,title, description, link, image, retrospective, isActive, onClick }) => {
  const handleRetrospectiveClick = (event) => {
    event.stopPropagation();
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`project ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="project-details">
        <img src={image} alt={title} className="project-image" />
        <div className="project-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="project-retrospective" onClick={handleRetrospectiveClick}>
        <p>{retrospective}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" onClick={handleButtonClick}>GoTo</a>
      </div>
    </div>
  );
};

export default Project;