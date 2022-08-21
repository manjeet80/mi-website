import React from 'react'
import {FaPlay} from 'react-icons/fa'
import '../styles/VideosCard.css'
const VideosCard = ({image,name}) => {
  return (
    <div className='videosCard' style={{backgroundImage:`url(${image})`}} >
  <a href="/"><FaPlay/></a>
  <p>{name}</p>
    </div>
  )
}

export default VideosCard
