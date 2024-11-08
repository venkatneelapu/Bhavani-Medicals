import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Explore a comprehensive selection of essential medicines, 
              curated with the utmost quality and care. 
              Our mission is to meet your healthcare needs and enhance your well-being, 
              one trusted product at a time.
        </p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Contact Us</h2>
            <ul>
            <li>9603814064</li>
            <li>Contact: SriBhavani-Medicals.onrender.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 &#169; SriBhavaniMedicals.onrender.com. All Rights Reserved</p>
    </div>
  )
}

export default Footer
