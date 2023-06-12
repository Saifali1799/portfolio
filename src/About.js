import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2 className="about-heading">About Me</h2>
      <details className="about-details">
        <summary className="about-summary">More Details</summary>
        <p className="about-description">
          I am a software prodigy with a BBA background, driven by a passion for technology and a deep understanding of business principles. Combining my skills in software development and strategic thinking, I am committed to revolutionizing the industry with innovative solutions that bridge the gap between technology and business, and drive growth and success for organizations.
        </p>
      </details>
    </div>
  );
};

export default About;

