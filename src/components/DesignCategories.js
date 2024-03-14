import React from 'react'
import { Link } from 'react-router-dom'

const DesignCategories = () => {
  return (
    <>
    <h1 className="workCategHead">GRAPHIC DESIGN CATEGORIES</h1>
      <div className="workCateg">
        <Link to="/gdcategory/socialmediadesign">Social Media Designs</Link>
        <Link to="/gdcategory/posterdesign">Poster Designs</Link>
        <Link to="/gdcategory/logodesign">Logo Designs</Link>
        <Link to="/gdcategory/companyprofile">Company Profiles</Link>
        <Link to="/gdcategory/brochuredesign">Brochure Designs</Link>
      
      </div>
    </>
  )
}

export default DesignCategories