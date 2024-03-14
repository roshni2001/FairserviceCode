import React from 'react'
import poster from '../images/posterDesign.jpg';
import poster2 from '../images/Logo Designs.jpg';
import poster3 from '../images/Social Media Posts Poster.jpg';
const PosterImgComp = () => {
  return (
    <>
     <img style={{marginTop: '5%',width: '100%'}} src={poster2} alt='poster'/>
     <img style={{width: '100%'}} src={poster3} alt='poster'/>
     <img style={{width: '100%'}} src={poster} alt='poster'/>

    </>
  )
}

export default PosterImgComp