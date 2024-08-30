
import React from 'react';
import ManagedListing from './ManagedListing';
import styled from 'styled-components';
import Img1 from '../Images/ManagedByPakwheels/Slide_daihatsu-mira-x-8-2016-103410266.webp'
import Img2 from '../Images/ManagedByPakwheels/Slide_daihatsu-move-x-5-2016-102968428.webp'
import Img3 from '../Images/ManagedByPakwheels/Slide_honda-city-aspire-prosmatec-2015-103357456.webp'
import Img4 from '../Images/ManagedByPakwheels/Slide_lexus-lx-series-lx570-2011-103469475.webp'
import Img5 from '../Images/ManagedByPakwheels/Slide_proton-x70-2017-102384660.webp'
import Img6 from '../Images/ManagedByPakwheels/Slide_suzuki-cultus-limited-edition-2-2017-103374868.webp'
import Img7 from '../Images/ManagedByPakwheels/Slide_suzuki-cultus-vxl-2-2006-103467227.webp'
import Img8 from '../Images/ManagedByPakwheels/Slide_suzuki-cultus-vxri-euro-ii-2013-101889130.webp'

const ManagedByPakwheel = () => {
  // Example card data
  const cards = [
    {
      image: `${Img1}`,
      title: 'Suzuki Cultus 2013',
      price: 'PKR 925,000',
      location: 'Lahore'
    },
    {
      image: `${Img2}`,
      title: 'Lexus RX Series 2011',
      price: 'PKR 9,000,000',
      location: 'Karachi'
    },
    {
        image: `${Img3}`,
      title: 'Suzuki Swift 2017',
      price: 'PKR 2,100,000',
      location: 'Lahore'
    },
    {
        image: `${Img4}`,
        title: 'Toyota Corolla 2018',
        price: 'PKR 5,000,000',
        location: 'Lahore'
    },
    {
        image: `${Img5}`,
        title: 'Proton X70 2022',
        price: 'PKR 7,000,000',
        location: 'Karachi'
      },
      {
        image: `${Img6}`,
        title: 'Daihatsu Move 2016',
        price: 'PKR 2,300,000',
        location: 'Lahore'
      },
      {
        image: `${Img7}`,
        title: 'Toyota Prius 2008',
        price: 'PKR 3,000,000',
        location: 'Islamabad'
      }
  ];

  return (
    <Container className="app">
      <Heading>Managed by PakWheels</Heading>
      <ManagedListing cards={cards} />
    </Container>
  );
};

export default ManagedByPakwheel;

const Container = styled.div`
background: #f2f3f3;
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