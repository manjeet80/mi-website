import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../styles/ProductReview.css'
const ProductReview = ({productReviews}) => {
  return (
    <div className='ProductReview'>
      {
        productReviews.map((item,index)=>(
            <ProductReviewCard key={item.image} index={index} name={item.name} image={item.image}review={item.review}price={item.price}/>
        ))
      }
    </div>
  )
}

export default ProductReview
