import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/S1.jpg'
import img2 from '../img/S2.jpg'
import img3 from '../img/S3.jpg'

function SliderApp() {
  return (
    <div>
        
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default SliderApp