import React from 'react';
import './SkillsCard.scss';

interface Skill {
  name: string;
  image: string;
}

interface SkillsCardProps {
  skill: Skill;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skill }) => {
  return (
    <div className="skills-card">
      <img src={skill.image} alt={skill.name} />
      <h3>{skill.name}</h3>
    </div>
  );
};

export default SkillsCard;
