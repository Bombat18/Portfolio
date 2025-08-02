import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import project1 from '../assets/images/projects/ecom.png';
import project2 from '../assets/images/projects/resume.png';

const Project = () => {
  useEffect(() => {
    const srtop = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true,
    });

    srtop.reveal('.work .box', { interval: 200 });
  }, []); // Empty dependency array to run only once after mount

  return (
    <div>
      {/* work project section starts */}
      <section className="work" id="work">
        <h2 className="heading"><i className="fas fa-laptop-code" /> Projects <span>Made</span></h2>

        <div className="flex flex-wrap sm:flex-nowrap gap-6 justify-center">

          <div className="box-container">
            <div className="box tilt">
              <img draggable="false" src={project1} alt="Ecommerce Website" />
              <div className="content">
                <div className="tag">
                  <h3>Ecommerce Website</h3>
                </div>
                <div className="desc">
                  <p>This is our store. No need for long intros—just scroll down and start shopping. Everything you need is right here!</p>
                  <div className="btns">
                    <a href="https://flipzon1.netlify.app/" className="btn" target="_blank" rel="noreferrer"><i className="fas fa-eye" /> View</a>
                    <a href="https://github.com/Bombat18/FlipZon" className="btn" target="_blank" rel="noreferrer">Code <i className="fas fa-code" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box-container">
            <div className="box tilt">
              <img draggable="false" src={project2} alt="Resume Builder" />
              <div className="content">
                <div className="tag">
                  <h3>Resume Building Website</h3>
                </div>
                <div className="desc">
                  <p>Welcome to your resume builder. No long instructions—just scroll down and start creating. Everything you need is right here!</p>
                  <div className="btns">
                    <a href="https://main--rusumebuilder.netlify.app/" className="btn" target="_blank" rel="noreferrer"><i className="fas fa-eye" /> View</a>
                    <a href="https://github.com/Bombat18/resumeBuilder" className="btn" target="_blank" rel="noreferrer">Code <i className="fas fa-code" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="viewall">
          <a href="/projects" className="btn"><span>View All</span>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Project;
