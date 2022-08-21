import React from 'react'
import '../styles/Heading.css'
const Heading = ({text}) => {
  return (
    <div className='heading'>
      <div></div>
      <h4>{text}</h4>
      <div></div>
    </div>
  )
}

export default Heading
