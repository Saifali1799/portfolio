import React from 'react';
import './Contact.css';

const ContactSection = () => {
  const name = "Saif Ali";
  const linkedinURL = "https://www.linkedin.com/in/saif-ali-tughalaq/";
  const whatsappNumber = "+96894629998";

  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <div className="contact-details">
        <div className="contact-name">{name}</div>
        <div className="contact-links">
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
