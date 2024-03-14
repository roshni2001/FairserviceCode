import React from "react";
import "./styles/contactInfo.css";
const Contact = (props) => {
  return (
    <div className="animContainer">
       <ul className="circles">
        <h1 className="toolsHeading">{props.title}</h1>
        <p className="para">
         {props.text}
        </p>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
   
    </div>
  );
};

export default Contact;
