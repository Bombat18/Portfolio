import React, { useEffect } from "react";
import Typed from "typed.js";
import hero from "../assets/images/hero.png";
import VanillaTilt from "vanilla-tilt";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const srtop = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });

    // Apply ScrollReveal to elements
    srtop.reveal(".home .content h3", { delay: 200 });
    srtop.reveal(".home .content p", { delay: 200 });
    srtop.reveal(".home .content .btn", { delay: 200 });
    srtop.reveal(".home .image", { delay: 400 });
    srtop.reveal(".home .linkedin", { interval: 600 });
    srtop.reveal(".home .github", { interval: 800 });
    srtop.reveal(".home .twitter", { interval: 1000 });

    // Initialize Typed.js
    const typed = new Typed(".typing-text", {
      strings: [
        "frontend development",
        "backend development",
        "web designing",
        "android development",
        "web development",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    // Load Particles.js and initialize it
    const loadParticlesJS = () => {
      if (!window.particlesJS) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.async = true;
        script.onload = () => {
          window.particlesJS("particles-js", {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#000000" },
              shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
              opacity: { value: 0.5 },
              size: { value: 5, random: true },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#000000",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
              },
            },
            retina_detect: true,
          });
        };
        document.body.appendChild(script);
      } else {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#000000" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5 },
            size: { value: 5, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#000000",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
          },
          retina_detect: true,
        });
      }
    };

    loadParticlesJS();

    // Initialize VanillaTilt for 3D tilt effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

    // Cleanup function to avoid memory leaks
    return () => {
      const particlesDiv = document.getElementById("particles-js");
      if (particlesDiv) particlesDiv.innerHTML = "";
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className="home" id="home">
        <div
          id="particles-js"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        />
        <div className="content">
          <h2>
            Hi There,
            <br /> I'm Ramyaranjan <span>Sethi</span>
          </h2>
          <p>
            I am into <span className="typing-text" />
          </p>
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down" />
          </a>
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a
                  className="linkedin"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/ramyaranjan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  className="github"
                  aria-label="GitHub"
                  href="https://github.com/Bombat18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  aria-label="Twitter"
                  href="https://x.com/RAMYARANJANSET1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img draggable="false" className="tilt" src={hero} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
