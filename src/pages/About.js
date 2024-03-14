import React, { useEffect } from 'react'
import AboutCards from '../components/AboutCards';
import AboutHeroSec from '../components/AboutHeroSec';
import Capabilities from '../components/Capabilities';
import GraphicalChart from '../components/Chart';
import GlowCards from '../components/GlowCards';
import WhatsAppIcon from '../components/WhatsAppIcon';
// import SimpleSlider from '../components/SimpleSlide';

const About = () => {
  const data = [2000, 300, 11];
  useEffect(() => {
    document.title = 'Fair ServiceX - About Us';
    return () => {
      document.title = 'Fair ServiceX';
    };
  }, []);
  return (
    <>
    <AboutHeroSec class='headText' heading='About' title='ABOUT FAIR SERVICE' text1="At FAIR ServiceX, we believe in the power of creativity and technology to transform your business. We are a dynamic and innovative company offering a comprehensive suite of services designed to help your business thrive in the digital age.

Our team of dedicated professionals specializes in a wide range of services, including Graphic Design, Social Media Design, Logo Design, Company Profiles, Banners, Posters, Brochures, Digital Marketing, Social Media Marketing, SEO, Email Marketing, App Store Optimization, Web Development, WordPress Development, MERN Stack Development, Full Stack Development, Video Editing, Shopify Expertise, Content Writing, Copy Writing, and Social Media Management.
"  text2={<>We are more than just a service provider; we are your trusted partner in success.<br />We look forward to working with you and helping your business reach new heights.</>}
/>
    <AboutCards/>
    <Capabilities title='Capabilities'/>
    {/* <GraphicalChart data={data}/> */}
    {/* <GlowCards/> */}
    <WhatsAppIcon/>
    </>
  )
}

export default About