import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("Home")
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Medicine</a>
        <a href='#contact' onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><FaCartShopping /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Log in</button>
      </div>
    </div>
  )
}

export default Navbar
