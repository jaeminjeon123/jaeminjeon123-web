import React from 'react';
import './SkillsSection.scss';
import SkillsCard from './SkillsCard.tsx';

interface Skill {
  name: string;
  image: string;
}

const skillsData: Skill[] = [
  { name: '',  image: `${process.env.PUBLIC_URL}/react.png`, },

  { name: '',  image: `${process.env.PUBLIC_URL}/redux.png`, },
 
  { name: '',  image: `${process.env.PUBLIC_URL}/javascript.png`, },
  { name: '',  image: `${process.env.PUBLIC_URL}/scss.png`, },
  { name: '',  image: `${process.env.PUBLIC_URL}/type.png`, },
  { name: '',  image: `${process.env.PUBLIC_URL}/query.png`, },
 
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