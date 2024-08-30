// Carousel.jsx
import React, { useState } from 'react';
import './UsedCars.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img1 from '../Images/CarouselImages/car-ctg-1000cc-cars-c024e94ac3fb686ea9d6c75fa23510e3.svg'
import Img2 from '../Images/CarouselImages/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg'
import Img3 from '../Images/CarouselImages/car-ctg-4-door-e963f64a695358e45eb77bb7e88a971b.svg'
import Img4 from '../Images/CarouselImages/car-ctg-4-seater-e2c46e4513fdb2265d8b7fc4266a3c83.svg'
import Img5 from '../Images/CarouselImages/car-ctg-5-door-90782ef7fc48acfd0e5cb12d4c5af133.svg'
import Img6 from '../Images/CarouselImages/car-ctg-5-seater-e963f64a695358e45eb77bb7e88a971b.svg'
import Img7 from '../Images/CarouselImages/car-ctg-660cc-cars-9bcac91ae02272b5a96f227f9ff1c287.svg'
import Img8 from '../Images/CarouselImages/car-ctg-7-seater-d27959c2ba7631eb38d6e1bdbf46d542.svg'
import Img9 from '../Images/CarouselImages/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg'
import Img10 from '../Images/CarouselImages/car-ctg-big-f4544cb27849733ec3913cb6ad1de0f8.svg'
import Img11 from '../Images/CarouselImages/car-ctg-cheap-819817fc19912941f195e6bbbf52f401.svg'
import Img12 from '../Images/CarouselImages/car-ctg-commercial-172b5e122abc2aa67637a589d8e66449.svg'
import Img13 from '../Images/CarouselImages/car-ctg-diesel-c5e31b4c8531b008107bcb87f7dc7aa7.svg'
import Img14 from '../Images/CarouselImages/car-ctg-electric-95b58ebc551e2f2184ef5a6d2c801d77.svg'
import Img15 from '../Images/CarouselImages/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg'
import Img16 from '../Images/CarouselImages/car-ctg-hybrid-4e5c66c7118afcd0ad9416d420ad88a3.svg'
import Img17 from '../Images/CarouselImages/car-ctg-imported-9490d70681ac77a13a0d0944bc9839cc.svg'
import Img18 from '../Images/CarouselImages/car-ctg-japanese-6fb37c0e61142fc12af2b2e73a2a11ff.svg'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Sample data for each section
const sections = [
  { 
    id: 1, 
    title: 'Category', 
    items: [
      { id: 1, image: `${Img1}`, heading: 'Automatic cars' },
      { id: 2, image: `${Img2}`, heading: 'Family Cars' },
      { id: 3, image: `${Img3}`, heading: '5 Seater' },
      { id: 4, image: `${Img4}`, heading: 'Small cars' },
      { id: 5, image: `${Img5}`, heading: 'Big cars' },
      { id: 6, image: `${Img6}`, heading: '4 Door' },
      { id: 7, image: `${Img7}`, heading: 'Automatic cars' },
      { id: 8, image: `${Img8}`, heading: 'Family Cars' },
      // { id: 9, image: `${Img9}`, heading: '5 Seater' },
      // { id: 10, image: `${Img10}`, heading: 'Small cars' },
    //   { id: 11, image: `${Img11}`, heading: 'Big cars' },
    //   { id: 12, image: `${Img12}`, heading: '4 Door' },
    //   { id: 13, image: `${Img13}`, heading: '4 Door' },
    //   { id: 14, image: `${Img14}`, heading: 'Automatic cars' },
    //   { id: 15, image: `${Img15}`, heading: 'Family Cars' },
    //   { id: 16, image: `${Img16}`, heading: '5 Seater' },
    //   { id: 17, image: `${Img17}`, heading: 'Small cars' },
    //   { id: 18, image: `${Img18}`, heading: 'Big cars' },
    //   { id: 19, image: `${Img12}`, heading: '4 Door' },
      
    ]
  },
  { 
    id: 2, 
    title: 'City', 
    items: [
      { id: 20, heading: 'Lahore' },
      { id: 21, heading: 'Karachi' },
      { id: 22, heading: 'Islamabad' },
      { id: 23, heading: 'Rawalpindi' },
      { id: 24, heading: 'Peshawar' },
      { id: 25, heading: 'Faisalabad' },
      { id: 26, heading: 'Multan' },
      { id: 27, heading: 'Gujranwala' },
    ]
  },
  { 
    id: 3, 
    title: 'Make', 
    items: [
      { id: 28, heading: 'Suzuki' },
      { id: 29, heading: 'Toyota' },
      { id: 30, heading: 'Honda' },
      { id: 31, heading: 'Daihatsu' },
      { id: 32, heading: 'Nissan' },
      { id: 33, heading: 'KIA' },
      { id: 32, heading: 'Nissan' },
      { id: 33, heading: 'KIA' }
    ]
  },
  { 
    id: 4, 
    title: 'Models', 
    items: [
      { id: 20, heading: 'Corolla' },
      { id: 21, heading: 'Civic' },
      { id: 22, heading: 'Mehran' },
      { id: 23, heading: 'City' },
      { id: 24, heading: 'Cultus' },
      { id: 25, heading: 'Alto' },
      { id: 26, heading: 'Wagon R' },
      { id: 27, heading: 'Vitz' },
    ]
  },
  { 
    id: 5, 
    title: 'Budget', 
    items: [
      { id: 28, heading: 'under 5 lakh' },
      { id: 29, heading: '5-10 lakh' },
      { id: 30, heading: '10-20 lakh' },
      { id: 31, heading: '20-30 lakh' },
      { id: 32, heading: '30-40 lakh' },
      { id: 33, heading: '40-50 lakh' },
      { id: 34, heading: '50-60 lakh' },
      { id: 35, heading: '60-80 lakh' },
    ]
  },
  { 
    id: 6, 
    title: 'Body Type', 
    items: [
    //   { id: 1, image: `${Img1}`, heading: 'Automatic cars' },
    //   { id: 2, image: `${Img2}`, heading: 'Family Cars' },
    //   { id: 3, image: `${Img3}`, heading: '5 Seater' },
    //   { id: 4, image: `${Img4}`, heading: 'Small cars' },
    //   { id: 5, image: `${Img5}`, heading: 'Big cars' },
    //   { id: 6, image: `${Img6}`, heading: '4 Door' },
    //   { id: 7, image: `${Img7}`, heading: 'Automatic cars' },
    //   { id: 8, image: `${Img8}`, heading: 'Family Cars' },
    //   { id: 9, image: `${Img9}`, heading: '5 Seater' },
      // { id: 36, image: `${Img10}`, heading: 'Hatchback' },
      // { id: 37, image: `${Img11}`, heading: 'Sedan' },
      { id: 38, image: `${Img12}`, heading: 'SUV' },
      { id: 39, image: `${Img13}`, heading: 'Crossover' },
      { id: 40, image: `${Img14}`, heading: 'Mini Van' },
      { id: 41, image: `${Img15}`, heading: 'Van' },
      { id: 42, image: `${Img16}`, heading: 'MPV' },
      { id: 43, image: `${Img17}`, heading: 'Micro Van' },
      { id: 44, image: `${Img18}`, heading: 'Double Cabin' },
      { id: 45, image: `${Img12}`, heading: 'Pick Up' },
      
    ]
  },
  // Add more sections as needed
];

