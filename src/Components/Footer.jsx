import React from 'react'

const Footer = () => {
  return (
    <div>

<section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>Ramya's Portfolio</h3>
      <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Rising 🚀. Connect with me over live chat!</p>
    </div>
    <div className="box">
      <h3>quick links</h3>
      <a href="#home"><i className="fas fa-chevron-circle-right" /> home</a>
      <a href="#about"><i className="fas fa-chevron-circle-right" /> about</a>
      <a href="#skills"><i className="fas fa-chevron-circle-right" /> skills</a>
      <a href="#education"><i className="fas fa-chevron-circle-right" /> education</a>
      <a href="#work"><i className="fas fa-chevron-circle-right" /> work</a>
      <a href="#experience"><i className="fas fa-chevron-circle-right" /> experience</a>
    </div>
    <div className="box">
      <h3>contact info</h3>
      <p> <i className="fas fa-phone" />+91 9178618677</p>
      <p> <i className="fas fa-envelope" />ramyaranjan78@gmail.com</p>
      <p> <i className="fas fa-map-marked-alt" />Odisha, India-756125</p>
      <div className="share">
        <a href="https://www.linkedin.com/in/ramyaranjan-/" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" />
        <a href="https://github.com/bombat18" className="fab fa-github" aria-label="GitHub" target="_blank" />
        <a href="mailto:ramyaranjan78@gmail.com" className="fas fa-envelope" aria-label="Mail" target="_blank" />
        <a href="https://twitter.com/RAMYARANJANSET1" className="fab fa-twitter" aria-label="Twitter" target="_blank" />
        {/* <a href="https://t.me/lifecode5" className="fab fa-telegram-plane" aria-label="Telegram" target="_blank" /> */}
      </div>
    </div>
  </div>
  {/* <h1 className="credit">Designed with <i className="fa fa-heart pulse" /> by <a href="https://www.linkedin.com/in/jigar-sable"></a></h1> */}
</section>

    </div>
  )
}

export default Footer