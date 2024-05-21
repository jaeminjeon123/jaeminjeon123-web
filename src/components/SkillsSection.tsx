import React from 'react';
import './SkillsSection.css';
import SkillsCard from './SkillsCard.tsx';

interface Skill {
  name: string;
  image: string;
}

const skillsData: Skill[] = [
  { name: '', image: 'react.png' },
  { name: '', image: 'redux.png' },
  { name: '', image: 'javascript.png' },
  { name: '', image: 'scss.png' },
  { name: '', image: 'type.png' },
  { name: '', image: 'node.png' },
];

const SkillsSection: React.FC = () => {
  return (
    <section id='skills'>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
