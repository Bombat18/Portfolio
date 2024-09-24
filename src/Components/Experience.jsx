import React from "react";
import ScrollReveal from "scrollreveal";

const Experience = () => {
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });
  srtop.reveal(".experience .timeline", { delay: 300 });
  srtop.reveal(".experience .timeline .container", { interval: 300 });

  return (
    <div>
      <section className="experience" id="experience">
        <h2 className="heading">
          <i className="fas fa-briefcase" /> Experience{" "}
        </h2>
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <div className="tag">
                <h2>Self Implementation</h2>
              </div>
              <div className="desc">
                <h3>Full Stack Developer | Self implementation </h3>
                <p>April 2021 - April 2021</p>
              </div>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <div className="tag">
                <h2>Wayindia Software Solution Pvt. Ltd.</h2>
              </div>
              <div className="desc">
                <h3>Frontend DEvloper &amp; | Internship</h3>
                <p>Feb 2024 - Jun 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="morebtn">
          <a href="/experience" className="btn">
            <span>Start</span>
            {/* <i className="fas fa-arrow-right" /> */}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Experience;
