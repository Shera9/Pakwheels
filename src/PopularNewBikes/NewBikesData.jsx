
import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewBikes.css';



const NewBikesData = ({ imageSrc, title, price,reviews }) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    
    <CardWrapper>
         {/* <Slider {...settings}> */}
      <Image src={imageSrc} alt={title} />
      
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Location>{reviews}</Location>

     {/* </Slider> */}
    </CardWrapper>
  );
};

export default NewBikesData;

const CardWrapper = styled.div`
  flex: 0 0 24%; /* Each card takes 25% of the carousel width */
  padding: 10px;
  box-sizing: border-box;
 background: white;
   justify-content: space-between;
   margin: 2px 5px;
   border: 1px solid #f0f0f0;
   
   @media (max-width: 1200px) {
    flex: 0 0 32%; /* Adjusted for smaller screens like tablets */
  }
  @media (max-width: 992px) {
    flex: 0 0 48%; /* Adjusted for medium screens like large phones */
    margin:0px;
    
  }
  @media (max-width: 768px) {
    flex: 0 0 100%; /* Full width for smaller screens like phones */
    margin:  0; /* Adjust margin for spacing */
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 176px;
`;

const Title = styled.h3`
  margin: 10px 0;
  text-align: start;
  color:#233d7b;
  @media (max-width: 1200px) {
    margin: 10px 20px;
  }
  @media (max-width: 992px) {
    margin: 10px 60px;
    
  }
  @media (max-width: 770px) {
    margin: 10px 120px;
  }
  @media (max-width: 600px) {
    margin: 10px 40px;
  }
`;

const Price = styled.p`
  margin-top: 5px;
  font-weight: bold;
  text-align: start;
  color: #3eb549;
  @media (max-width: 1200px) {
    margin: 10px 20px;
  }
  @media (max-width: 992px) {
    margin: 10px 60px;
    
  }
  @media (max-width: 770px) {
    margin: 10px 120px;
  }
  @media (max-width: 600px) {
    margin: 10px 40px;
  }
`;
const Location = styled.p`
text-align: start;
color: #7b8397;
@media (max-width: 1200px) {
  margin: 10px 20px;
}
@media (max-width: 992px) {
  margin: 10px 60px;
  
}
@media (max-width: 770px) {
  margin: 10px 120px;
}
@media (max-width: 600px) {
  margin: 10px 40px;
}
`

