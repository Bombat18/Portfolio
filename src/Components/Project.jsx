import React from 'react'
import ScrollReveal from 'scrollreveal';

const Project = () => {


  const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });



  
  return (
    <div>

        
{/* work project section starts */}
<section className="work" id="work">
  <h2 className="heading"><i className="fas fa-laptop-code" /> Projects <span>Made</span></h2>
  <div className="box-container">
    {/* <div class="box tilt">
<img draggable="false" src="./assets/images/projects/portfolio1.PNG" alt="" />
<div class="content">
  <div class="tag">
  <h3>Portfolio Website</h3>
  </div>
  <div class="desc">
    <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
    <div class="btns">
      <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
      <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
    </div>
  </div>
</div>
    </div> */}
  </div>
  <div className="viewall">
    <a href="/projects" className="btn"><span>View All</span>
      <i className="fas fa-arrow-right" />
    </a>
  </div>
</section>

    </div>
  )
}

export default Project