const UsedCarsCarousel = () => {

  const [activeSection, setActiveSection] = useState(sections[0]); // Initial active section

  const handleSectionClick = (section) => {
    setActiveSection(section);

  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
   
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          centerMode: true,
          infinite: true,
         
          slidesToShow: 2,
          speed: 500,
          rows: 2,
          slidesPerRow: 2,
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        //   dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
    infinite: true,
   
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          infinite: true,
         
          slidesToShow: 1,
          speed: 500,
          rows: 2,
          slidesPerRow: 2,
        }
      }
    ]
  };
  return (
    <Container className="slider-container">
       <Heading>Browse Used Cars</Heading>
       <SectionNav>
        {sections.map(section => (
         <SectionButton key={section.id} onClick={() => handleSectionClick(section)}
           active={section.id === activeSection.id}
           >{section.title}</SectionButton>
         ))}
       </SectionNav>
      <Row>
    <Slider {...settings}>
    {activeSection.items.map((card, index) => (
             <CardOuter key={index}>
        <Card sx={{ maxWidth: 300 }} style={{margin:"10px 10px"}}>
      <CardActionArea style={{padding:'10px 0px'}}>
      {card.image && 
      <ItemImage src={card.image} alt="Item" />
     
        }
        <CardContent style={{padding:'2px'}}>
        <Heading3>{card.heading}</Heading3>
       
         
         
        </CardContent>
      </CardActionArea>
    </Card>
        </CardOuter>
        ))}
    </Slider>
    </Row>
  </Container>
  );
};

export default UsedCarsCarousel;

const SectionNav = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  margin-left: 220px;
  @media (max-width: 1200px) {
    margin-left: 50px;
  }
  @media (max-width: 992px) {
    margin-left: 40px;
    display:flex;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    text-align: center;
    display:flex;
    flex-wrap: wrap;
  }
`;

const SectionButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
 border: none;
 font-size: 18px;
 color: ${props => (props.active ? 'black' : '#434343')};
 border-bottom: ${props => (props.active ? '3px solid #518ecb' : 'none')};
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: auto;
 
`;

const Heading = styled.h2`
text-align: start;
margin-left: 220px;
color: #434343;
font-size: 22px;
font-weight: 700;
@media (max-width: 1200px) {
    margin-left: 50px;
}
@media (max-width: 992px) {
    margin-left: 50px;
}
@media (max-width: 768px) {
  margin-left: 45px;

}
`
const Heading3 = styled.h2`
    color: #545454;
font-size: 16px;
font-weight: 400;


`
const Container = styled.div`
margin-top: 60px;
background: #f2f3f3;
padding: 40px 0px;
text-align: center;
@media (max-width: 1200px) {
  padding: 30px 0px;
}
@media (max-width: 992px) {
  padding: 30px 0px;
}
@media (max-width: 768px) {
  padding: 30px 0px;
}
`
const Row = styled.div`
margin: 10px 220px;
display:flex;
text-align: center;
flex-direction:column;
justify-content: center;
@media (max-width: 1200px) {
  margin: 10px 40px;
}
@media (max-width: 992px) {
 margin: 10px 30px;
}
@media (max-width: 768px) {
 margin: 10px 50px;

}
`
const CardOuter = styled.div`
transform: translate(100%, 0%);

   @media (max-width: 768px) {
    transform: translate(8%, 0%);
   
   }
`