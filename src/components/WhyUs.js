import React, { useEffect } from 'react'
import logoImg from '../images/FAIR Servicex Icon.png';
import './styles/featuredImg.css'
import Aos from "aos";
import "aos/dist/aos.css";
const FeaturedImg = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div className='featuredImg' data-aos="slide-right">
        <img src={logoImg} alt="logo"  />
      <div>
        {/* <h1 className='allText' style={{color:'var(--color-primary)'}}><span className='horizontalLine'></span>WHY US?</h1> */}
        <h1 className='allText animated-buttonH' > <span></span>
  <span></span>
  <span></span>
  <span></span>WHY US?</h1>
        <h1 >Why Fair ServiceX</h1>
        <p className='f_para'> At FAIR ServiceX, we stand out as your digital partner for a myriad of reasons. Our commitment to excellence is unwavering, and we take pride in delivering solutions that not only meet but exceed expectations. From a dynamic team of skilled professionals to a proven track record of successful projects, we bring expertise and innovation to every aspect of our services. We prioritize collaboration, understanding your unique needs to tailor solutions that truly resonate with your brand. With a blend of creativity, technical prowess, and a client-centric approach, FAIR ServiceX is not just a service provider; we are your dedicated ally on the journey to digital success.</p>
        </div>
    </div>
    </>
  )
}

export default FeaturedImg