import React from 'react'
import AboutHeroSec from '../components/AboutHeroSec'
import OurWork from '../components/OurWork'
import WhatsAppIcon from '../components/WhatsAppIcon'

const Portfolio = () => {
  return (
    <>
    <AboutHeroSec class='headText ' heading='PortFolio' title='ELEVATING BRANDS THROUGH STRATEGIC DIGITAL INNOVATION AND CUTTING-EDGE SOLUTIONS' text1="w are architects of digital solutions, tailoring strategies to meet and exceed the unique demands of our clients. Our mission is to go beyond problem-solving; we're here to create enduring solutions. From Shopify excellence to captivating graphic design, we're dedicated to understanding your brand, turning challenges into opportunities, and ensuring your business consistently monetizes its full potential." text2="We're not just a service provider; we're your strategic partner in achieving excellence in design, development, mathematics, and digital marketing." text3="Choose Fair ServiceX for a holistic approach to your digital needs."/>
    <OurWork/>
    <WhatsAppIcon/>
    </>
  )
}

export default Portfolio