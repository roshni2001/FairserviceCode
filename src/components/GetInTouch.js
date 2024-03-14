import React from 'react'
import './styles/GetInTouch.css'
import { FaLocationDot } from "react-icons/fa6";
const GetInTouch = () => {
    const contact_Data = [
        {
          icon: "uil uil-map-marker",
          title: "Address",
          text1: "Fair ServiceX | Islamabad",
         
        },
        {
          icon: 'uil uil-phone-alt',
          title: "Phone",
          text1: "+92 332 1782121",
         
        },
        {
            icon: 'uil uil-comment-alt-dots',
            title: "Email",
            text1: "fairservicex@gmail.com",
          
        },
        
      
      ];
  return (
      <div className='contact-Main-container'>
      <h1>GET IN TOUCH</h1>
    <div className="contact-container">
        
    {contact_Data.map((item, index) => (
      <div className="contact-item" key={index}>
        <div className="contact-icon">{/* Add your icon component or image here */}</div>
        <div className="contact-info">
        <div className='contactIcon'><i className={item.icon}/></div>
          <div className="contact-title">{item.title}</div>
          <div className="contact-text">{item.text1}</div>
          <div className="contact-text">{item.text2}</div>
        </div>
      </div>
    ))}
  </div>
  </div>
  )
}

export default GetInTouch