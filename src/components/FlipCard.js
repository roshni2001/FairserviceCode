import React, { useState } from 'react'
import member1 from '../images/ahmad.jpeg';
import member2 from '../images/YT.png';
import member3 from '../images/Kainat Fatima.jpg';
import member4 from '../images/shahzaib.jpg';
import member5 from '../images/Mashal Yousafzai.jpeg';
import member6 from '../images/sufiyan.png';
import member7 from '../images/sufiyan.png';
import member8 from '../images/Miqdad Hussain.jpg';
import member9 from '../images/Miqdad Hussain.jpg';

import './styles/flipCard.css'
// import Team from './Team';
import ReactCardFlip from 'react-card-flip';
const FlipCard = () => {
    const [isFlipped,setIsFlipped]=useState(false);
    const [isFlipped2,setIsFlipped2]=useState(false);
    const [isFlipped3,setIsFlipped3]=useState(false);
    const [isFlipped4,setIsFlipped4]=useState(false);
    const [isFlipped5,setIsFlipped5]=useState(false);
    const [isFlipped6,setIsFlipped6]=useState(false);
    const [isFlipped7,setIsFlipped7]=useState(false);
    const [isFlipped8,setIsFlipped8]=useState(false);
    const [isFlipped9,setIsFlipped9]=useState(false);
    const flipCard=()=>{
setIsFlipped(!isFlipped);
    }
const flipCard2=()=>{
setIsFlipped2(!isFlipped2);
            }
const flipCard3=()=>{
setIsFlipped3(!isFlipped3);
                    }
const flipCard4=()=>{
setIsFlipped4(!isFlipped4);
                            }
const flipCard5=()=>{
      setIsFlipped5(!isFlipped5);
                                    }
const flipCard6=()=>{
setIsFlipped6(!isFlipped6);
                                          }
const flipCard7=()=>{
    setIsFlipped7(!isFlipped7);
                                                }
 const flipCard8=()=>{
  setIsFlipped8(!isFlipped8);
                                                      }
  const flipCard9=()=>{
                                                        setIsFlipped9(!isFlipped9);
                                                                                                            }
  return (
    <div className='team ourTeam'>
  <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>

      <div className='flip_card' onMouseEnter={flipCard}>
      <img src={member1} alt="Member" width={250} height={250}/>
      </div>
      <div className='flip_card card_back'  onMouseLeave={flipCard}><h1 className='aboutMe'>About Me</h1> <p className='mem_name'>Ahmad Khan</p>
            <p className='mem_name mem_desg'>CEO Fair ServiceX</p></div>

  </ReactCardFlip>
  <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped2}>

<div className='flip_card' onMouseEnter={flipCard2}>
<img src={member2} alt="Member" width={250} height={250}/>
</div>
<div className='flip_card card_back'  onMouseLeave={flipCard2}>
    <h1 className='aboutMe'>About Me</h1> 
<p className='mem_name'>Yusra Tahir</p>
            <p className='mem_name mem_desg'>Shopify Expert</p>
</div>
</ReactCardFlip>
<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped3}>

<div className='flip_card' onMouseEnter={flipCard3}>
<img src={member3} alt="Member" width={250} height={250}/>
</div>
<div className='flip_card card_back'  onMouseLeave={flipCard3}><h1 className='aboutMe'>About Me</h1><p className='mem_name'>Kainat Fatima</p>
            <p className='mem_name mem_desg'>Graphic Designer</p>
</div>
</ReactCardFlip>
<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped4}>

<div className='flip_card' onMouseEnter={flipCard4}>
<img src={member4} alt="Member" width={250} height={250}/>
</div>
<div className='flip_card card_back'  onMouseLeave={flipCard4}><h1 className='aboutMe'>About Me</h1> 
<p className='mem_name'>Shahzaib Noor</p>
            <p className='mem_name mem_desg'>Content Writer</p>
            </div>

</ReactCardFlip>
<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped5}>

<div className='flip_card' onMouseEnter={flipCard5}>
<img src={member5} alt="Member" width={250} height={250}/>
</div>
<div className='flip_card card_back'  onMouseLeave={flipCard5}><h1 className='aboutMe'>About Me</h1> 
<p className='mem_name'>Mashal Zafar Yousafzai</p>
            <p className='mem_name mem_desg'>Ads Expert</p>
</div>
</ReactCardFlip>
<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped6}>

<div className='flip_card' onMouseEnter={flipCard6}>
<img src={member6} alt="Member" width={250} height={250}/>
</div>
<div className='flip_card card_back'  onMouseLeave={flipCard6}><h1 className='aboutMe'>About Me</h1> 
<p className='mem_name'>Muhammad Sufiyan</p>
            <p className='mem_name mem_desg'>Video Editor</p>
</div>
</ReactCardFlip>

<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped7}>

<div className='flip_card' onMouseEnter={flipCard7}>
<img src={member7} alt="Member" width={250} height={250}/>
</div>
<div className='flip_card card_back'  onMouseLeave={flipCard7}><h1 className='aboutMe'>About Me</h1> 
<p className='mem_name'>Muhammad Sufiyan</p>
            <p className='mem_name mem_desg'>Video Editor</p>
</div>
</ReactCardFlip>

<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped8}>

<div className='flip_card' onMouseEnter={flipCard8}>
<img src={member8} alt="Member" width={250} height={250}/>
</div>
<div className='flip_card card_back'  onMouseLeave={flipCard8}><h1 className='aboutMe'>About Me</h1> 
<p className='mem_name'>Miqdad Hussain</p>
            <p className='mem_name mem_desg'>Content Writer</p>
</div>
</ReactCardFlip>
<ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped9}>

<div className='flip_card' onMouseEnter={flipCard9}>
<img src={member9} alt="Member" width={250} height={250}/>
</div>
<div className='flip_card card_back'  onMouseLeave={flipCard9}><h1 className='aboutMe'>About Me</h1> 
<p className='mem_name'>Hammad Ahmed</p>
            <p className='mem_name mem_desg'>Wordpress Developer</p>
</div>
</ReactCardFlip>
    </div>
  )
}

export default FlipCard