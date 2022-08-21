import React from 'react'
import '../styles/HotAccessories.css'
import HotAccessoriesCard from './HotaccessoriesCard'

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
      <div>
        <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="" />
      </div>
      <div>
        {
           music && music.map((item,index)=>(
                <HotAccessoriesCard key={item.image} index={index} link={item.url} name={item.name} price={item.price}image={item.image}/>
            ))
        }
            {
            smartDevice && smartDevice.map((item,index)=>(
                <HotAccessoriesCard key={item.image} index={index} link={item.url}name={item.name} price={item.price}image={item.image}/>
            ))
        }
            {
            home && home.map((item,index)=>(
                <HotAccessoriesCard key={item.image} index={index} link={item.url} name={item.name} price={item.price}image={item.image}/>
            ))
        }
            {
           lifeStyle && lifeStyle.map((item,index)=>(
                <HotAccessoriesCard key={item.image} index={index} link={item.url} name={item.name} price={item.price}image={item.image}/>
            ))
        }
            {
             mobileAccessories && mobileAccessories.map((item,index)=>(
                <HotAccessoriesCard key={item.image} index={index} link={item.url} name={item.name} price={item.price}image={item.image}/>
            ))
        }
      </div>
    </div>
  )
}

export default HotAccessories
