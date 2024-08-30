import React from 'react';
import img from '../Images/CarsComparison/hs.jpg';
import img2 from '../Images/CarsComparison/Kia-LE-White.jpg';
import styled from 'styled-components';

const CarComparison = () => {
  return (
    <Container>
      <Heading1>Car Comparisons</Heading1>
      <OuterRow>
        <InnerRow>
        <Row>
            
          <Col>
            <Image src={img} />
            <CarName>MG HS</CarName>
          </Col>
          <Heading2>VS</Heading2>
          <Col>
            <Image src={img2} />
            <CarName>KIA Sportage</CarName>
          </Col>
          
        </Row>
        <Button>View Comparison</Button>
        </InnerRow>

        <Row2>
          <InnerCol>
            <HeadingInner>Prince Pearl</HeadingInner> <Para>VS</Para>
            <HeadingInner>United Alpha</HeadingInner>
          </InnerCol>
          <InnerCol>
            <HeadingInner>Suzuki Alto</HeadingInner> <Para>VS</Para>
            <HeadingInner>Suzuki Mehran</HeadingInner>
          </InnerCol>
        </Row2>
      </OuterRow>
    </Container>
  );
};

export default CarComparison;

const Container = styled.div`
  background: white;
  padding: 20px 220px;
  text-align: start;
  display: flex;
  flex-direction: column;
 

  @media (max-width: 768px) {
    padding: 20px 80px;
  }
`;

const OuterRow = styled.div`
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:start;
  width: 60%;
  @media (max-width: 768px) {
    flex-wrap:wrap;
    width: 100%;
    justify-content:center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:row;
  width: 100%;
  margin: 20px 0;
`;
const Row2 = styled.div`
display: flex;
  justify-content: center;
  flex-direction:column;
  width: 100%;
  margin: 20px 0;
`
const InnerRow = styled.div`
display:flex;
flex-direction:column;
margin-left: 10px;

`

const Col = styled.div`
  text-align: center;
  color: #233d7b;

  width:100%;
`;

const Heading1 = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
`;

const Heading2 = styled.h2`
  background-color: #b73439;
  height: 30px;
  border-radius: 50%;
  color: white;
  padding: 8px;
  text-align: center;
 
`;

const Image = styled.img`
  width: 170px;
  
  margin: auto;
  
`;

const InnerCol = styled.div`
  text-align: center;
  color: #434343;
  margin: 10px 20px;
  border-bottom: 1px solid #e6e6e6;
`;

const HeadingInner = styled.h3`
  color: #434343;
  font-size: 16px;
  font-weight: 400;
      line-height: 1.4287;
`;

const CarName = styled.h3`
  font-size: 16px;
  color: #233d7b;
`;

const Para = styled.p`
  background-color: #b73439;
  width: 30px;
  color: white;
  border-radius: 50%;
  padding: 8px;
  margin: auto;
`;

const Button = styled.button`
  background-color: transparent;
  border-color: #518ecb;
  text-transform: none;
  font-weight: 400;
  
  width: auto;
  color: #233d7b;
  outline: none !important;
  cursor: pointer;
  border: 1px solid  #518ecb;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4287;
  border-radius: 2px;
  @media (max-width: 768px) {
    padding: 6px 0px;
    width: 70%;
    margin:auto;
  }
  
`;
