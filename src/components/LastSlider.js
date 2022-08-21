import { Carousel, CarouselItem } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const LastSlider = ({ end }) => {
    return (

        <Carousel>
            {
                end.map((item, index) => (
                    <CarouselItem key={item.image} id="banner" interval={1000} keyboard={true}>
                        <img className="d-block w-100" src={item.image} alt={index} id="bannerImage" />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <u>Read more</u>
                        </Carousel.Caption>
                    </CarouselItem>
                ))}
        </Carousel>

    )
}

export default LastSlider
