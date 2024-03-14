import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom';
import './styles/services.css';
const items = [
  {
    heading: 'Graphic Design',
    id:'gd',
    subContents: [
      { subHeading: 'Social Media Design', content: 'Our Social Media Design service transforms your online presence. We create engaging visuals that resonate with your audience, enhancing your brand’s identity. Our designs are not only aesthetically pleasing but also strategically crafted to drive engagement and growth on your social media platforms.' },
      { subHeading: 'Logo Design', content: 'Our Logo Design service crafts unique and memorable logos that encapsulate your brand’s identity. We combine creativity with strategic thinking to design logos that not only capture attention but also embody your brand’s values and vision, making a lasting impression on your audience.' },
      { subHeading: 'Business Profile', content: 'We specialize in Business Profile Design that effectively showcases your business. Our designs highlight your brand’s vision, mission, and unique selling propositions in a compelling manner. We aim to create profiles that not only represent your business accurately but also engage and captivate your target audience.' },
      { subHeading: 'Poster Design', content: 'Our Poster Design service brings your message to life. We create visually striking posters that effectively communicate your brand’s message. Our designs are tailored to your needs, ensuring they capture attention, convey information clearly, and inspire action from your target audience.' },
      { subHeading: 'Brochure Design', content: 'We excel in designing brochures that are both engaging and informative. Our designs effectively encapsulate your brand’s essence, presenting your offerings in a way that resonates with your audience. We strive to create brochures that not only reflect your brand’s identity but also stimulate interest and curiosity.' },
    ]
  },
  {
    heading: 'Shopify Expert',
    id:'se',
    subContents: [
      { subHeading: 'Store Development', content: 'We specialize in Shopify Store Development, creating e-commerce platforms that are both user-friendly and conversion-focused. Our expert team ensures your online store is not only visually appealing but also functionally robust, providing a seamless shopping experience for your customers.' },
      { subHeading: 'Store Design', content: 'We offer Shopify Store Design services that focus on aesthetics and user experience. Our designs are tailored to your brand, creating an online store that is visually engaging and easy to navigate. We aim to provide your customers with a seamless and enjoyable shopping experience.' },
      { subHeading: 'Google Merchant Center', content: 'We assist businesses in leveraging Google Merchant Center, a key tool for e-commerce success. We help you upload your product data and make it available to Google Shopping and other Google services. We aim to optimize your product visibility and enhance your online sales performance.' },
      { subHeading: 'Google Ads', content: 'We excel in managing Google Ads, a powerful tool for online advertising. We create and optimize ad campaigns tailored to your business goals, ensuring maximum visibility and reach. Our focus is on driving relevant traffic to your website, enhancing your online presence, and boosting conversions.' },
    ]
  },
  {
    heading: 'Marketing Services',
    id:'ms',
    subContents: [
      { subHeading: 'Digital Marketing', content: 'We provide comprehensive Digital Marketing services. We strategize and implement effective marketing campaigns across various digital platforms. Our goal is to increase your brand’s online visibility, engage with your target audience, and drive growth. We use data-driven strategies to achieve measurable results for your business.' },
      { subHeading: 'Social Media Marketing', content: 'We offer strategic Social Media Marketing services. We create and manage campaigns across various social platforms to increase your brand’s reach and engagement. Our approach is tailored to your business, ensuring your message resonates with your target audience, driving growth and brand awareness.' },
      { subHeading: 'Search Engine Optimization (SEO)', content: 'We offer expert Search Engine Optimization services. We employ proven strategies to enhance your website’s visibility on search engines, driving organic traffic to your site. Our focus is on improving your site’s ranking for relevant keywords, ultimately boosting your online presence and business growth.' },
      { subHeading: 'App Store Optimization', content: 'We provide App Store Optimization services to enhance your app’s visibility in app stores. We implement strategies to improve your app’s ranking, driving more downloads. Our approach is tailored to your app’s unique needs, ensuring it reaches your target audience effectively and efficiently.' },
      { subHeading: 'Social Media Management', content: 'We excel in Social Media Management. We handle your social media platforms, curating content that resonates with your audience. We aim to foster meaningful engagement, build a strong online community for your brand, and drive impactful conversations that enhance your brand’s digital presence.' },
      { subHeading: 'Email Marketing', content: 'We offer tailored Email Marketing services. We design and execute effective email campaigns that resonate with your audience, driving engagement and conversions. Our strategies are data-driven, ensuring your message reaches the right people at the right time, and fostering customer loyalty and business growth.' },
    ]
  },
  {
    heading: 'Video Editing',
    id:'ve',
    subContents: [
      { subHeading: 'Video Ads', content: 'We create compelling Video Ads that capture your brand’s story. Our team crafts visually stunning and engaging videos that effectively convey your message to your target audience. We aim to create ads that not only attract attention but also inspire action and drive results.' },
      { subHeading: 'Product Video', content: 'We specialize in Product Video creation. We produce high-quality videos that showcase your product’s features and benefits in an engaging manner. Our videos are designed to capture your audience’s attention, provide valuable information, and ultimately drive purchase decisions.' },
      { subHeading: 'Video Animation', content: 'We offer Video Animation services that bring your ideas to life. We create captivating animations that effectively communicate your brand’s message. Our animations are not only visually stunning but also crafted to engage your audience, making your brand memorable and impactful.' },
    ]
  },
  {
    heading: 'Web Development',
    id:'wd',
    subContents: [
      { subHeading: 'Wordpress Development', content: 'We offer WordPress Development services tailored to your business needs. Our team of experts creates user-friendly and SEO-optimized websites using WordPress. We focus on delivering a website that not only looks great but also performs excellently, enhancing your online presence and business growth.' },
      { subHeading: 'MERN Stack Development', content: 'We provide MERN Stack Development services, creating dynamic and scalable web applications. Our team of experts uses MongoDB, Express.js, React.js, and Node.js to build robust and efficient solutions. We focus on delivering applications that offer excellent performance and user experience, driving your business growth.' },
      { subHeading: 'Full Stack Development', content: 'We offer Full Stack Development services, delivering end-to-end solutions for your business. Our team of experts uses the latest technologies to build scalable and efficient web applications. We focus on creating solutions that offer excellent user experience and drive your business’s digital transformation.' },
    ]
  },
  {
    heading: 'Writing Services',
    id:'ws',
    subContents: [
      { subHeading: 'Content Writing', content: 'We offer professional Content Writing services. Our skilled writers craft engaging and SEO-friendly content that resonates with your audience. We create content that not only communicates your brand’s message effectively but also helps in driving traffic and improving your website’s search engine rankings.' },
      { subHeading: 'Copy Writing', content: 'We provide professional Copywriting services. Our expert writers craft persuasive copy that effectively communicates your brand’s message and compels your audience to take action. We focus on creating copy that not only resonates with your audience but also drives conversions and business growth.' },
    ]
  },
  
];

const Categories = () => {
 

  const location = useLocation(); // to Get the current location
  const { pathname, hash } = location;

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#' 
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname, hash]); // Scroll when the hash changes or the pathname changes

  return (
    <div className='categoriesContainer'>
     {items.map((item, index) => (
  <div key={index}>
  
    <h1 id={item.id} className='allText animated-buttonH'> <span></span>
  <span></span>
  <span></span>
  <span></span>{item.heading}</h1>
    {item.subContents.map((subContent, subIndex) => (
      <div key={subIndex}>
        <h1 className='subhead'>{subContent.subHeading}</h1>
        <p className='f_para'>{subContent.content}</p>
      </div>
    ))}
  </div>
))}

      {/* <Accordion allowZeroExpanded allowMultipleExpanded style={{ marginTop: '15%' }}>
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                {item.heading}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ textAlign: 'justify' }}>
              {item.subContents.map((subContent, subIndex) => (
                <React.Fragment key={subIndex}>
                  <h2>{subContent.subHeading}</h2>
                  <p>{subContent.content}</p>
                </React.Fragment>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion> */}
    </div>
  );
};

export default Categories;
