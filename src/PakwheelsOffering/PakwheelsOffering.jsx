import React from 'react'
import styled from 'styled-components'



const PakwheelsOffering = ({ imageSrc, heading1, heading2 }) => {
  return (

    <CardWrapper>
        <ImgDiv>
    <Image src={imageSrc} alt="Card" /></ImgDiv>
    <CardContent>
      <Heading1>{heading1}</Heading1>
      <Heading2>{heading2}</Heading2>
    </CardContent>
  </CardWrapper>
  
  )
}

export default PakwheelsOffering

const CardWrapper = styled.div`
  display: flex;
  justify-content:center;

  margin: 10px;
  padding: 20px;
  
  
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 768px) {
   
    width: 80%;
  height: 70px;
  }
 
`;
const ImgDiv = styled.div`
width: 25%;
height: 25%;
@media (max-width: 768px) {
  width: 30%;
  height: 30%;
  
}
`
const Image = styled.img`
 max-width: 100%;
height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
 
  }
`;

const CardContent = styled.div`
  flex: 1;
  padding: 10px;
`;

const Heading1 = styled.h1`
  margin: 5px 0;
  font-size: 15px;
  font-weight: 700;
  color: #233D7A;
`;

const Heading2 = styled.h2`
  margin: 5px 0;
  font-size: 16px;
    font-weight: 700;
    color: #434343;
  color: #434343;
`;