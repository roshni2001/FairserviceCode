import React, { useEffect } from 'react'
import AboutHeroSec from '../components/AboutHeroSec'
import Capabilities from '../components/Capabilities'
import Categories from '../components/Categories'
import Stats from '../components/Stats'
import WhatsAppIcon from '../components/WhatsAppIcon'

const Services = () => {
  useEffect(() => {
    document.title = 'Fair ServiceX - Services';
    return () => {
      document.title = 'Fair ServiceX';
    };
  }, []);
  return (
    <>
    <AboutHeroSec class='headText' heading='Our Services' text1="FAIR ServiceX is your comprehensive digital services provider. We offer a broad spectrum of services, including Graphic Design, Web Development, Video Editing, Content Writing, Marketing Services, and Shopify Development. Recently, we’ve expanded our portfolio to include Search Engine Optimization (SEO), a crucial service in the digital age. Our team of experts is dedicated to delivering innovative, tailor-made solutions that cater specifically to your business needs. We strive for excellence in every project, big or small, with the aim of helping your business navigate the complexities of the digital world and thrive amidst the competition. At FAIR ServiceX, we believe that your success is our success. We’re not just a service provider; we’re your partner in the digital journey. Let us help you unlock your full digital potential and achieve your business goals. Together, we can make your digital dreams a reality. "/>
    <Categories/>
    {/* <Capabilities title='Our Expertise'/> */}
    {/* <Stats/> */}
    <WhatsAppIcon/>
    </>
  )
}

export default Services