import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'; // Make sure this is installed via npm if not already
import profile2 from '../assets/images/profile2.jpg';
import Card from './Card';

const AboutUs = () => {
    useEffect(() => {
        // Initialize ScrollReveal with desired configuration
        const srtop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1000,
            reset: true,
        });

        // Apply ScrollReveal animations to specified elements
        srtop.reveal('.about .content h3', { delay: 200 });
        srtop.reveal('.about .content .tag', { delay: 200 });
        srtop.reveal('.about .content p', { delay: 200 });
        srtop.reveal('.about .content .box-container', { delay: 200 });
        srtop.reveal('.about .content .resumebtn', { delay: 200 });

        // Cleanup function for when the component unmounts
        return () => {
            srtop.destroy();
        };
    }, []);

    return (
        <section className="about" id="about">
            <h2 className="heading">
                <i className="fas fa-user-alt" /> About <span>Me</span>
            </h2>
            <div className="row">
                <div className="image">
                    <img
                        draggable="false"
                        className="tilt"
                        src={profile2}
                        alt="Profile"/>
                </div>
                <div className="content">
                    <h3>I'm Ramya</h3>
                    <span className="tag">Full Stack Developer</span>
                    <p>
                        I am a Full-Stack developer based in Odisha, India. I am an
                        Information Technology undergraduate from NIT. I am very
                        passionate about improving my coding skills & developing
                        applications & websites. I build WebApps and Websites using
                        the MERN Stack. Working for myself to improve my skills. Love
                        to build Full-Stack clones.
                    </p>
                    <div className="box-container">
                        {/* Uncomment and customize these details if needed */}
                        {/* <div className="box">
                            <p><span> age: </span> 20</p>
                            <p><span> phone : </span> +91 XXX-XXX-XXXX</p>
                        </div> */}
                        <div className="box">
                            <p>
                                <span> email : </span> ramyaranjan78@gmail.com
                            </p>
                            <p>
                                <span> place : </span> Odisha, India - 756125
                            </p>
                        </div>
                    </div>
                    <div className="resumebtn">
                        <a
                            href="https://drive.google.com/file/d/1rZiXl562q7aVyk1kJ2nO85YBAq8ixTiw/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            <span>Resume</span>
                            <i className="fas fa-chevron-right" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
