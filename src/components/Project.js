import React, { useState, useEffect } from 'react';
import './Project.css';

const Project = ({ id, title, description, link, image, retrospective, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleClick = (e) => {
    if (!isMobile) {
      // 컴퓨터에서는 클릭 이벤트를 무시
      e.preventDefault();
    } else {
      onClick(e);
    }
  };

  return (
    <div
      className={`project ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-details">
        <img src={image} alt={title} className="project-image" />
        <div className="project-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {(isActive || isHovered) && (
        <div className="project-retrospective">
          <p>{retrospective}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>GoTo</a>
        </div>
      )}
    </div>
  );
};

export default Project;
