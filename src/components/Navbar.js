import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/Fair ServiceX Logo Embossed.png';

import "./styles/navbar.css";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div >
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/" >
            {/* Port<span style={{ color: "#7e22ce" }}>folio</span> */}
            <img src={logo} alt="logo" width="185" height="65" style={{objectFit:'contain'}}/>
          </NavLink>
         
        </div>

        <div>
        <button className="navbar-toggler" onClick={handleNavToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services">Our Services</NavLink>
              <ul>
              <li className="nav-item GDList">
                <NavLink to="/category/graphicdesigning">Graphic Design</NavLink>
              <ul className="GD">
              <li className="nav-item ">
                <NavLink to="/category/graphicdesigning">Social Media Design</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/copywriting">Logo Design</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Business Profile</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Poster Design</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Brochure Design</NavLink>
              </li>
             
              </ul>
              </li>
              <li className="nav-item SEList">
                <NavLink to="/category/copywriting">Shopify Expert</NavLink>
                <ul className="SE">
              <li className="nav-item ">
                <NavLink to="/category/graphicdesigning">Store Development</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/copywriting">Store Design</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Google Merchant Center</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Google Ads</NavLink>
              </li>
              
             
              </ul>
              </li>
              <li className="nav-item MSList">
                <NavLink to="/category/gamedevelopment">Marketing Services</NavLink>
                <ul className="MS">
              <li className="nav-item ">
                <NavLink to="/category/graphicdesigning">Digital Marketing</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/copywriting">Social Media Marketing</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Search Engine Optimization (SEO)</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">App Store Optimization</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Social Media Management</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Email Marketing</NavLink>
              </li>
              
             
              </ul>
              </li>
              <li className="nav-item VEList ">
                <NavLink to="/category/gamedevelopment">Video Editing</NavLink>
                <ul className="VE">
              <li className="nav-item ">
                <NavLink to="/category/graphicdesigning">Video Ads</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/copywriting">Product Video</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Video Animation</NavLink>
              </li>
              
             
              </ul>
              </li>
              <li className="nav-item WDList">
                <NavLink to="/category/gamedevelopment">Web Development</NavLink>
                <ul className="WD">
              <li className="nav-item ">
                <NavLink to="/category/graphicdesigning">Wordpress Development</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/copywriting">MERN Stack Development</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/gamedevelopment">Full Stack Development</NavLink>
              </li>
            
             
              </ul>
              </li>
              <li className="nav-item WSList">
                <NavLink to="/category/gamedevelopment">Writing Services</NavLink>
                <ul className="WS">
              <li className="nav-item ">
                <NavLink to="/category/graphicdesigning">Content Writing</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/category/copywriting">Copy Writing</NavLink>
              </li>
             
             
              </ul>
              </li>

              </ul>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/category/graphicdesigning">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reviews">Client Reviews</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team">Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
           
          </ul>
        </div>
      </nav>
    

      <div className={`navbar-collapse ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to="/services">Our Services</NavLink>
              {/* <ul>
              <li className="nav-item ">
                <NavLink to="/graphicdesign">Graphic Design</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/shopifyexpert">Shopify Expert</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/digitalmarketing">Digital Marketing</NavLink>
              </li>

              </ul> */}
            </li>
          {/* <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li> */}
          <li>
            <NavLink to="/category/graphicdesigning">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">Clients Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
         
         
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
