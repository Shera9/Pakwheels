import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewBikes.css';
import Img1 from '../Images/PopularNewBikes/1 (1).jpg'
import Img2 from '../Images/PopularNewBikes/1 (2).jpg'
import Img3 from '../Images/PopularNewBikes/1 (3).jpg'
import Img4 from '../Images/PopularNewBikes/1 (4).jpg'
import Img5 from '../Images/PopularNewBikes/1 (5).jpg'
import Img6 from '../Images/PopularNewBikes/1 (6).jpg'
import Img7 from '../Images/PopularNewBikes/1 (7).jpg'
import Img8 from '../Images/PopularNewBikes/1 (8).jpg'
import Img9 from '../Images/PopularNewBikes/1 (9).jpg'
import Img10 from '../Images/PopularNewBikes/1.jpg'
import Img11 from '../Images/PopularNewBikes/Bmw-new.jpg'
import Img12 from '../Images/PopularNewBikes/a.jpg'
import Img13 from '../Images/PopularNewBikes/1 (5).jpg'
import Img14 from '../Images/PopularNewBikes/1 (6).jpg'

import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
const cards = [
    { 

            
      image: `${Img1}`,
      title: 'Benelli TNT 150i',
      price: 'PKR 610,000',
      reviews: '9 Reviews'
    },
    {
      image: `${Img2}`,
      title: 'Yamaha YB 125Z',
      price: 'PKR 396,000',
      reviews: '52 Reviews'
    },
    {
        image: `${Img3}`,
      title: 'BMW S1000RR',
      price: 'PKR 12,600,000',
      reviews: '1 Reviews'
    },
    {
        image: `${Img4}`,
        title: 'Benelli TRK 502X',
        price: 'PKR 2,950,000',
        reviews: '0 Reviews'
    },
    {
        image: `${Img5}`,
        title: 'Honda CB 125F',
        price: 'PKR 390,900',
        reviews: '19 Reviews'
      },
      {
        image: `${Img6}`,
        title: 'Honda Pridor',
        price: 'PKR 208,900',
        reviews: '37 Reviews'
      },
      {
        image: `${Img7}`,
        title: 'Suzuki GR 150',
        price: 'PKR 547,000',
        reviews: '20 Reviews'
      },


// { 
//     id: 2, 
//     title: 'Upcoming', 
//     items: [
//         {
//   image: `${Img8}`,
//   title: '2024 Peugeot 3008',
//   price: 'PKR 1.05 crore*',
//   launch: 'Launching July 2024*'
// },
// {
//   image: `${Img9}`,
//   title: '2024 Chery Omoda',
//   price: 'PKR 1.1 crore*',
//   launch: 'Launching August 2024*'
// },
// {
//     image: `${Img10}`,
//   title: '2024 Suzuki Every',
//   price: 'PKR 24 lacs*',
//   launch: 'Launching August 2024*'
// },
// {
//     image: `${Img11}`,
//     title: '2024 Chery Jaecoo',
//     price: 'PKR 1.2 crore*',
//     launch: 'Launching September 2024*'
// },
// {
//     image: `${Img12}`,
//     title: '2024 DFSK Glory 500',
//     price: 'PKR 55 lacs*',
//     launch: 'Launching September 2024*'
//   },
//   {
//     image: `${Img13}`,
//     title: '2024 Chery Tiggo 8 Pro',
//     price: 'PKR 1.1 crore*',
//     launch: 'Launching October 2024*'
//   },
//   {
//     image: `${Img14}`,
//     title: '2024 Deepal S07',
//     price: 'PKR 1.5 crore*',
//     launch: 'Launching October 2024*'
//   },
// ]
// },
// { 
//     id: 3, 
//     title: 'Newly Launched', 
//     items: [
//         {
//   image: `${Img15}`,
//   title: 'Honri Ve',
//   price: 'PKR 40.0 lacs',
//   launch: 'Launched June 2024'
// },
// {
//   image: `${Img16}`,
//   title: 'KIA Shehzore K2700',
//   price: 'PKR 38.6 - 75.0 lacs',
//   launch: 'Launched June 2024'
// },
// {
//     image: `${Img17}`,
//   title: 'Toyota Prado',
//   price: 'PKR 6.66 - 7.56 crore',
//   launch: 'Launched May 2024'
// },
// {
//     image: `${Img18}`,
//     title: 'Hyundai Ioniq 5',
//     price: 'PKR 2.25 crore',
//     launch: 'Launched March 2024'
// },
// {
//     image: `${Img19}`,
//     title: 'Hyundai Ioniq 6',
//     price: 'PKR 2.3 crore',
//     launch: 'Launched March 2024'
//   },
//   {
//     image: `${Img20}`,
//     title: 'Tank 500',
//     price: 'PKR 4.5 crore',
//     launch: 'Launched February 2024'
//   },
//   {
//     image: `${Img21}`,
//     title: 'ORA 03',
//     price: 'PKR 90.0 lacs',
//     launch: 'Launched February 2024'
//   },
// ]
// }
  ];
const NewBikesCarousel = () => {

    const [activeSection, setActiveSection] = useState(cards[0]);
    const handleSectionClick = (cards) => {
        setActiveSection(cards);
        // setActiveItemIndex(0); // Reset to the first item when section changes
      };

   
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
            <Heading2>Popular New Bikes</Heading2>
             {/* <SectionNav>
                
        {cards.map(section => (
          <SectionButton key={section.id} onClick={() => handleSectionClick(section)}
          active={section.id === activeSection.id}
          >{section.title}</SectionButton>
        ))}
      </SectionNav> */}
        <Row>
        <Slider {...settings}>

        {cards.map((card, index) => (
             <CardOuter key={index}>
        <Card sx={{ maxWidth: 300 }} style={{margin:"0px 10px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
         
          image={card.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color='#233d7b' fontSize='15px'>
            {card.title}
          </Typography>
          <Typography variant="body2" color="#3eb549" fontSize='14px'>
           {card.price}
          </Typography>
          {card.reviews &&
          <Typography variant="body2" color="#7b8397" fontSize='14px'>
           
          <FontAwesomeIcon icon={faStar} color='#ef730f'/> {card.reviews} 
          </Typography>}
          {card.launch &&
          <Typography variant="body2" color="#7b8397" fontSize='14px'>
           {card.launch} 
          </Typography>}
        </CardContent>
      </CardActionArea>
    </Card>
        </CardOuter>
        ))}
       
      </Slider>
      </Row>
      </Container>
      );

}
export default NewBikesCarousel;

const Container = styled.div`
background: #f2f3f3;
padding: 40px 0px;

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
const Heading = styled.h1`
color: #434343;
font-size: 25px;
`
const CardOuter = styled.div`
transform: translate(0%, 0%);

   @media (max-width: 768px) {
    transform: translate(8%, 0%);
   
   }
`
const SectionNav = styled.div`
  display: flex;
  margin-left: 130px;
  gap: 10px;
  margin-bottom: 20px;
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
 background: transparent;
 font-size: 18px;
 color: ${props => (props.active ? 'black' : '#434343')};
 border-bottom: ${props => (props.active ? '3px solid #518ecb' : 'none')};

`;
const Heading2 = styled.h2`
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

