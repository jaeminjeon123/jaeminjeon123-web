import React from 'react';
import './Project.css';

const Project = ({ id, title, description, link, image, retrospective, isActive, onClick }) => {
  return (
    <div className={`project ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="project-details">
        <img src={image} alt={title} className="project-image" />
        <div className="project-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {isActive && (
        <div className="project-retrospective">
          <p>{retrospective}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">GoTo</a>
        </div>
      )}
    </div>
  );
};

export default Project;