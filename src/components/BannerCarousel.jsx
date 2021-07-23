import React from "react"
import { Carousel } from "react-bootstrap"
import Car from "../images/benefits-car.png"
import Benefits1 from "../images/benefits1.jpg"
import Benefits2 from "../images/benefits2.jpg"
const BannerCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Car} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Benefits1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Benefits2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  )
}

export default BannerCarousel
