import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div name="skill" className='skills-container'>
      <h2 className='skills-heading'>Skills</h2>
      <div className='skills-list'>
        <div className='skill'>
          <i className='fab fa-html5'></i>
          <span>HTML</span>
          <div className='skill-bar'>
            <div className='skill-level html'></div>
          </div>
        </div>
        <div className='skill'>
          <i className='fab fa-css3'></i>
          <span>CSS</span>
          <div className='skill-bar'>
            <div className='skill-level css'></div>
          </div>
        </div>
        <div className='skill'>
          <i className='fab fa-js'></i>
          <span>JavaScript</span>
          <div className='skill-bar'>
            <div className='skill-level js'></div>
          </div>
        </div>
        <div className='skill'>
          <i className='fab fa-react'></i>
          <span>React</span>
          <div className='skill-bar'>
            <div className='skill-level react'></div>
          </div>
        </div>
        {/* Add more skills */}
      </div>
    </div>
  );
};

export default Skills;
