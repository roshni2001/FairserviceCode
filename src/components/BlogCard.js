import React from 'react'
import { Link } from 'react-router-dom';
import './styles/blogCard.css';
const BlogCard = () => {
    const blogcard_Data = [
        {
          title: "Graphic Design",
          text: "At FAIR ServiceX, harness the impact of visual storytelling through our Graphic Design Services. Elevate your brand on social media with captivating designs. From unique logos to compelling company profiles, we craft visuals that resonate. Our services include eye-catching banners, posters, and informative brochures tailored to make your brand stand out in the digital landscape.",
        //   image: `${GraphicDes}`,
          link: "/blog/graphicdesigning",
        },
        {
          title: "Social Media Marketing ",
          text: "Fuel brand growth with FAIR ServiceX Marketing Services. Our expert strategies encompass Digital Marketing, Social Media Marketing, SEO, and App Store Optimization. Seamlessly manage social media with our Social Media Management and engage precision through targeted Email Marketing. We are your partners in navigating the dynamic digital landscape, turning visions into reality.",
        //   image: `${background}`,
          link: "/blog/marketing",
        },
        {
          title: "Shopify Development",
          text: "Confidently embark on your e-commerce journey with our expert Shopify Services. We specialize in seamless Store Development, ensuring your online storefront exceeds user expectations. Elevate your brand with captivating Store Design, integrate Google Merchant Center for enhanced visibility, and drive targeted traffic with strategic Google Ads campaigns. We're your committed Shopify experts transforming digital storefronts into thriving e-commerce destinations.",
        //   image: `${shopify}`,
          link: "/blog/shopifydev",
        },
        
        {
          title: "Video Editing",
          text: "Immerse your brand in compelling visual storytelling through our Video Editing services. Elevate your narrative with meticulously crafted videos that captivate and resonate deeply. Our skilled editors infuse creativity and precision into every frame, ensuring your message resonates with impactful storytelling. Whether it's promotional videos or engaging social media content, we excel in bringing your vision to life and enhancing your brand's digital presence with our expert touch.",
        //   image: `${videoEditing}`,
          link: "/blog/videoediting",
        },
        {
          title: "Content Writing",
          text: "Dive into impactful communication with our Writing Services. Crafted by our team, our content tells your brand's story authentically. From engaging website content to persuasive copy, we elevate your online presence. Unlock the power of effective communication with our strategic Copywriting expertise, dedicated to exceeding your expectations in building a strong digital identity.",
        //   image: `${ContentWriting}`,
          link: "/blog/writingservices",
        },
        {
          title: "Web Development",
          text: "Unlock your online potential with cutting-edge Web Development. Dive into dynamic WordPress sites tailored to your needs. Harness MERN stack for robust web apps. Our Full-stack Stack Development ensures seamless user experiences. Committed to innovation, we transform ideas into digital reality, reflecting your brand essence. Explore limitless possibilities with us as your trusted web development partner",
        //   image: `${web}`,
          link: "/blog/webdevelopment",
        },
        // {
        //   title: "Card 4",
        //   text: "This is the fourth card",
        //   image: `${background}`,
        // },
      ];
  return (
    <>

       


<div className="blogCardContainer">
{blogcard_Data.map((card, index) => (
         <div className="blogCard">
          <h1>{card.title}</h1>
          <p>{card.text}</p>
          <Link to={card.link} className='blogButn'><button>Read More</button></Link>
         </div>
        ))}
       
</div>



    
    
    </>
  )
}

export default BlogCard