import React from 'react'
import '../styles/ProductReviewCard.css'
const ProductReviewCard = ({image,name,price,review,index}) => {
  return (
    <div className="productReviewCard">
<img src={image} alt={index} />
<h4>{review}</h4>
<div><p>{name}</p>
<span>{price}</span></div>
    </div>
  )
}

export default ProductReviewCard
