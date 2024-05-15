import React from 'react';
import './SkillsSection.css';
import SkillsCard from './SkillsCard';

const skillsData = [
  { name: 'React', image: 'react.png' },
  { name: 'Redux', image: 'redux.png' },
  { name: 'Vanilla JS', image: 'van.png' },
  { name: 'scss', image: 'scss.png' },
  { name: 'typescript', image: 'type.png' },


];

const SkillsSection = () => {
  return (
    <section id='skills'>
    <div className="skills-section">
        
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map(skill => (
          <SkillsCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
   </section>
  );
};

export default SkillsSection;