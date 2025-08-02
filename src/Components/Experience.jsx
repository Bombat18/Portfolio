import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Experience = () => {
  useEffect(() => {
    const srtop = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });

    srtop.reveal(".experience .timeline", { delay: 300 });
    srtop.reveal(".experience .timeline .container", { interval: 300 });
  }, []); // run only once after mount

  return (
    <div>
      <section className="experience" id="experience">
        <h2 className="heading">
          <i className="fas fa-briefcase" /> Experience
        </h2>

        <div className="timeline">
          {/* Wayindia Internship */}
          <div className="container left">
            <div className="content">
              <div className="tag">
                <h2>Wayindia Software Solution Pvt. Ltd.</h2>
              </div>
              <div className="desc">
                <h3>Frontend Developer Intern</h3>
                <p>Feb 2024 – Jun 2024</p>
                <ul>
                  <li>Developed responsive UI using React and TailwindCSS.</li>
                  <li>Integrated REST APIs and handled state management efficiently.</li>
                  <li>Built reusable UI components and maintained design consistency.</li>
                  <li>Participated in Agile standups and code reviews.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Self Implementation Project */}
          <div className="container right">
            <div className="content">
              <div className="tag">
                <h2>Self Implementation</h2>
              </div>
              <div className="desc">
                <h3>Full Stack Developer</h3>
                <p>Apr 2021 – Apr 2021</p>
                <ul>
                  <li>Built full-stack projects using the MERN stack.</li>
                  <li>Implemented authentication and secure routing.</li>
                  <li>Designed and deployed projects on Vercel/Netlify.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Duplicate - optional */}
          <div className="container left">
            <div className="content">
              <div className="tag">
                <h2>Self Implementation</h2>
              </div>
              <div className="desc">
                <h3>Full Stack Developer</h3>
                <p>Apr 2021 – Apr 2021</p>
                <ul>
                  <li>Built full-stack projects using the MERN stack.</li>
                  <li>Implemented authentication and secure routing.</li>
                  <li>Designed and deployed projects on Vercel/Netlify.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="morebtn">
          <a href="/experience" className="btn">
            <span>Start</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Experience;
