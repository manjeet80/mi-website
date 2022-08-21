import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PreNav from './components/PreNav';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import {data} from './data/All-data'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMain from './components/HotAccessoriesMain';
import HotAccessories from './components/HotAccessories';
import ProductReview from './components/ProductReview';
import Videos from './components/Videos';
import LastSlider from './components/LastSlider';
import Footer from './components/Footer';
import NavbarMenu from './components/NavbarMenu';

function App() {
  return (
    <div className="App">
    <Router>
    <PreNav/>
    <Navbar/>
    <NavbarMenu miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle}home={data.home}audio={data.audio} accessories={data.accessories}/>
    <Slider banner={data.banner}/>
   <Offers offer={data.offer}/>
   <Heading text={"STAR PRODUCTS"}/>
   <StarProduct card={data.starProduct}/>
   <Heading text={"HOT ACCESSORIES"}/>
   <HotAccessoriesMain/>
   <Routes>
    <Route path="/music" element={ <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}></Route>  
   
    <Route path='/smartDevice'element={ <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}></Route>  
    
    <Route path='/home' element={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}></Route>  
    
    <Route path='/lifeStyle' element={ <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}></Route>  
    
    <Route path='mobileAccessories' element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}></Route>  
   </Routes>

   <Heading text={"PRODUCT REVIEWS"}/>
   <ProductReview productReviews={data.productReviews}/>
   <Heading text={"VIDEOS"}/>
    <Videos video={data.videos}/>
    <Heading text={"IN THE PRESS"}/>
    <LastSlider end={data.banner.end}/>
    <Footer footer={data.footer}/>
    </Router>
    </div>
  );
}

export default App;
