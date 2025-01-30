import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // Ensure ScrollReveal is installed
import collage from '../assets/images/educat/college.png'
import school from '../assets/images/educat/school.jpg'

const Education = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const srtop = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true,
    });
    srtop.reveal('.education .box', { interval: 200 });

    // Cleanup function to destroy ScrollReveal animations on component unmount
    return () => {
      srtop.destroy();
    };
  }, []);

  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap" /> My <span>Education</span>
      </h1>
      <p className="text-center quote">
        Education is not the learning of facts, but the training of the mind to think.
      </p>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src={collage}
              alt="College"
            />
          </div>
          <div className="content">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>Nalanda Institute Of Technology</p>
            <h4>2020-2024 | Completed</h4>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src={school}
              alt="School"
            />
          </div>
          <div className="content">
            <h3>HSC Science | Informatics Practices</h3>
            <p>Shri L. G. Haria Multipurpose School | CBSE</p>
            <h4>2018-2020 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
