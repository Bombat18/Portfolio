import React, { useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling

const Nav = () => {

  useEffect(() => {
    const menuIcon = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    const toggleMenu = () => {
      menuIcon.classList.toggle('fa-times');
      navbar.classList.toggle('nav-toggle');
    };

    menuIcon.addEventListener('click', toggleMenu);

    const handleScroll = () => {
      menuIcon.classList.remove('fa-times');
      navbar.classList.remove('nav-toggle');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      menuIcon.removeEventListener('click', toggleMenu);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <HashLink to="#home" className="logo">
          <i className="fab fa-node-js" /> Ramya
        </HashLink>
        <div id="menu" className="fas fa-bars" />
        <nav className="navbar">
          <ul>
            <li>
              <HashLink smooth to="#home">Home</HashLink>
            </li>
            <li>
              <HashLink smooth to="#about">About</HashLink>
            </li>
            <li>
              <HashLink smooth to="#skills">Skills</HashLink>
            </li>
            <li>
              <HashLink smooth to="#education">Education</HashLink>
            </li>
            <li>
              <HashLink smooth to="#projects">Projects</HashLink>
            </li>
            <li>
              <HashLink smooth to="#experience">Experience</HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">Contact</HashLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
