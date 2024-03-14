import React from 'react';
import mission from '../images/mission.png';
import vision from '../images/vision.png';
import value from '../images/value.png'
import './styles/aboutCard.css'; 

const Card = ({ image, heading, text }) => {
  return (
    <div className="card aboutCard">
      <img className="card-icon" src={image} alt='icon'/>
      <h3 className="card-heading">{heading}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

const AboutCards = () => {
  return (
    <div className="card-container">
      <Card image={mission} heading="Our Mission" text="Our mission at FAIR ServiceX is to empower businesses with innovative digital solutions. We strive to exceed expectations, delivering high-quality, tailored services that drive growth and success. Our commitment is to our clients, helping them navigate the digital landscape and achieve their business goals." />
      <Card image={vision} heading="Our Vision" text="Our vision at FAIR ServiceX is to be a global leader in digital solutions, transforming businesses and shaping the future of digital innovation. We envision a world where our tailored services enable every client to reach their full potential and achieve unprecedented success." />
      <Card image={value} heading="Our Value" text="At FAIR ServiceX, our values are rooted in integrity, innovation, and client success. We believe in delivering services with utmost honesty, continuously pushing the boundaries of creativity, and placing our client's needs at the heart of everything we do. These values guide us in creating meaningful digital solutions." />
    </div>
  );
};

export default AboutCards;
