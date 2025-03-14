import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='footer'>
      <ul>
        <li onClick={() => navigate('/terms-of-use')}>Termos de uso</li>
        <li onClick={() => navigate('/contact-us')}>Fale Conosco</li>
      </ul>
      <div className='footercr'>
        <p className='copyright-text'>© 2025 SIGFLIX. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;