import React from "react";
import "./styles/homeFooter.css";
import { RiPinterestLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LuLinkedin } from "react-icons/lu";
import "../../src/App.css"
import { Link } from "react-router-dom";
const HomeFooter = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h2 style={{color:'#7C3D97',marginTop:'7%'}}>Fair ServiceX</h2>
        <p style={{ textAlign: "justify" }}>
        Elevate your brand with Fair ServiceX – Your comprehensive destination for Graphic Design, Marketing, Web Development, Shopify expertise, Video Editing, and Writing Services. Transform your online presence into a captivating experience. Partner with us for innovative solutions that amplify your digital impact and leave a lasting impression.
        </p>
        <div className="social">
          <a href="https://www.linkedin.com/in/fairservicex" target='_blank' rel="noreferrer">
          <LuLinkedin />
          </a>
         
          <a href="mailto:fairservicex@gmail.com" target='_blank' rel="noreferrer">
          <MdOutlineMail />
          </a>
          <a href="http://www.instagram.com/fairservicex" target='_blank' rel="noreferrer">
          <FaInstagram />
          </a>
          <a href="http://www.pinterest.com/fairservicex" target='_blank' rel="noreferrer">
          <RiPinterestLine />
          </a>
          <a href="http://www.facebook.com/fairservicex" target='_blank' rel="noreferrer">
          <SlSocialFacebook />
          </a>
          <a href="http://www.threads.net/fairservicex" target='_blank' rel="noreferrer">
          <FaThreads />
          </a>
          <a href="http://www.twitter.com/fairservicex" target='_blank' rel="noreferrer">
          <FaXTwitter />
          </a>
        
        </div>
      </div>
      <ul className="footer-right">
        <li>
          <h2>Contact Us</h2>
          <ul className="boxFooter">
            <li>
              <a style={{cursor: 'text'}}>
                {/* COMSATS University Islamabad, Wah Campus
                <br /> */}
                Pakistan - Islamabad
              </a>
            </li>
          
            <li>
              <a style={{cursor: 'text'}}>
                {/* COMSATS University Islamabad, Wah Campus
                <br /> */}
              +92 332 1782121
              </a>
            </li>
            {/* <li>
              <a
                style={{ color: "#4b4bfd", textDecoration: "underline" }}
                href="https://cuiwah.edu.pk/"
              >
                https://cuiwah.edu.pk/
              </a>
            </li> */}
          </ul>
        </li>
        <li className="features">
          <h2>Quick Links</h2>
          <ul className="boxFooter">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/reviews">Customer Reviews</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Skills</h2>
          <ul className="boxFooter">
            <li>
              <Link to="/category/graphicdesigning">Graphic Design</Link>
            </li>
            <li>
              <Link to="/category/shopifydev">Shopify Development</Link>
            </li>
            <li>
              <Link to="/category/marketing">Marketing Services</Link>
            </li>
            <li>
              <Link to="/category/videoediting">Video Editing</Link>
            </li>
            <li>
              <Link to="/category/webdevelopment">Web Development</Link>
            </li>
            <li>
              <Link to="/category/writingservices">Writing Services</Link>
            </li>
            
          </ul>
        </li>
      </ul>
      <div className="footer-bottom">
        <p>
          {" "}
          &copy; <span style={{ color: "#7C3D97" }}>Fair ServiceX</span> All
          Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
