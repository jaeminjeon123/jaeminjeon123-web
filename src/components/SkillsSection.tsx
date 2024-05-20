import React from 'react';
import './SkillsSection.css';
import SkillsCard from './SkillsCard';

interface Skill {
  name: string;
  image: string;
}

const skillsData: Skill[] = [
  { name: 'React', image: 'react.png' },
  { name: 'Redux', image: 'redux.png' },
  { name: 'Vanilla JS', image: 'van.png' },
  { name: 'SCSS', image: 'scss.png' },
  { name: 'TypeScript', image: 'type.png' },
  { name: 'Node.js', image: 'node.png' },
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
