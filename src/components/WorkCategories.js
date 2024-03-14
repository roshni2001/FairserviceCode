// WorkCategories.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/WorkCategories.css';

const WorkCategories = () => {
  return (
    <>
      <h1 className="workCategHead">CATEGORIES</h1>
      <div className="workCateg">
        <Link to="/category/graphicdesigning">Graphic Design</Link>
        <Link to="/category/shopifydev">Shopify Expert Services</Link>
        <Link to="/category/marketing">Marketing Services</Link>
        <Link to="/category/videoediting">Video Editing</Link>
        <Link to="/category/webdevelopment">Web Development</Link>
        <Link to="/category/writingservices">Writing Services</Link>
        <Link to="/category/seo">SEO</Link>
      </div>
    </>
  );
};

export default WorkCategories;
