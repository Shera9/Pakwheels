
import React from 'react';
import UsedCarsList from './UsedCarsList';
import styled from 'styled-components';
import Img1 from '../Images/UsedCars/Slide_honda-city-1-5-i-vtec-2018-103522415.webp'
import Img2 from '../Images/UsedCars/Slide_honda-city-vtec-steermatic-2007-103110013.webp'
import Img3 from '../Images/UsedCars/Slide_honda-vezel-hybrid-z-2018-102692790.webp'
import Img4 from '../Images/UsedCars/Slide_nissan-clipper-dx-8-2019-100480327.webp'
import Img5 from '../Images/UsedCars/Slide_toyota-land-cruiser-ax-g-selection-2009-99524498.webp'
import Img6 from '../Images/UsedCars/Slide_toyota-land-cruiser-ax-g-selection-2019-96232396.webp'
import Img7 from '../Images/UsedCars/Slide_toyota-land-cruiser-zx-2-2013-101618958.webp'
import Img8 from '../Images/UsedCars/Slide_toyota-prado-tx-limited-3-2019-103576737.webp'

const UsedCarsFeatured = () => {
  // Example card data
  const cards = [
    {
      image: `${Img1}`,
      title: 'Toyota Land Cruiser 2013',
      price: 'PKR 31,900,000',
      location: 'Karachi'
    },
    {
      image: `${Img2}`,
      title: 'Toyota Land Cruiser 2009',
      price: 'PKR 29,500,000',
      location: 'Karachi'
    },
    {
        image: `${Img3}`,
      title: 'Toyota Land Cruiser 2019',
      price: 'PKR 46,700,000',
      location: 'Lahore'
    },
    {
        image: `${Img4}`,
        title: 'Honda Vezel 2018',
        price: 'PKR 7,775,000',
        location: 'Islamabad'
    },
    {
        image: `${Img5}`,
        title: 'Toyota Prado 2019',
        price: 'PKR 26,900,000',
        location: 'Islamabad'
      },
      {
        image: `${Img6}`,
        title: 'Nissan Clipper 2019',
        price: 'Call',
        location: 'Gujranwala'
      },
      {
        image: `${Img7}`,
        title: 'Honda City 2018',
        price: 'PKR 3,540,000',
        location: 'Islamabad'
      }
  ];

  return (
    <Container className="app">
      <Heading>Featured Used Cars for Sale</Heading>
      <UsedCarsList cards={cards} />
    </Container>
  );
};

export default UsedCarsFeatured;

const Container = styled.div`
background: White;
padding: 30px 220px;
@media (max-width: 1200px) {
  padding: 30px 100px;
}
@media (max-width: 992px) {
  padding: 30px 80px;
}
@media (max-width: 768px) {
  padding: 30px 80px;
}
`
const Heading = styled.h1`
color: #434343;
font-size: 22px;
font-weight: 700;
`