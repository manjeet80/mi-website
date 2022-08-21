import React from 'react'

import '../styles/StarProduct.css'

const StarProduct = ({card}) => {
  return (
    <div className='starproduct'>
     <div>
        <div><a href={card[0].url}><img src={card[0].image} alt="" /></a></div>
     </div>
     <div>
        <a href={card[1].url}><img src={card[1].image} alt="" /></a>
        <a href={card[2].url}><img src={card[2].image} alt="" /></a>
        <a href={card[3].url}><img src={card[3].image} alt="" /></a>
     </div>
    </div>
  )
}

export default StarProduct
