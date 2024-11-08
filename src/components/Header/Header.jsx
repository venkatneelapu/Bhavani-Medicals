import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
       <div className="header-contents">
        <h2>Order Medicine</h2>
        <p>Explore a wide selection of medicines and health products,
           carefully sourced to provide the best care for your 
          well-being. Our mission is to meet your health needs with trusted, 
          high-quality products and expert advice, 
          ensuring your wellness is always our top priority.
        </p>
        <button>Order Now</button>
       </div>
    </div>
  )
}

export default Header
