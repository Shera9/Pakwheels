// MultiRowCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data for each section
const sections = [
  { 
    id: 1, 
    title: 'Section 1', 
    items: [
      { id: 1, image: '/images/image1.jpg', heading: 'Heading 1', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, image: '/images/image2.jpg', heading: 'Heading 2', paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, image: '/images/image3.jpg', heading: 'Heading 3', paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { id: 4, image: '/images/image4.jpg', heading: 'Heading 4', paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { id: 5, image: '/images/image5.jpg', heading: 'Heading 5', paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      { id: 6, image: '/images/image6.jpg', heading: 'Heading 6', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ]
  },
  { 
    id: 2, 
    title: 'Section 2', 
    items: [
      { id: 7, heading: 'Heading 7' },
      { id: 8, heading: 'Heading 8' },
      { id: 9, heading: 'Heading 9' },
      { id: 10, heading: 'Heading 10' }
    ]
  },
  { 
    id: 3, 
    title: 'Section 3', 
    items: [
      { id: 11, heading: 'Heading 11' },
      { id: 12, heading: 'Heading 12' },
      { id: 13, heading: 'Heading 13' }
    ]
  }
  // Add more sections as needed
];

// Styled components
const CarouselWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

`;

const CarouselItem = styled.div`
  text-align: center;
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const MultiRowCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of items to show at once
    slidesToScroll: 5, // Number of items to scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {sections.map(section => (
          <div key={section.id}>
            {section.items.map(item => (
              <CarouselItem key={item.id}>
                {item.image && <ItemImage src={item.image} alt="Item" />}
                <h2>{item.heading}</h2>
                {item.paragraph && <p>{item.paragraph}</p>}
              </CarouselItem>
            ))}
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default MultiRowCarousel;
