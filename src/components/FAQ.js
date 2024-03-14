// src/Accordion.js
import React, { useState } from 'react';
import './styles/Faq.css';

const accordionItems = [
  {
    title: 'Can you migrate my existing online store to Shopify?',
    content: 'Yes, we offer migration services to smoothly transition your existing online store to the Shopify platform. Our team ensures that product data, customer information, and other essential elements are transferred securely, minimizing downtime and preserving SEO rankings.',
  },
  {
    title: 'How do you ensure that the graphic design aligns with our brand identity?',
    content: 'Before starting any project, we conduct a thorough consultation to understand your brand, values, and design preferences. We create design concepts that resonate with your brand identity, ensuring consistency in colors, fonts, and overall aesthetics.',
  },
  {
    title: 'What file formats will I receive for my graphic design project?',
    content: 'Upon completion of the project, we provide the final designs in commonly used file formats such as JPEG, PNG, and PDF. Additionally, we can supply source files (e.g., Adobe Illustrator or Photoshop files) if requested, allowing for future edits and adaptations.',
  },
];

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
      <>
     
    <div className={`accordion-item ${isActive ? 'activeAccord' : ''}`} onClick={onClick}>
      <div className="accordion-title">{title} <i /*style={{color:'#0f0'}}*/ className="uil uil-angle-down"></i></div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
    </>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
      <div style={{textAlign:'center'}}>
       {/* <h3 className="cardMainHeading" style={{marginBottom:'3%'}}>FAQS</h3> */}
       <h1 className='allText animated-buttonH' style={{marginBottom:'3%'}}> <span></span>
  <span></span>
  <span></span>
  <span></span>FAQS</h1>
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
    </div>
  );
};

export default FAQ;
