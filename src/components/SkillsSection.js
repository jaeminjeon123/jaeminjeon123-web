import React from 'react';
import './SkillsSection.css';
import SkillsCard from './SkillsCard';

const skillsData = [
  { name: 'React', image: 'spring.png' },
  { name: 'Redux', image: 'java.png' },
  { name: 'scss', image: 'redis.png' },
  { name: 'typescript', image: 'redis.png' },

];

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map(skill => (
          <SkillsCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;