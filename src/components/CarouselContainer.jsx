import React from "react"
import { Carousel } from "react-bootstrap"

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="photo__container">
        <img
          className="photo__container--photo"
          src="https://bit.ly/2QNWUBq"
          alt="First slide"
          loading="lazy"
        />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="photo__container">
        <img
          className="photo__container--photo"
          src="https://bit.ly/2QNWUBq"
          alt="First slide"
                    loading="lazy"

        />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="photo__container">
        <img
          className="photo__container--photo"
          src="https://bit.ly/2QNWUBq"
          alt="First slide"
                    loading="lazy"

        />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default CarouselContainer
