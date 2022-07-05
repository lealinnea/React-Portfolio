import React from 'react';
import '../styles/Footer.css';
import Github from "../img/icons/github.png";
import Linkedin from "../img/icons/linkedin.png";
import Instagram from "../img/icons/instagram.png";

function Footer() {
    return (
      <footer className="footer">
        <a href="https://github.com/lealinnea"> <img  className="icons" src={Github} alt="Github" /></a>
       <a href="https://www.linkedin.com/in/lea-guerrero-020516174/">  <img  className="icons" src={Linkedin} alt="Linkedin" /></a>
      <a href="https://www.instagram.com/lil_miss_lea_/?hl=en" > <img className="icons" src={Instagram} alt="Instagram" /></a>
      </footer>
    );
  }

export default Footer;
