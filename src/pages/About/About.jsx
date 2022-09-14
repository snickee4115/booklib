import React from 'react'
import './About.css';
import aboutImg from '../../images/about-img.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Atque molestias amet beatae provident eius
              aspernatur rem molestiae hic error, dicta impedit commodi,
              ex nemo praesentium, similique placeat ipsa laborum deleniti.
            </p>
            <p className="fs-17">Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Atque molestias amet beatae provident eius
              aspernatur rem molestiae hic error, dicta impedit commodi,
              ex nemo praesentium, similique placeat ipsa laborum deleniti.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About