import React from 'react';
import './Project.css';

const Project = ({ title, description, features = [], link, image }) => {
  return (
    <div className="project">
      <div className="project-details">
        <img src={image} alt={title} className="project-image" />
        <div className="project-text">
          <h2>{title}</h2>
          <p>{description}</p>
          {features.length > 0 && (
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          <a href={link} target="_blank" rel="noopener noreferrer">GoTo</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
