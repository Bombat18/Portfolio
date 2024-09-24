import React, { useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Nav = () => {

  useEffect(() => {
    // Toggle Menu
    const menuIcon = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    const toggleMenu = () => {
      menuIcon.classList.toggle('fa-times');
      navbar.classList.toggle('nav-toggle');
    };

    menuIcon.addEventListener('click', toggleMenu);

    // Scroll and Load Events
    const handleScroll = () => {
      menuIcon.classList.remove('fa-times');
      navbar.classList.remove('nav-toggle');

      const scrollTop = document.querySelector('#scroll-top');
      if (window.scrollY > 60) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }

      // Scroll Spy
      document.querySelectorAll('section').forEach((section) => {
        let height = section.offsetHeight;
        let offset = section.offsetTop - 200;
        let top = window.scrollY;
        let id = section.getAttribute('id');

        if (top > offset && top < offset + height) {
          document.querySelectorAll('.navbar ul li a').forEach((link) => {
            link.classList.remove('active');
          });
          document.querySelector(`.navbar a[href="#${id}"]`)?.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    // Clean up event listeners on component unmount
    return () => {
      menuIcon.removeEventListener('click', toggleMenu);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <a href="/" className="logo">
          <i className="fab fa-node-js" /> Ramya
        </a>
        <div id="menu" className="fas fa-bars" />
        <nav className="navbar">
          <ul>
            <li>
              <a className="active" href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Scroll to Top Button */}
      <a href="#" id="scroll-top" className="scroll-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default Nav;
