import React from 'react'
import '../styles/OfferCard.css'
const OfferCard = ({image,link,index}) => {
  return (
    <div className='OfferCard'>
      <a href={link}><img src={image} alt={index} /></a>
    </div>
  )
}

export default OfferCard
