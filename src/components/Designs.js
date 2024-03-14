import React, { useEffect } from 'react'
// import AboutHeroSec from '../components/AboutHeroSec'
// import Capabilities from '../components/Capabilities'

import w1 from '../images/Social Media Designs/Social Media Posts Poster.jpg'
import w2 from '../images/Poster Design/SMPD 4.jpg'
import w3 from '../images/Logo Designs/Logo Designs.jpg'
import cpF from '../images/Company Profiles/Front Page.png';
import cpL from '../images/Company Profiles/Last Page.png';
import cp1 from '../images/Company Profiles/Artboard 2.png';
import cp2 from '../images/Company Profiles/Artboard 3.png';
import cp3 from '../images/Company Profiles/Artboard 4.png';
import cp4 from '../images/Company Profiles/Artboard 5.png';
import cp5 from '../images/Company Profiles/Artboard 6.png';
import cp6 from '../images/Company Profiles/Artboard 7.png';
import cp7 from '../images/Company Profiles/Artboard 8.png';
import cp8 from '../images/Company Profiles/Artboard 9.png';
import cp9 from '../images/Company Profiles/Artboard 10.png';
import cp10 from '../images/Company Profiles/Artboard 11.png';
import cp11 from '../images/Company Profiles/Artboard 12.png';
import cp12 from '../images/Company Profiles/Artboard 13.png';
import cp13 from '../images/Company Profiles/Artboard 14.png';
import cp14 from '../images/Company Profiles/Artboard 15.png';
import cp15 from '../images/Company Profiles/Artboard 16.png';
import cp16 from '../images/Company Profiles/Artboard 17.png';
import cp17 from '../images/Company Profiles/Artboard 18.png';
import cp18 from '../images/Company Profiles/Artboard 19.png';
import cp19 from '../images/Company Profiles/Artboard 20.png';
import cp20 from '../images/Company Profiles/Artboard 21.png';
import cp21 from '../images/Company Profiles/Artboard 22.png';
import bd1 from '../images/Brochure Design/Artboard 1.png';
import bd2 from '../images/Brochure Design/Artboard 2.png';
import bd3 from '../images/Brochure Design/Artboard 3.png';
import bd4 from '../images/Brochure Design/Artboard 4.png';

import { useParams } from 'react-router-dom'
import AboutHeroSec from '../components/AboutHeroSec'
import WhatsAppIcon from '../components/WhatsAppIcon'
import GDDesigns from './GDDesigns'
import DesignCategories from './DesignCategories'
const Designs = () => {
  useEffect(() => {
    document.title = 'Fair ServiceX - Graphic Design Portfolio';
    return () => {
      document.title = 'Fair ServiceX';
    };
  }, []);
  const { category } = useParams();
  console.log('inside:', category);

  // Based on the category parameter, set the appropriate props
  let workProps = {};
  const defaultCategory = 'graphicdesigning';
  const selectedCategory = category || defaultCategory;
  switch (selectedCategory) {
    case 'socialmediadesign':
      workProps = {
        heading:'Social Media Design',
        text:'Explore our Graphic Design Portfolio at FAIR ServiceX. It showcases our creativity and expertise in transforming ideas into visually compelling designs. Each piece is a testament to our commitment to excellence and ability to deliver designs that meet and exceed client expectations.',
        // img1:w1, title1:'Social Media Designs', descp1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        images: [
          { url: w1 },
          // Add more image objects as needed
        ]
        };
      break;
    case 'posterdesign':
      workProps = {
        heading:'Poster Design',
        text:'Explore our curated collection of Shopify success stories. Our portfolio showcases beautifully crafted online stores, seamless e-commerce integrations, and customized solutions. From small businesses to established brands, discover how we’ve transformed digital visions into thriving online experiences.',
        // img1:w2, title1:'Digital Marketing ', descp1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        images: [
          { url: w2 },
          // Add more image objects as needed
        ]   
      };
      break;
    case 'logodesign':
      workProps = {
        heading:'Logo Design',
        text:'Explore our diverse marketing services portfolio, showcasing successful campaigns, brand transformations, and growth-driven strategies. From SEO to social media management, discover how we’ve empowered businesses to thrive in the digital landscape. Let’s elevate your brand together! 🚀',
        // img1:w3, title1:'Social Media Marketing Poster', descp1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        images: [
          { url: w3 },
          // Add more image objects as needed
        ]  
      };
      break;
    case 'companyprofile':
      workProps = {
        heading:'Company Profile',
        text:'We transform raw footage into professional videos that resonate. Our storytelling and visual effects expertise ensures that your message is conveyed effectively and beautifully. Experience the magic we create at Fair ServiceX.',
        images: [
          { url: cpF }, { url: cpL }, { url: cp1 }, { url: cp2 }, { url: cp3 }, { url: cp4 }, { url: cp5 }, { url: cp6 }, { url: cp7 },
          { url: cp8 }, { url: cp9 }, { url: cp10 }, { url: cp11 }, { url: cp12 }, { url: cp13 }, { url: cp14 }, { url: cp15 }, { url: cp16 },
          { url: cp17 }, { url: cp18 }, { url: cp19 }, { url: cp20 }, { url: cp21 }, 
          // Add more image objects as needed
        ]  
       
          
        };
      break;
    case 'brochuredesign':
      workProps = {
        heading:'Brochure Design',
        text:'Dive into Fair ServiceX’s Web Development Portfolio. We craft responsive, user-friendly websites that drive your digital presence. Our team’s proficiency in the latest technologies ensures your website stands out. Discover the blend of creativity and functionality in our web development projects.',
      
      
         images: [
          { url: bd1 }, { url: bd2 }, { url: bd3 }, { url: bd4 },
          // Add more image objects as needed
        ]  
        };
      break;
      
    default:
      workProps = {
        heading:'Social Media Design',
        text:'Explore our Graphic Design Portfolio at FAIR ServiceX. It showcases our creativity and expertise in transforming ideas into visually compelling designs. Each piece is a testament to our commitment to excellence and ability to deliver designs that meet and exceed client expectations.',
        images: [
          { url: w1 },
          // Add more image objects as needed
        ]  
        };
  }
  return (
    <>
    <AboutHeroSec class='headText' heading='Graphic Design'text1="Welcome to the Portfolio section of Fair ServiceX, a comprehensive showcase of our diverse digital services. Our portfolio encapsulates our expertise in Graphic Design, Marketing Services, Web Development, Shopify Solutions, Video Editing, and Writing Services. Each project reflects our dedication to quality, creativity, and innovation. From designing visually appealing graphics, executing effective marketing strategies, developing responsive websites, optimizing Shopify stores, editing captivating videos, to crafting engaging written content, our work is a testament to our commitment to excellence. Explore and experience the digital magic we create at Fair ServiceX." />
   
      {/* <AboutHeroSec heading='Our Work' title='ELEVATING BRANDS THROUGH STRATEGIC DIGITAL INNOVATION AND CUTTING-EDGE SOLUTIONS' text1="we are architects of digital solutions, tailoring strategies to meet and exceed the unique demands of our clients. Our mission is to go beyond problem-solving; we're here to create enduring solutions. From Shopify excellence to captivating graphic design, we're dedicated to understanding your brand, turning challenges into opportunities, and ensuring your business consistently monetizes its full potential." text2="We're not just a service provider; we're your strategic partner in achieving excellence in design, development, mathematics, and digital marketing." text3="Choose Fair ServiceX for a holistic approach to your digital needs."/> */}
    <DesignCategories/>
    <GDDesigns {...workProps} />
    <WhatsAppIcon/>
    </>
  )
}

export default Designs