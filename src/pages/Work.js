import React, { useEffect } from 'react'
// import AboutHeroSec from '../components/AboutHeroSec'
// import Capabilities from '../components/Capabilities'
import OurWork from '../components/OurWork'
import WorkCategories from '../components/WorkCategories'
import w1 from '../images/Social Media Designs/Social Media Posts Poster.jpg'
import w2 from '../images/Poster Design/SMPD 4.jpg'
import w3 from '../images/Logo Designs/Logo Designs.jpg'
import cp from '../images/Company Profiles/Company Profile Portfolio.jpg';
import bd from '../images/Brochure Design/Brochure Design Portfolio.jpg';

import s1 from '../images/Shopify/Google Ads Account/IMG_5151.JPG';
import s2 from '../images/Shopify/Google Ads Account/IMG_5159.JPG';
import s3 from '../images/Shopify/Google Merchant Account/IMG_5152.JPG';
import s4 from '../images/Shopify/Google Merchant Account/IMG_5153.JPG';
import s5 from '../images/Shopify/Google Merchant Account/IMG_5160.JPG';
import s6 from '../images/Shopify/Google Merchant Account/IMG_5161.JPG';
import s7 from '../images/Shopify/Google Merchant Account/IMG_5162.JPG';
import s8 from '../images/Shopify/Store Design & Development/SD&D1.jpg';
import s9 from '../images/Shopify/Store Design & Development/SD&D2.jpg';
import s10 from '../images/Shopify/Store Design & Development/SD&D3.jpg';
import s11 from '../images/Shopify/Store Design & Development/SD&D4.jpg';
import s12 from '../images/Shopify/Store Results/IMG_5155.JPG';
import s13 from '../images/Shopify/Store Results/IMG_5156.JPG';
import s14 from '../images/Shopify/Store Results/IMG_5158.JPG';
import sm1 from '../images/Social Media Marketing/sm1.png';
import sm2 from '../images/Social Media Marketing/sm2.png';
import sm3 from '../images/Social Media Marketing/sm3.png';
import sm4 from '../images/Social Media Marketing/sm4.png';
import sm5 from '../images/Social Media Marketing/sm5.png';
import wp1 from '../images/WordPress Development/w1.jpeg';
import wp2 from '../images/WordPress Development/w2.jpeg';
import wp3 from '../images/WordPress Development/w3.jpeg';
import wp4 from '../images/WordPress Development/w4.jpeg';
import w5 from '../images/WordPress Development/w5.jpeg';
import w6 from '../images/WordPress Development/w6.jpeg';
import w7 from '../images/WordPress Development/w7.jpeg';
import w8 from '../images/WordPress Development/w8.jpeg';
import w9 from '../images/WordPress Development/w9.jpeg';
import w10 from '../images/WordPress Development/w10.jpeg';
import w11 from '../images/WordPress Development/w11.jpeg';
import w12 from '../images/WordPress Development/w12.jpeg';
import w13 from '../images/WordPress Development/w13.jpeg';
import seo1 from '../images/SEO/ONPAGE SEO/Web capture_17-2-2024_171528_reality21.pk.jpeg';

