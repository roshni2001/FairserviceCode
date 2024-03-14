// WhatsAppIcon.js

import React from 'react';
import { MdOutlineWhatsapp } from "react-icons/md";
import './styles/WhatsAppIcon.css';
const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
  
    window.open('https://wa.me/message/TTZRTGI7SGHHH1'); 
  };

  return (
    <div className="whatsapp-icon" onClick={handleWhatsAppClick}>
     <MdOutlineWhatsapp  className='wIcon'/>
    </div>
  );
};

export default WhatsAppIcon;
