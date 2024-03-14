import React, { useEffect } from 'react'
import AboutHeroSec from '../components/AboutHeroSec'
import FlipCard from '../components/FlipCard'
import FullTeam from '../components/FullTeam'
import SimpleSlide from '../components/SimpleSlide'
import WhatsAppIcon from '../components/WhatsAppIcon'

const Team = () => {
  useEffect(() => {
    document.title = 'Fair ServiceX - Our Team';
    return () => {
      document.title = 'Fair ServiceX';
    };
  }, []);
  return (
    <>
    <AboutHeroSec class='headText' heading='Our Team' text1="Fair ServiceX is a diverse and dynamic group of dedicated professionals who are passionate about providing top-notch digital services. Our team is composed of talented Graphic Designers, SEO experts, strategic Marketing Strategists, innovative Web Developers, experienced Shopify Experts, creative Video Editors, and skilled Content Writers. Each member of our team brings unique skills and experiences to the table, contributing to our holistic and comprehensive approach to digital solutions. We pride ourselves on our collaborative spirit, where every idea is valued and every voice is heard. Our commitment to excellence is unwavering, and it is this dedication that drives us to deliver high-quality services. " 
    text2={<>   Our team is the backbone of Fair ServiceX, driving us towards innovation and success.<br/> Explore and get to know the creative minds behind our exceptional services.</>}/>
 
    {/* <FlipCard/> */}
    <FullTeam/>
    <SimpleSlide/>
    <WhatsAppIcon/>
   
    </>
  )
}

export default Team