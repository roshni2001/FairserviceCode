import React from 'react'
import AboutHeroSec from './AboutHeroSec'
import WhatsAppIcon from './WhatsAppIcon'
import WorkCategories from './WorkCategories'
const images = [
    { url: 'sm1' }, { url: 'sm2' }, { url: 'sm3' }, { url: 'sm4' }, { url: 'sm5' }, { url: 'sm6' }, { url: 'sm7' }, { url: 'sm8' }, { url: 'sm9' }, { url: 'sm10' }
  ];
const SocialmediaMarketing = () => {
    
  return (
   <>
     <AboutHeroSec class='headText' heading='PortFolio'text1="Welcome to the Portfolio section of Fair ServiceX, a comprehensive showcase of our diverse digital services. Our portfolio encapsulates our expertise in Graphic Design, Marketing Services, Web Development, Shopify Solutions, Video Editing, and Writing Services. Each project reflects our dedication to quality, creativity, and innovation. From designing visually appealing graphics, executing effective marketing strategies, developing responsive websites, optimizing Shopify stores, editing captivating videos, to crafting engaging written content, our work is a testament to our commitment to excellence. Explore and experience the digital magic we create at Fair ServiceX." />
   
   {/* <AboutHeroSec heading='Our Work' title='ELEVATING BRANDS THROUGH STRATEGIC DIGITAL INNOVATION AND CUTTING-EDGE SOLUTIONS' text1="we are architects of digital solutions, tailoring strategies to meet and exceed the unique demands of our clients. Our mission is to go beyond problem-solving; we're here to create enduring solutions. From Shopify excellence to captivating graphic design, we're dedicated to understanding your brand, turning challenges into opportunities, and ensuring your business consistently monetizes its full potential." text2="We're not just a service provider; we're your strategic partner in achieving excellence in design, development, mathematics, and digital marketing." text3="Choose Fair ServiceX for a holistic approach to your digital needs."/> */}
 <WorkCategories/>
 <h1 className='allText animated-buttonH' > <span></span>
  <span></span>
  <span></span>
  <span></span>Social Media Marketting</h1>
     
        <p  className="f_para " style={{margin:'0 2%'}}>Explore our diverse marketing services portfolio, showcasing successful campaigns, brand transformations, and growth-driven strategies. From SEO to social media management, discover how we’ve empowered businesses to thrive in the digital landscape. Let’s elevate your brand together! 🚀'</p>
        <div className='designImg'>
        {images.map((img, index) => (
          <img key={index} src={img.url} alt={`mywork${index}`} />
        ))}
      </div>
 <WhatsAppIcon/>
   
   
   </>
  )
}

export default SocialmediaMarketing