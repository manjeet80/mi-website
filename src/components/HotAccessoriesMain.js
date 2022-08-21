import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/HotAccessoriesMain.css'
const HotAccessoriesMain = () => {
  return (
    <div className='hotAccessoriesMain'>
      <Link to="/music" className="accessoriesLink">Music Store</Link>
      <Link to="/smartDevice" className="accessoriesLink">Smart Devices</Link>
      <Link to="/home" className="accessoriesLink">Home</Link>
      <Link to="/lifeStyle" className="accessoriesLink">Lifestyle</Link>
      <Link to="/mobileAccessories" className="accessoriesLink">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMain
