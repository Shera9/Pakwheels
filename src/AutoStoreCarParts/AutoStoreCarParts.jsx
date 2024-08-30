// Carousel.jsx
import React, { useState } from 'react';
import './AutoStore.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//sub Category Images
import Category1 from '../Images/AutoStoreImages/air-freshner-71542fcdd8d2ea6d520d3046530fb824.png'
import Category2 from '../Images/AutoStoreImages/alloy-wheels-7fe30c2e51e6fcab6295450adcc2c3c7.png'
import Category3 from '../Images/AutoStoreImages/batteries-12aaa4846776db3cf29e513251a6cc9e.png'
import Category4 from '../Images/AutoStoreImages/bumpers-6afb1d5ac10141929ea2d559214d3e32.png'
import Category5 from '../Images/AutoStoreImages/car-top-covers-9799df91ec2d00c6aa0083a131ab88e5.png'
import Category6 from '../Images/AutoStoreImages/complete-engines-4f0ce5446e55a6c5526c845a29bbd83d.png'
import Category7 from '../Images/AutoStoreImages/coolants-fe8c1dc39d31edd4efcfe30e254e7b96.png'
import Category8 from '../Images/AutoStoreImages/emblems-stickers-03c40dad2d571e44b044573e6b5788ae.png'
import Category9 from '../Images/AutoStoreImages/fenders-70a740376cfd602992ff5578ee3ecd13.png'
import Category10 from '../Images/AutoStoreImages/floor-mats-a30e9c8c872509e53f5daf30c6dfea3c.png'
import Category11 from '../Images/AutoStoreImages/fuel-pump-480126710164f4d1abef2459a881f857.png'
import Category12 from '../Images/AutoStoreImages/gps-trackers-b562681895d50c296b0ac8d9b18e7f3f.png'
import Category13 from '../Images/AutoStoreImages/helmets-7aafbc5e0b58a365c4a67f883fbccf11.png'
import Category14 from '../Images/AutoStoreImages/hoses-pipes-02e16c4684659de2a2cfc84d7c89913c.png'
import Category15 from '../Images/AutoStoreImages/key-chains-9ad4edc2698e64293627b54b04fc00b7.png'
import Category16 from '../Images/AutoStoreImages/microfiber-clothes-55090af86c11f49f1b7cd5f644a8d7f8.png'
import Category17 from '../Images/AutoStoreImages/shades-abfbaeeb038ceb1474effe6c7092772c.png'
import Category18 from '../Images/AutoStoreImages/usb-car-charger-d1cd91a39025413d136ad918e6c2bbc9.png'

//Make Images
import Make1 from '../Images/AutoStoreImages/MakeImages/580b57fcd9996e24bc43c498.png'
import Make2 from '../Images/AutoStoreImages/MakeImages/Audi.png'
import Make3 from '../Images/AutoStoreImages/MakeImages/BMW.png'
import Make4 from '../Images/AutoStoreImages/MakeImages/Chevrolet.png'
import Make5 from '../Images/AutoStoreImages/MakeImages/DFSK.png'
import Make6 from '../Images/AutoStoreImages/MakeImages/Honda.png'
import Make7 from '../Images/AutoStoreImages/MakeImages/Mitsubishi.png'
import Make8 from '../Images/AutoStoreImages/MakeImages/Nisan.png'
import Make9 from '../Images/AutoStoreImages/MakeImages/Suzuki.png'
import Make10 from '../Images/AutoStoreImages/MakeImages/Tyota.png'
import Make11 from '../Images/AutoStoreImages/MakeImages/car-logos_others.png'
import Make12 from '../Images/AutoStoreImages/MakeImages/daihatsu.png'
import Make13 from '../Images/AutoStoreImages/MakeImages/hyundai.png'
import Make14 from '../Images/AutoStoreImages/MakeImages/mazda.png'
import Make15 from '../Images/AutoStoreImages/MakeImages/mercedes.png'
import Make16 from '../Images/AutoStoreImages/MakeImages/peugeot.png'
import Make17 from '../Images/AutoStoreImages/MakeImages/proton-logo-png-for-website.png'
import Make18 from '../Images/AutoStoreImages/MakeImages/Audi.png'

