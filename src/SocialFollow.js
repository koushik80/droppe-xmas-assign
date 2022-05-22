import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import './App.css';



const SocialFollow = () => {
  return (
    <div className="social-container">
      <h3>Get-in-touch</h3>
        <a href="https://www.youtube.com/" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="www.github.com" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="https://www.skype.com/en/" className="skype social">
          <FontAwesomeIcon icon={faSkype} size="2x" />
      </a>
      <div className="power-text"><p>Made by Koushik @ devHuß</p>
      </div>
    </div>
  );
}

export default SocialFollow