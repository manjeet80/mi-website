import React from 'react'
import '../styles/HotAccessoriesCard.css'
const HotaccessoriesCard = ({name,price,image,link,index}) => {
  return (
    <div className='hotAccessoriesCard'>
     <a href={link}> <img src={image} alt={index} />
      <p>{name}</p>
      <span>{price}</span></a>
    </div>
  )
}

export default HotaccessoriesCard
