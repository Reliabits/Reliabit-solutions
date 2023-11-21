import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slider3.png'
import './home.css'
function Slider() {
  return (
    <>
      <Carousel className='height_slider'>
      <Carousel.Item >
        <img className='d-block image_slide ' 
          src={slider1}
          alt='first'
        />
        <Carousel.Caption>
          <h3 className='text-dark'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block image_slide' 
          src={slider2}
          alt='first'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block image_slide' 
          src={slider3}
          alt='first'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Slider;
