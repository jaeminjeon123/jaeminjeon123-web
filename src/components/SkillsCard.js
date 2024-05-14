import React from 'react';
import './SkillsCard.css';

const SkillsCard = ({ skill }) => {
  return (
    <div className="skills-card">
      <img src={skill.image} alt={skill.name} />
      <h3>{skill.name}</h3>
    </div>
  );
};

export default SkillsCard;