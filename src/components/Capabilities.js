import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import Graphic from '../images/Graphic.png';
import shopify from '../images/shopify.png';
import videoediting from '../images/videoediting.png';
import advertisement from '../images/advertisement.png';
import webdev from '../images/webdev.png';
import contentwriting from '../images/content-writing.png';
import './styles/aboutCard.css';

const capabilitiesData = [
  {
    image: Graphic,
    heading: "Graphic Design",
    id: "gd", // Add id for Graphic Design
    services: [
      'Social Media Design',
      'Logo Design',
      'Business Profile',
      'Poster Design',
      'Brochure Design',
    ],
  },
  {
    image: shopify,
    heading: "Shopify Expert",
    id: "se", // Add id for Shopify Expert
    services: [
      'Store Development',
      'Store Design',
      'Google Merchant Center',
      'Google Ads',
    ],
  },
  {
    image: advertisement,
    heading: "Marketing Services",
    id: "ms", // Add id for Marketing Services
    services: [
      'Digital Marketing',
      'Social Media Marketing',
      'Search Engine Optimization (SEO)',
      'App Store Optimization',
      'Social Media Management',
      'Email Marketing',
    ],
  },
  {
    image: videoediting,
    heading: "Video Editing",
    id: "ve", // Add id for Video Editing
    services: [
      'Video Ads',
      'Product Video',
      'Video Animation',
    ],
  },
  {
    image: webdev,
    heading: "Web Development",
    id: "wd", // Add id for Web Development
    services: [
      'Wordpress Development',
      'MERN Stack Development',
      'Full Stack Development',
    ],
  },
  {
    image: contentwriting,
    heading: "Writing Services",
    id: "ws", // Add id for Writing Services
    services: [
      'Content Writing',
      'Copy Writing',
    ],
  },
];

const Card = ({ image, heading, id, services }) => {
  const navigate = useNavigate(); // Initialize useHistory hook
  
  const handleClick = () => {
    // Navigate to services page with dynamically generated id
    navigate(`/services#${id}`);
  };
  
  return (
    <div className="card CapibilitiesCard aboutCard" onClick={handleClick} style={{cursor:'pointer'}}>
      <img className="card-icon" src={image} alt="icon" />
      <h3 className="card-heading">{heading}</h3>
      <ul className="card-list">
        {services.map((service, index) => (
          <li style={{ listStyle: 'inside' }} key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

const Capabilities = (props) => {
  return (
    <div style={{textAlign:'center'}}>
     
      <h1 className='allText animated-buttonH'> <span></span>
  <span></span>
  <span></span>
  <span></span>{props.title}</h1>
      <div className="card-container">
        {capabilitiesData.map((capability, index) => (
          <Card key={index} {...capability} />
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
