import React from 'react';
import './Contact.css';

const ContactSection = () => {
  const name = "Your Name";
  const linkedinURL = "https://www.linkedin.com/in/your-profile";
  const whatsappNumber = "+1234567890";

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
