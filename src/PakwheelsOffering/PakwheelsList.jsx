// CardList.js

import React from 'react';
import PakwheelsOffering from './PakwheelsOffering';
import styled from 'styled-components';

const PakwheelsList = ({ data }) => {
  return (
    <CardOuter>
       <Heading>PakWheels Offerings</Heading>
    <Card className="card-list">
      {data.map((item, index) => (
        <PakwheelsOffering
          key={index}
          imageSrc={item.image}
          heading1={item.heading1}
          heading2={item.heading2}
        />
      ))}
    </Card>
    </CardOuter>
  );
};

export default PakwheelsList;

const Card = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
margin: 30px 220px;
@media (max-width: 1200px) {
  grid-template-columns: 1fr;
  margin: 30px 10%;
}

@media (max-width: 768px) {
  margin: 30px 5%;
}

@media (max-width: 576px) {
  margin: 30px 2%;
}
`
const Heading = styled.h1`
margin-left: 220px;
color: #434343;
font-size: 22px;
font-weight: 700;
@media (max-width: 576px) {
  margin-left: 2%;
}
`
const CardOuter = styled.div`
margin-top: 50px;
`
