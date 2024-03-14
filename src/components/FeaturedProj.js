import React from 'react'
import './styles/FeaturedPj.css'
import pjvideo from '../images/shopifystore.mp4'
import pjvideofunzone from '../images/funzone.mp4'
import PosterImgComp from '../components/PosterImgComp'
const FeaturedProj = () => {
  return (
    <div style={{textAlign:'center'}}>
     {/* <h1 className='allText workHead' style={{color:'var(--color-primary)',textAlign:'center',marginBottom:'5%'}}><span className='horizontalLine'></span>FEATURED PROJECTS</h1> */}
     <h1 className='allText workHead animated-buttonH' style={{marginTop:'5%'}} > <span></span>
  <span></span>
  <span></span>
  <span></span>FEATURED PROJECTS</h1>
  <PosterImgComp/>
  {/* <h1 className='workDescpHead'>Shopify E-Commerce Store</h1>
   <div className="featPj" style={{marginTop:'5%'}}>
       <div className="pjVid">
  
      <video src={pjvideo} autoPlay loop muted /> */}

       {/* </div> */}
       {/* <div className="workDescp pjDescp" >
            <h1 className='workDescpHead'>Shopify E-Commerce Store</h1>
            <p className='workPara f_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia qui deserunt fugit facilis nesciunt asperiores aliquam sapiente quidem at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis laudantium incidunt sunt minima velit, facilis, iste aut placeat voluptate quam in perferendis, cum laboriosam!</p>
        </div> */}
       {/* <div className="pjDescp">
       <h1 className='workDescpHead'>Shopify E-commerce Store</h1>
       </div> */}
   {/* </div> */}
   <h1 className='workDescpHead'>Shopify E-Commerce Store</h1>
   <div className="featPjRight">
       <div className="pjVid">
  
      <video className='projectVideo' src={pjvideo} autoPlay loop muted />

       </div>
      
   </div>
   <h1 className='workDescpHead'>Social Media Web App</h1>
   <div className="featPjRight">
       <div className="pjVid">
  
      <video className='projectVideo' src={pjvideofunzone} autoPlay loop muted />

       </div>
      
   </div>
    </div>
  )
}

export default FeaturedProj
