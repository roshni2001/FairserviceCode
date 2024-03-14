import React, { useEffect } from 'react'
import member1 from '../images/ahmad.jpeg';
import member2 from '../images/YT.png';
import member3 from '../images/Kainat Fatima.jpg';
// import member4 from '../images/shahzaib.jpg';
import member4 from '../images/Maria Shehzadi.jpg';
import member5 from '../images/Mashal Zafar Yousafzai.jpg';
import './styles/team.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
const Team = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div data-aos="zoom-in" style={{textAlign:"center", marginTop:'-4%'}}>
     {/* <h1 className='allText' style={{color:'var(--color-primary)', textAlign:'center'}}><span className='horizontalLine'></span>OUR TEAM</h1> */}
     <h1 className='allText animated-buttonH' style={{marginTop:'5%'}}> <span></span>
  <span></span>
  <span></span>
  <span></span>OUR TEAM</h1>
    <div className='team'>
        
        <div className='team_member'>
            <img src={member1} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Ahmad Khan</p>
            <p className='mem_name mem_desg'>CEO Fair ServiceX</p>
        </div>
        <div className='team_member'>
            <img src={member2} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Yusra Tahir</p>
            <p className='mem_name mem_desg'>Shopify Expert</p>
        </div>
        <div className='team_member'>
            <img src={member3} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Kainat Fatima</p>
            <p className='mem_name mem_desg'>Graphic Designer</p>
        </div>
        <div className='team_member'>
            <img src={member4} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Maria Shehzadi</p>
            <p className='mem_name mem_desg'>Project Manager</p>
        </div>
        <div className='team_member'>
            <img src={member5} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Mashal Zafar Yousafzai</p>
            <p className='mem_name mem_desg'>Ads Expert</p>
        </div>
    </div>
    <button className='viewteambtn'>
    <Link  to="/team">Explore Our Team</Link>
    </button>
    </div>
  )
}

export default Team