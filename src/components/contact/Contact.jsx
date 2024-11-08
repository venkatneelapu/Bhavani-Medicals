import React from 'react';
import './contact.css';
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <IoMdMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>neelapu.venkatanaidu@gmail.com</h6>
            <a href="mailto:neelapu.venkatanaidu@gmail.com" className='btn'>Send a message <GrSend /></a>
          </article>
          <article className='contact__option'>
          <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h6>+91 9603814064</h6>
            <a href="https://api.whatsapp.com/send?phone=919603814064" target='_blank' className='btn'>Send a message <GrSend /></a>
          </article>
        </div>

        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' rows="7" required></textarea>
          <button type="submit" className='btn_primary'>Send Message <GrSend /></button>
        </form>
      </div>
      </section>
  )
}

export default Contact;
