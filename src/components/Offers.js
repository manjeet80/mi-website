import React from 'react'
import OfferCard from './OfferCard'
import '../styles/Offers.css'
const Offers = ({offer}) => {
  return (
    <div className='offers'>
  {
    offer.map((item,index)=>(
        <OfferCard key={item.image} image={item.image}index={index} link={item.url}/>
    ))
  }
    </div>
  )               
}

export default Offers
