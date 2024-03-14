import React, { useState } from 'react';
import './styles/ContactUsComp.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsComp = () => {
  const notify = () => {
    toast.error('Please fill in all the required fields!');
  };

  const notify2 = () => {
    toast.success('Message Sent!');
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      notify();
      return;
    }

    try {
      const response = await fetch('https://fairservicex-backend.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        notify2();
        // Handle success, for example, show a success message to the user
      } else {
        // Handle error, for example, show an error message to the user
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='formConatiner'>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className='contactFormHead'>Send Your Message to Us!</h1>
        <input
          type="text"
          placeholder="Name*"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Message*..."
          rows={5}
          cols={6}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <input className="SendBtn" type="submit" value="Send" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUsComp;
