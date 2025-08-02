import React from 'react'
import { motion } from 'framer-motion'

const boxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
}

const Footer = () => {
  return (
    <motion.section
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="box-container">
        <motion.div className="box" custom={1} variants={boxVariants}>
          <h3>Ramya's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with me over socials. <br /><br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </motion.div>

        <motion.div className="box" custom={2} variants={boxVariants}>
          <h3>quick links</h3>
          {[
            { href: "#home", label: "home" },
            { href: "#about", label: "about" },
            { href: "#skills", label: "skills" },
            { href: "#education", label: "education" },
            { href: "#work", label: "work" },
            { href: "#experience", label: "experience" }
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="footer-link"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.3 }}
            >
              <i className="fas fa-chevron-circle-right" /> {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="box" custom={3} variants={boxVariants}>
          <h3>contact info</h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <i className="fas fa-phone" /> +91 9178618677
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <i className="fas fa-envelope" /> ramyaranjan78@gmail.com
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <i className="fas fa-map-marked-alt" /> Odisha, India-756125
          </motion.p>

          <div className="share">
            {[
              { href: "https://www.linkedin.com/in/ramyaranjan-/", icon: "fab fa-linkedin" },
              { href: "https://github.com/bombat18", icon: "fab fa-github" },
              { href: "mailto:ramyaranjan78@gmail.com", icon: "fas fa-envelope" },
              { href: "https://twitter.com/RAMYARANJANSET1", icon: "fab fa-twitter" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                className={social.icon}
                target="_blank"
                aria-label="Social Icon"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * (i + 1), type: 'spring' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Footer
