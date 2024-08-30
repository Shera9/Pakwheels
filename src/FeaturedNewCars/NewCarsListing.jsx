
import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewCars.css';
import NewCarsData from './NewCarsData';

const NewCarsListing = ({ cards }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

  return (
      <Slider {...settings}>
        <CarouselWrapper>  
      
   
      <CarouselContainer>
 
        {cards.map((card, index) => (

          <NewCarsData key={index} imageSrc={card.image} title={card.title} price={card.price} location={card.reviews} />

        ))}
      </CarouselContainer>

    </CarouselWrapper>    
    </Slider>
  );
};

export default NewCarsListing;

const CarouselWrapper = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;

`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
  
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);
  background: white;
  border-radius: 100%;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: grey;
  ${(props) => (props.left ? 'left: 0px;' : 'right: 0px;')}

  &:hover{
    background: #518ecb;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem; /* Decrease font size for smaller screens */
    padding: 4px 8px; /* Adjust padding for smaller screens */
  }
`;
