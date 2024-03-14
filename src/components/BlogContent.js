import React from 'react'
import { Link } from 'react-router-dom';
import './styles/blogContent.css';
const BlogContent = (props) => {
 
    const { heading, text, images,videos } = props;
    return (
      <>
      
      {/* <Link className='allText workHead' style={{color:'var(--color-primary)',textAlign:'center'}}><span className='horizontalLine'></span>Our Recent Work</Link> */}
     
       
         <div className='ContentContainer'>
         <h1 className='allText animated-buttonH' > <span></span>
            <span></span>
            <span></span>
            <span></span>{heading}</h1>
         <p>{text}</p>
         </div>
         <div className='addComment'>
             <h2>Add a new comment</h2>
             <textarea placeholder='Type a comment ...' cols={5} rows={2}></textarea>
             <Link to="/" className='blogButn'><button>Post Comment</button></Link>
         </div>
             <h1 className='comHead'>Comments</h1>
         <div className='RetrievedCommentsContainer'>
            <div className='RetrievedComments'>
                <h2>John Smith</h2><strong>1 March 2024 at 3:00pm</strong>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolorem ut quas repudiandae exercitationem at dolores, accusantium hic recusandae necessitatibus.</p>
            </div>
         </div>
  
      </>
  )
}

export default BlogContent