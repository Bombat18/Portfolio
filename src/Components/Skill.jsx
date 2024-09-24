
import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const Skill = () => {
  const [skills, setSkills] = useState([]); // State to hold skills data
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Function to fetch skills data from ALLData/skills.json
  const fetchData = async () => {
    try {
      const response = await fetch('/ALLData/skills.json');
      console.log(response);
       // Adjust the path according to your project structure
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSkills(data); // Set the fetched data to state
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData(); // Fetch skills data when the component mounts
  }, []);


  const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

  return (
    <div>
      <section className="skills" id="skills">
        <h2 className="heading">
          <i className="fas fa-laptop-code" /> Skills &amp; <span>Abilities</span>
        </h2>
        <div className="container">
          <div className="row" id="skillsContainer">
            {loading ? ( // Display a loading message while data is being fetched
              <p>Loading skills...</p>
            ) : (
              skills.map((skill, index) => (
                <div className="bar" key={index}>
                  <div className="info">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
