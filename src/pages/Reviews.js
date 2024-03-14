import React from 'react'
import '../components/styles/reviews.css'
import ContactAnim from '../components/ContactAnim'
import WhatsAppIcon from '../components/WhatsAppIcon';
const imagePaths = [

    require('../images/rev1.jpeg'),
    require('../images/rev2.jpeg'),
    require('../images/rev3.jpeg'),
    require( '../images/rev4.jpeg'),
    require('../images/rev5.jpeg'),
    // require( '../images/rev6.jpeg'),
    // require('../images/rev7.jpeg'),
    require('../images/rev8.jpeg'),
    // require('../images/rev9.jpeg'),
    require('../images/rev10.jpeg'),
    require( '../images/rev11.jpeg'),
    require('../images/rev12.jpeg'),
    require('../images/rev13.jpeg'),
    require('../images/rev14.jpeg'),
    require('../images/rev15.jpeg'),
    require('../images/rev16.jpeg'),
    require('../images/rev17.jpeg'),
    require('../images/rev18.jpeg'),
    require('../images/rev19.jpeg'),
    require('../images/rev20.jpeg'),
    require('../images/rev21.jpeg'),
    require('../images/rev22.jpeg'),
    require( '../images/rev23.jpeg'),
    require( '../images/rev24.jpeg'),
  ];
const Reviews = () => {
  return (
    <>
      <ContactAnim title="Customer Reviews" text="Real Results, Real Success"/>
    <div className="reviews-container">
      {imagePaths.map((image, index) => (
        <div key={index} className="review-card">
        <img src={image} alt={`Review ${index + 1}`} />
          {/* Add any other content you want for the card */}
          <div className="readmorelink"><a href="https://www.fiverr.com/fairboy7" target='_blank' rel="noreferrer">Read More</a></div>
          
        </div>
      ))}
    </div>
    <WhatsAppIcon/>
    </>
  )
}

export default Reviews