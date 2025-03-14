import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Fale Conosco</h1>
      <p>Email: <a href="mailto:Angelo.sonic@gmail.com">Angelo.sonic@gmail.com</a></p>
      <p>Contato: <a href="tel:+5595981234508">+55(95)98123-4508</a></p>
      <p>Github: <a href="https://github.com/Angelox99" target="_blank" rel="noopener noreferrer">https://github.com/Angelox99</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/angelo-ferro-t-i/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/angelo-ferro-t-i/</a></p>
    </div>
  );
};

export default ContactUs;