import v1 from '../images/Video Editing/Explained Videos/Explained Video.mp4';
import v2 from '../images/Video Editing/Product Videos/Product Video.mp4';
import v3 from '../images/Video Editing/Reels/Reels.mp4';
import v4 from '../images/Video Editing/Video Ads/video ads.mp4';
import { useParams } from 'react-router-dom'
import AboutHeroSec from '../components/AboutHeroSec'
import WhatsAppIcon from '../components/WhatsAppIcon'
const Work = () => {
  useEffect(() => {
    document.title = 'Fair ServiceX - Portfolio';
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
    case 'graphicdesigning':
      workProps = {
        heading:'Graphic Design',
        text:'Explore our Graphic Design Portfolio at FAIR ServiceX. It showcases our creativity and expertise in transforming ideas into visually compelling designs. Each piece is a testament to our commitment to excellence and ability to deliver designs that meet and exceed client expectations.',
        images: [
          { url: w1 }, { url: w2 }, { url: w3 }, { url: cp}, { url: bd }
        ]  
        };
      break;
    case 'shopifydev':
      workProps = {
        heading:'Shopify Expert',
        text:'Explore our curated collection of Shopify success stories. Our portfolio showcases beautifully crafted online stores, seamless e-commerce integrations, and customized solutions. From small businesses to established brands, discover how we’ve transformed digital visions into thriving online experiences.',
        images: [
          { url: s1 }, { url: s2 }, { url: s3 }, { url: s4 }, { url: s5 }, { url: s6 }, { url: s7 }, { url: s8 }, { url: s9 }, { url: s10 }, { url: s11 }, { url: s12 },
          { url: s13 }, { url: s14 }, 
          // Add more image objects as needed
        ]  
      };
      break;
    case 'marketing':
      workProps = {
        heading:'Marketing Services',
        text:'Explore our diverse marketing services portfolio, showcasing successful campaigns, brand transformations, and growth-driven strategies. From SEO to social media management, discover how we’ve empowered businesses to thrive in the digital landscape. Let’s elevate your brand together! 🚀',
        images: [
          { url: sm1 }, { url: sm2 }, { url: sm3 }, { url: sm4 }, { url: sm5 }, 
        ]  
      };
      break;
    case 'videoediting':
      workProps = {
        heading:'Video Editing',
        text:'We transform raw footage into professional videos that resonate. Our storytelling and visual effects expertise ensures that your message is conveyed effectively and beautifully. Experience the magic we create at Fair ServiceX.',
        videos: [
          { url: v1 }, { url: v2 }, { url: v3 }, { url: v4 },  
        ]  
      };
      break;
    case 'webdevelopment':
      workProps = {
        heading:'Web Development',
        text:'Dive into Fair ServiceX’s Web Development Portfolio. We craft responsive, user-friendly websites that drive your digital presence. Our team’s proficiency in the latest technologies ensures your website stands out. Discover the blend of creativity and functionality in our web development projects.',
        images: [
          { url: wp1 }, { url: wp2 }, { url: wp3 }, { url: wp4 }, { url: w5 }, { url: w6 }, { url: w7 }, { url: w8 }, { url: w9 }, { url:w10 }, { url: w11 }, { url: w12 },
          { url: w13 },
          // Add more image objects as needed
        ]     };
      break;
      case 'seo':
      workProps = {
        heading:'Search Engine Optimization',
        text:'Dive into Fair ServiceX’s Web Development Portfolio. We craft responsive, user-friendly websites that drive your digital presence. Our team’s proficiency in the latest technologies ensures your website stands out. Discover the blend of creativity and functionality in our web development projects.',
        images: [
          { url: seo1 }, 
          // Add more image objects as needed
        ]     };
      break;
      case 'writingservices':
      workProps = {
        heading:'Writing Services',
        text:'Discover our Writing Services Portfolio. We offer compelling content and copywriting solutions that captivate audiences and drive engagement. Our skilled writers craft content that is SEO-friendly, creative, and tailored to your brand’s voice. Experience the power of words with Fair ServiceX.',
        img1:w1, title1:'Social Media Marketing Poster', descp1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        img2:w2, title2:'Graphic Design Poster', descp2:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
         img3:w3, title3:'Graphic Design Poster', descp3:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, ste aut placeat voluptate quam in perferendis, cum laboriosam!',
        //  img4:w4,title4:'Graphic Design Poster', descp4:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
      };
      break;
    default:
      workProps = {
        heading:'Graphic Design',
        text:'Explore our Graphic Design Portfolio at FAIR ServiceX. It showcases our creativity and expertise in transforming ideas into visually compelling designs. Each piece is a testament to our commitment to excellence and ability to deliver designs that meet and exceed client expectations.',
        img1:w3, title1:'Digital Marketing ', descp1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        img2:w2, title2:'Graphic Design Poster', descp2:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
        //  img3:w4, title3:'Graphic Design Poster', descp3:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
         img4:w1,title4:'Graphic Design Poster', descp4:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!',
      };
  }
  return (
    <>
    <AboutHeroSec class='headText' heading='PortFolio'text1="Welcome to the Portfolio section of Fair ServiceX, a comprehensive showcase of our wide-ranging digital services. Our portfolio encapsulates our expertise in Graphic Design, Marketing Services, Web Development, Shopify Solutions, Video Editing, SEO, and Writing Services. Each project we undertake is a reflection of our unwavering dedication to quality, our passion for creativity, and our commitment to innovation. Whether it's designing visually appealing graphics that capture attention, executing effective marketing strategies that drive results, developing responsive websites that enhance user experience, optimizing Shopify stores for increased sales, editing videos to captivate audiences, or crafting engaging written content that resonates with readers, our work stands as a testament to our commitment to excellence. We invite you to explore our portfolio and experience the digital magic we create at Fair ServiceX. " />
   
      {/* <AboutHeroSec heading='Our Work' title='ELEVATING BRANDS THROUGH STRATEGIC DIGITAL INNOVATION AND CUTTING-EDGE SOLUTIONS' text1="we are architects of digital solutions, tailoring strategies to meet and exceed the unique demands of our clients. Our mission is to go beyond problem-solving; we're here to create enduring solutions. From Shopify excellence to captivating graphic design, we're dedicated to understanding your brand, turning challenges into opportunities, and ensuring your business consistently monetizes its full potential." text2="We're not just a service provider; we're your strategic partner in achieving excellence in design, development, mathematics, and digital marketing." text3="Choose Fair ServiceX for a holistic approach to your digital needs."/> */}
    <WorkCategories/>
    <OurWork {...workProps} />
    <WhatsAppIcon/>
    </>
  )
}

export default Work