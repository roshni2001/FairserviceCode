import React from 'react'
import './styles/aboutHero.css'
import videoBg from '../images/bg2.mp4'
const AboutHeroSec = (props) => {
  const neonGlow = {
    color: '#fff',
    fontSize:'2.5rem',
    textShadow: '0 0 10px rgba(183, 0, 255, 0.8), 0 0 20px rgba(162, 0, 255, 0.6), 0 0 30px rgba(212, 0, 255, 0.4)',
    transition: 'text-shadow 0.3s ease-in-out',
  };
  return (
   <>
 
   <div className='main'>
    
    <div className="overlay"></div>
    <video src={videoBg} autoPlay loop muted />
    
</div>
{/* <div className="content aboutMain"> */}
<div className=" aboutMain">
       <h1 className='aboutHeading'>{props.heading}</h1>
       
   {/* <h1 className='allHeading' style={{ color: 'var(--color-primary)', textAlign: 'center' }}>
       {props.title}<span  className='spanX' style={neonGlow}>X</span>
      </h1> */}
      <h1 className={props.class}>{props.text1}</h1>
      <p className='secTxt'>{props.text2}</p>
      {/* <p>{props.text3}</p> */}
   </div>
       

   </>
  )
}

export default AboutHeroSec