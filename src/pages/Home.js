import React, { useEffect } from 'react'
import CardData from '../components/CardData'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import FeaturedImg from '../components/FeaturedImg'
import FeaturedProj from '../components/FeaturedProj'
import HeroSection from '../components/HeroSection'
// import HomeFooter from '../components/HomeFooter'
import Stats from '../components/Stats'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import WhatsAppIcon from '../components/WhatsAppIcon'

// import PosterImgComp from '../components/PosterImgComp'
// import TimelineStrip from '../components/TimelineStrip'
import WhyUs from '../components/WhyUs'

const Home = () => {
  useEffect(() => {
    document.title = 'Fair ServiceX - Home';
    return () => {
      document.title = 'Fair ServiceX';
    };
  }, []);
  return (
    <>
    {/* <TimelineStrip/> */}

    <HeroSection/>
    <FeaturedImg/>
    <CardData/>
    <Stats/>
  
    <FeaturedProj/>
    <Testimonials/>
    <WhyUs/>
    <Team/>
    <FAQ/>
    <Contact/>
    <WhatsAppIcon/>
    {/* <HomeFooter/> */}
    </>
  )
}

export default Home