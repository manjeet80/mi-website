import React from 'react'
import '../styles/Navbar.css'
import{FaSearch} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
<a href="https://www.mi.com/in/?utm_source=google&utm_medium=cpc&utm_campaign=[A_BR[SEM_B[MiBRAND_S]20190102]&gclid=CjwKCAjw_b6WBhAQEiwAp4HyIFD5vFe5xnXhqRGtwotPYERl2F0krH5zGWeioHY8jWgHwIwlbX0YmhoCFEcQAvD_BwE"><img src="../images/mi-logo.webp" width={'60px'} alt="logo" /></a>
      </div>
      <a href="/miphones" className='nav-links'>Mi Phones</a>
      <a href="/redmiphones" className='nav-links'>Redmi Phones</a>
      <a href="/tv" className='nav-links'>TV</a>
      <a href="/laptop" className='nav-links'>Laptops</a>
      <a href="/lifestyle" className='nav-links'>Fitness & Lifestyle</a>
      <a href="/home" className='nav-links'>Home</a>
      <a href="/radio" className='nav-links'>Radio</a>
      <a href="/accessories" className='nav-links'>Accessories</a>
    <div className='search'>
    <input type="text" name='text' placeholder='Search' className='input-text' />
    <FaSearch className='search-fa'/>
    </div>
    </div>
  )
}

export default Navbar
