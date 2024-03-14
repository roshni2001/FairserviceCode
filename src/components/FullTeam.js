import React, { useState } from 'react'
import member1 from '../images/ahmad.jpeg';
import member2 from '../images/Kainat Fatima.jpg';
import member3 from '../images/YT.png';
import member4 from '../images/Noor.jpg';
import member5 from '../images/Maria Shehzadi.jpg';
import member6 from '../images/Mashal Zafar Yousafzai.jpg';
import member7 from '../images/Miqdad Hussain.jpg';
import member8 from '../images/sufiyan.png';
import member9 from '../images/hd.JPG';
import member10 from '../images/shahzaib.jpg';
import member11 from '../images/Saqlain Ghafoor.jpg';
import './styles/flipCard.css'
const FullTeam = () => {
  return (
    <>
    
    <div className='team ourTeam'>
        
        <div className='team_member flip_card'>
            <img src={member1} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Ahmad Khan</p>
            <p className='mem_name mem_desg'>Graphic Designer</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member2} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Kainat Fatima</p>
            <p className='mem_name mem_desg'>Graphic Designer</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member3} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Yusra Tahir</p>
            <p className='mem_name mem_desg'>Shopify Expert</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member4} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Noor ul Ain</p>
            <p className='mem_name mem_desg'>Web Developer</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member5} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Maria Shehzadi</p>
            <p className='mem_name mem_desg'>ASO Executive</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member6} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Mashal Zafar Yousafzai</p>
            <p className='mem_name mem_desg'>Social Media Marketing Expert</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member7} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Miqdad Hussain</p>
            <p className='mem_name mem_desg'>Content Writer</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member8} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Muhammad Sufiyan</p>
            <p className='mem_name mem_desg'>Video Editor</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member9} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Hammad Ahmed</p>
            <p className='mem_name mem_desg'>WordPress Developer</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member10} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Shahzaib Noor</p>
            <p className='mem_name mem_desg'>Shopify Expert</p>
        </div>
        <div className='team_member flip_card'>
            <img src={member11} alt="Member" width={250} height={250}/>
            <p className='mem_name'>Saqlain Ghafoor</p>
            <p className='mem_name mem_desg'>SEO Expert</p>
        </div>
    </div>
    
    </>
  )
}

export default FullTeam