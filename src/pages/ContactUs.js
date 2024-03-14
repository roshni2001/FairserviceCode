import React, { useEffect } from 'react'
import AboutHeroSec from '../components/AboutHeroSec'
import Capabilities from '../components/Capabilities'
import ContactUsComp from '../components/ContactUsComp'
import ContactAnim from '../components/ContactAnim'
import GetInTouch from '../components/GetInTouch'
import contactBg from '../images/contactBg.jpg'
import WhatsAppIcon from '../components/WhatsAppIcon'
const ContactUs = () => {
  useEffect(() => {
    document.title = 'Fair ServiceX - Contact Us';
    return () => {
      document.title = 'Fair ServiceX';
    };
  }, []);
  return (
   
    <div /*style={{ backgroundImage: `url(${contactBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}*/>
    {/* Add other components/content here */}
    <ContactAnim title='Contact Us' text="Let's connect and make magic happen!" />
    <ContactUsComp />
    <GetInTouch />
    <WhatsAppIcon/>
  </div>
   
  )
}

export default ContactUs