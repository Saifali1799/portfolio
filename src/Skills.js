import React from 'react';
import './Skills.css';

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li className="skill-item">
          <div className="skill-name">HTML</div>
          <div className="skill-bar">
            <div className="skill-progress html"></div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-name">CSS</div>
          <div className="skill-bar">
            <div className="skill-progress css"></div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-name">JavaScript</div>
          <div className="skill-bar">
            <div className="skill-progress javascript"></div>
          </div>
        </li>
        <li className="skill-item">
          <div className="skill-name">React</div>
          <div className="skill-bar">
            <div className="skill-progress react"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SkillsSection;
