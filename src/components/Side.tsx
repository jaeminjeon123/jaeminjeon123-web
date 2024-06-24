import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Project.scss';

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  links: { url: string; label: string }[];
  image: string;
  retrospective: string;
  isActive: boolean;
  onClick: () => void;
}

const Side: React.FC<ProjectProps> = ({ id, title, description, links, image, retrospective, isActive, onClick }) => {
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

  const handleClick = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
    } else {
      onClick();
    }
  };

  const renderIcon = (url: string) => {
    if (url.includes('github.com')) {
      return <FontAwesomeIcon icon={faGithub} className="icon" />;
    }
    return <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />;
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
          <div className="links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {renderIcon(link.url)} {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Side;
