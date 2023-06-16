import React from 'react';
import gitImg from '../img/github-mark-white.png'
import linkImg from '../img/LI-Logo.png'

function Footer() {  
  return (
    <div className="block footer" id="contactInfo">
        <ul>
            <li><a href="https://github.com/J05H94" className='social-icon' target='blank'><img src={gitImg} alt ='GitHub' /></a></li>
            <li><a href="https://www.linkedin.com/in/joshua-dawkins-21243a247/" className='social-icon' target='blank'><img src={linkImg} alt ='LinkedIn' /></a></li>
        </ul>
    </div>
  );
}

export default Footer;
