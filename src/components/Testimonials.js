import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles/testimonial.css';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const testimonialsData = [
    {
      name: 'xanjs4',
      location: 'Netherlands',
      rating: 5,
      content: 'Awesome work!! Very happy with it :-)',
      link: 'https://www.fiverr.com/fairboy7',
    },
    {
      name: 'chavasrei',
      location: 'United States',
      rating: 5,
      content: 'The seller delivered a good product...',
      link: 'https://www.fiverr.com/fairboy7',
    },
    {
        name: 'george_five',
        location: 'Greece',
        rating: 5,
        content: 'Quick and high quality service. The seller is communicative...',
        link: 'https://www.fiverr.com/fairboy7',
      },
      {
        name: 'donnelldurden',
        location: 'United States',
        rating: 5,
        content: 'great work and excellent communication',
        link: 'https://www.fiverr.com/fairboy7',
      },
      {
        name: 'rosie_white',
        location: 'Pakistan',
        rating: 5,
        content: 'Good Work and On time',
        link: 'https://www.fiverr.com/fairboy7',
      },
      {
        name: 'shahzaman_riaz',
        location: 'United Kingdom',
        rating: 5,
        content: 'Perform a well job!! Will get-InTouch with him again and again. HIGHLY RECOMMENDED',
        link: 'https://www.fiverr.com/fairboy7',
      },
      {
        name: 'jacobbritton187',
        location: 'United States',
        rating: 5,
        content: 'Great experience, highly recommend!',
        link: 'https://www.fiverr.com/fairboy7',
      },
      {
        name: 'drevian',
        location: 'United States',
        rating: 5,
        content: 'Love the service! Will differently be working with them again!',
        link: 'https://www.fiverr.com/fairboy7',
      },
     
    // Add more testimonials here...
  ];

  const totalSlidesDesktop = testimonialsData.length;
  const totalSlidesMobile = testimonialsData.length - 2;

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Change this to 1 for smooth navigation
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  return (
    <>
      {/* <!-- testimonials --> */}
      <section className="testimonials" data-aos="slide-left">
   
        <h1 className='allText animated-buttonH'> <span></span>
  <span></span>
  <span></span>
  <span></span>OUR CLIENTS SAY</h1>
        <p className="f_para " style={{ margin: '0 2%' }}>
          Discover what our valued customers have to say about their experiences. Read genuine reviews that reflect the
          satisfaction and trust they've placed in our products/services.
        </p>

        <div className="slider-container">
          {/* Slide content */}
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-col">
                <div>
                  <h3 className="rName">{testimonial.name}</h3>
                  <h3 className="rName">{testimonial.location}</h3>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i}>
                      <FaStar />
                    </i>
                  ))}
                  <p>{testimonial.content}</p>
                  <a style={{ color: '#fff' }} href={testimonial.link} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </Slider>

         {/* Dots */}
         <div className="slider-dots">
            {[...Array(window.innerWidth >= 1024 ? totalSlidesMobile : totalSlidesDesktop)].map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
