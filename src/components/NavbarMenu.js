import React, { useState,useEffect } from 'react'
import NavCard from './NavCard'
import '../styles/NavbarMenu.css'

const NavbarMenu = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
 
    const [miPhonesToggle, setMiPhonesToggle] = useState(false);
    const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);


    useEffect(()=>{
        if (window.location.pathname === "/miphones") {
            return setMiPhonesToggle(true)
        }
        if (window.location.pathname === "/redmiphones") {
            return  setRedmiPhonesToggle(true)
        }
        if (window.location.pathname === "/tv") {
            return setTvToggle(true)
        }
        if (window.location.pathname === "/laptop") {
            return  setLaptopToggle(true)
        }
        if (window.location.pathname === "/lifestyle") {
            return setFitnessToggle(true)
        }
        if (window.location.pathname === "/home") {
            return setHomeToggle(true)
        }
        if (window.location.pathname === "/radio") {
            return setAudioToggle(true)
        }
        if (window.location.pathname === "/accessories") {
            return setAccessoriesToggle(true)
        }
    },[])
 
    return (
    <div className='NavbarMenu'>
    { miPhonesToggle ? miPhones.map((item,index)=>(
        <NavCard key={item.image} index={index} name={item.name}image={item.image}price={item.price}/>
      )):null
    }
       { redmiPhonesToggle ? redmiPhones.map((item,index)=>(
        <NavCard key={item.image} index={index} name={item.name}image={item.image}price={item.price}/>
      )):null
    }
       { tvToggle ? tv.map((item,index)=>(
        <NavCard key={item.image} index={index} name={item.name}image={item.image}price={item.price}/>
      )):null
    }
       { laptopToggle ? laptop.map((item,index)=>(
        <NavCard key={item.image} index={index} name={item.name}image={item.image}price={item.price}/>
      )):null
    }
       { fitnessToggle ? fitnessAndLifeStyle.map((item,index)=>(
        <NavCard key={item.image} index={index} name={item.name}image={item.image}price={item.price}/>
      )):null
    }
       { homeToggle ? home.map((item,index)=>(
        <NavCard key={item.image} index={index} name={item.name}image={item.image}price={item.price}/>
      )):null
    }
       { audioToggle ? audio.map((item,index)=>(
        <NavCard key={item.image} index={index} name={item.name}image={item.image}price={item.price}/>
      )):null
    }
       { accessoriesToggle ? accessories.map((item,index)=>(
        <NavCard key={item.image} index={index} name={item.name}image={item.image}price={item.price}/>
      )):null
    }
    </div>
  )
}

export default NavbarMenu
