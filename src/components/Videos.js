import React from 'react'
import VideosCard from './VideosCard'
import '../styles/Videos.css'
const Videos = ({video}) => {
  return (
    <div className='videos'>
      {
        video.map((item,index)=>(
            <VideosCard key={item.image}index={index}name={item.name}image={item.image}/>
        ))
      }
    </div>
  )
}

export default Videos
