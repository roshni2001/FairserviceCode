import React from 'react'
import { Link } from 'react-router-dom';
import './styles/work.css';

const OurWork = (props) => {
    const { heading, text, images,videos } = props;
  return (
    <>
    
    {/* <Link className='allText workHead' style={{color:'var(--color-primary)',textAlign:'center'}}><span className='horizontalLine'></span>Our Recent Work</Link> */}
    <h1 className='allText animated-buttonH' > <span></span>
  <span></span>
  <span></span>
  <span></span>{heading}</h1>
     
        <p  className="f_para " style={{margin:'0 2%'}}>{text}</p>
        <div className='designImg'>
        {images && images.map((img, index) => (
          <img key={index} src={img.url} alt={`mywork${index}`} />
        ))}
      </div>
      <div className="portfVid">
        {videos && videos.map((vid, index) => (
          <video key={index} src={vid.url} alt={`mywork${index}`} autoPlay loop muted />
        ))}
      </div>

    </>
  )
}

export default OurWork