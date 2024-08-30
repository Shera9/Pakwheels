
import React, { useState } from 'react';
import styled from 'styled-components';
import ManagedCards from './ManagedCards';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ManagedCars.css';

const ManagedListing = ({ cards }) => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        //   dots: true
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        //   dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
    <Row>
    <Slider {...settings}>
    {cards.map((card, index) => (
      <ManagedCards key={index} imageSrc={card.image} title={card.title} price={card.price} location={card.location} />
   
        ))}
    </Slider>
      </Row>
      </Container>
  );
};

export default ManagedListing;
const Container = styled.div`

`
const Row = styled.div`


}
`
