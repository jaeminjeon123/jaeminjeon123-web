import React from 'react';
import './Header.css';

const SkillsHeader = () => {
  return (
    <div className="skills-header">
      <h2>활용능력</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>HTML</h3>
          <ul>
            <li>HTML 5, XHTML 마크업</li>
            <li>웹 표준 </li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>CSS</h3>
          <ul>
            <li>CSS 3</li>
            <li>반응형 웹 (Media Query)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>JavaScript</h3>
          <ul>
            <li>바닐라 자바스크립트</li>
            <li>ES 6 활용</li>
            <li>React 활용</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default SkillsHeader;
