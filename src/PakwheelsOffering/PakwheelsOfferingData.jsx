// App.js

import React from 'react';
import PakwheelsList from './PakwheelsList';

import Img1 from '../Images/PakwheelsOffering/pw-auction-sheet-revamp-9dba47372d85c3f0c994f59cdd51a82a.png'
import Img2 from '../Images/PakwheelsOffering/pw-car-finance-revamp-d1581a9a28491f8e63132a08b1a7a89e.png'
import Img3 from '../Images/PakwheelsOffering/pw-car-insurance-revamp-2d61670bc374062ecc001bc7744d37e3.png'
import Img4 from '../Images/PakwheelsOffering/pw-car-registration-revamp-9a9404feb10c2c1f00558d792ffb3e8b.png'
import Img5 from '../Images/PakwheelsOffering/pw-inspection-revamp-548e215112ee531c6002fb21c9e26eb2.png'
import Img6 from '../Images/PakwheelsOffering/pw-ownership-transfer-revamp-06fae7940d496424b227a1ee1a5c3a6e.png'
import Img7 from '../Images/PakwheelsOffering/pw-partner-workshop-revamp-a8542ad6cf18942775c20eb87d641210.png'
import styled from 'styled-components';

const PakwheelsOfferingData = () => {
  // Example data structure
  const data = [
    {
      image: `${Img1}`,
      heading1: 'PakWheels',
      heading2: 'SELL IT FOR ME'
    },
    {
      image: `${Img2}`,
      heading1: 'PakWheels',
      heading2: 'AUCTION SHEET VERIFICATION'
    },
    {
        image: `${Img3}`,
        heading1: 'PakWheels',
        heading2: 'CAR INSPECTION'
      },
      {
        image: `${Img4}`,
        heading1: 'PakWheels',
        heading2: 'PARTNER WORKSHOP'
      },
      {
        image: `${Img5}`,
        heading1: 'PakWheels',
        heading2: 'CAR INSURANCE'
      },
      {
          image: `${Img6}`,
          heading1: 'PakWheels',
          heading2: 'CAR FINANCE'
        },
        {
          image: `${Img7}`,
          heading1: 'PakWheels',
          heading2: 'CAR REGISTRATION'
        },
  ];

  return (
    <Container className="app">
      <PakwheelsList data={data} />
    </Container>
  );
};

export default PakwheelsOfferingData;
const Container = styled.div`
background:white;
padding: 6px 0px;
`