//Brand Images
import Brand1 from '../Images/AutoStoreImages/Brands/MK.png'
import Brand2 from '../Images/AutoStoreImages/Brands/areon-car-perfume-logo-1466030849.png'
import Brand3 from '../Images/AutoStoreImages/Brands/leppon.jpg'
import Brand4 from '../Images/AutoStoreImages/Brands/missing (1).png'
import Brand5 from '../Images/AutoStoreImages/Brands/missing (2).png'
import Brand6 from '../Images/AutoStoreImages/Brands/missing (3).png'
import Brand7 from '../Images/AutoStoreImages/Brands/missing.png'
import Brand8 from '../Images/AutoStoreImages/Brands/nexen-logo-C03571EF5D-seeklogo.com.png'
import Brand9 from '../Images/AutoStoreImages/Brands/open-uri20190207-25758-1mp7rg4.jpg'
import Brand10 from '../Images/AutoStoreImages/Brands/open-uri20190207-25758-e6fgov.png'
import Brand11 from '../Images/AutoStoreImages/Brands/open-uri20190207-25758-ir044w.jpg'
import Brand12 from '../Images/AutoStoreImages/Brands/open-uri20190207-25758-jgf8fc.jpg'
import Brand13 from '../Images/AutoStoreImages/Brands/open-uri20190207-25758-mnw6kd.png'
import Brand14 from '../Images/AutoStoreImages/Brands/open-uri20190207-25758-xfuz4a.png'
import Brand15 from '../Images/AutoStoreImages/Brands/stringio.jpg'
import Brand16 from '../Images/AutoStoreImages/Brands/stringio.png'
import Brand17 from '../Images/AutoStoreImages/Brands/tonyin.jpg'
import Brand18 from '../Images/AutoStoreImages/Brands/vic-medium.png'

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
    title: 'Sub Category', 
    items: [
      { id: 1, image: `${Category1}`, heading: 'Car Washer' },
      { id: 2, image: `${Category2}`, heading: 'Tyres' },
      { id: 3, image: `${Category3}`, heading: 'Helmets' },
      { id: 4, image: `${Category4}`, heading: 'Keychains' },
      { id: 5, image: `${Category5}`, heading: 'Car Battery' },
      { id: 6, image: `${Category6}`, heading: 'Alloy Rims' },
      { id: 7, image: `${Category7}`, heading: 'Fuel Pump' },
      { id: 8, image: `${Category8}`, heading: 'Engines For Sale' },
      { id: 9, image: `${Category9}`, heading: 'GPS Tracker' },
      { id: 10, image: `${Category10}`, heading: 'Microfiber Cloth' },
      { id: 11, image: `${Category11}`, heading: 'Car Charger' },
      { id: 12, image: `${Category12}`, heading: 'Engine Oil' },
      { id: 13, image: `${Category13}`, heading: 'Air Freshener' },
      { id: 14, image: `${Category14}`, heading: 'Floor Mats' },
      { id: 15, image: `${Category15}`, heading: 'Car Shades' },
      { id: 16, image: `${Category16}`, heading: 'Car Cover' },
      { id: 17, image: `${Category17}`, heading: 'Headlights' },
      { id: 18, image: `${Category18}`, heading: 'Car Stickers' },
      { id: 19, image: `${Category1}`, heading: 'Hose Pipe' },
      
    ]
  },
  { 
    id: 2, 
    title: 'Make', 
    items: [
      { id: 1, image: `${Make1}`, heading: 'Car Washer' },
      { id: 2, image: `${Make2}`, heading: 'Tyres' },
      { id: 3, image: `${Make3}`, heading: 'Helmets' },
      { id: 4, image: `${Make4}`, heading: 'Keychains' },
      { id: 5, image: `${Make5}`, heading: 'Car Battery' },
      { id: 6, image: `${Make6}`, heading: 'Alloy Rims' },
      { id: 7, image: `${Make7}`, heading: 'Fuel Pump' },
      { id: 8, image: `${Make8}`, heading: 'Engines For Sale' },
      { id: 9, image: `${Make9}`, heading: 'GPS Tracker' },
      { id: 10, image: `${Make10}`, heading: 'Microfiber Cloth' },
      { id: 11, image: `${Make11}`, heading: 'Car Charger' },
      { id: 12, image: `${Make12}`, heading: 'Engine Oil' },
      { id: 13, image: `${Make13}`, heading: 'Air Freshener' },
      { id: 14, image: `${Make14}`, heading: 'Floor Mats' },
      { id: 15, image: `${Make15}`, heading: 'Car Shades' },
      { id: 16, image: `${Make16}`, heading: 'Car Cover' },
      { id: 17, image: `${Make17}`, heading: 'Headlights' },
      { id: 18, image: `${Make18}`, heading: 'Car Stickers' },
   
    ]
  },
  { 
    id: 3, 
    title: 'Model', 
    items: [
      { id: 28, heading: 'Corolla' },
      { id: 29, heading: 'City' },
      { id: 30, heading: 'Civic' },
      { id: 31, heading: 'Alto' },
      { id: 32, heading: 'Wagon' },
      { id: 33, heading: 'Hilux' },
      { id: 32, heading: 'Swift' },
      
      { id: 33, heading: 'Mehran' }
    ]
  },
  { 
    id: 4, 
    title: 'Brand', 
    items: [
      { id: 1, image: `${Brand1}`, heading: 'Denso' },
      { id: 2, image: `${Brand2}`, heading: 'TYC' },
      { id: 3, image: `${Brand3}`, heading: 'Aroma' },
      { id: 4, image: `${Brand4}`, heading: 'AREON' },
      { id: 5, image: `${Brand5}`, heading: 'Bullsone' },
      { id: 6, image: `${Brand6}`, heading: 'MK' },
      { id: 7, image: `${Brand7}`, heading: 'BOSCH' },
      { id: 8, image: `${Brand8}`, heading: 'Shell' },
      { id: 9, image: `${Brand9}`, heading: 'Zic' },
      { id: 10, image: `${Brand10}`, heading: 'Aisin' },
      { id: 11, image: `${Brand11}`, heading: 'Nexen' },
      { id: 12, image: `${Brand12}`, heading: 'Guard' },
      { id: 13, image: `${Brand13}`, heading: 'Goodyear' },
      { id: 14, image: `${Brand14}`, heading: 'MK Japan' },
      { id: 15, image: `${Brand15}`, heading: 'Vic' },
      { id: 16, image: `${Brand16}`, heading: 'Leppon' },
      { id: 17, image: `${Brand17}`, heading: 'Shell' },
      { id: 18, image: `${Brand18}`, heading: 'Zic' },
    ]
  },

];

const AutoStoreCarParts = () => {

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
       <Heading>Auto Store Car Parts & Accessories</Heading>
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
        <Card sx={{ maxWidth: 300, Height: 130 }} style={{margin:"10px 10px"}}>
      <CardActionArea style={{lineHeight:'5px',padding:'10px 0px'}}>
      {card.image && 
      <ItemImage src={card.image} alt="Item" />
     
        }
        <CardContent style={{padding:'0px'}}>
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

export default AutoStoreCarParts;

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
  width: 70px;
  height: 70px;
  border-radius: 8px;
  margin: auto;
 
`;

const Heading = styled.h2`
text-align: start;
margin-left: 220px;
color: #434343;
font-size: 22px;
font-weight: 700;
line-height: 2px;
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
  margin-top: 650px;
  padding: 30px 0px;
}
`
const Row = styled.div`
margin: 10px 220px;
display:flex;
text-align: center;
flex-direction:column;
justify-content: center;
align_items:center;

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