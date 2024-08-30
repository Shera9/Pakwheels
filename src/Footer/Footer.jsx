import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
        <Heading>Cars By Make</Heading>
        <ListItems>
            <Items>Toyota Cars for Sale</Items>
            <Items>Suzuki Cars for Sale</Items>
            <Items>Honda Cars for Sale</Items>
            <Items>Daihatsu Cars for Sale</Items>
            <Items>Mitsubishi Cars for Sale</Items>
            <Items>Nissan Cars for Sale</Items>
        </ListItems>
        </Col>
        <Col>
        <Heading>Cars By City</Heading>
        <ListItems>
            <Items>Cars in Lahore</Items>
            <Items>Cars in Karachi</Items>
            <Items>Cars in Islamabad</Items>
            <Items>Cars in Rawalpindi</Items>
            <Items>Cars in Peshawar</Items>
            <Items>Cars in Faisalabad</Items>
        </ListItems>
        </Col>
        <Col>
        <Heading>Explore PakWheels</Heading>
        <ListItems>
            <Items>Used Cars</Items>
            <Items>Used Bikes</Items>
            <Items>New Cars</Items>
            <Items>Auto Parts & Accessories</Items>
            <Items>Cool Rides</Items>
            <Items>Forums</Items>
        </ListItems>
        </Col>
        <Col>
        <Heading>PakWheels.com</Heading>
        <ListItems>
            <Items>About PakWheels.com</Items>
            <Items>Our Products</Items>
            <Items>Advertise With Us</Items>
            <Items>How To Pay</Items>
            <Items>FAQs</Items>
            <Items>Refunds & Returns</Items>
        </ListItems>
        </Col>
        <Col>
        <Heading>Sell On PakWheels</Heading>
        <ListItems>
            <Items>Sell Your Car</Items>
            <Items>Sell Your Bike</Items>
            <Items>Sell Accessory</Items>
            <Items>Daihatsu Cars for Sale</Items>
            <Items>Mitsubishi Cars for Sale</Items>
            <Items>Nissan Cars for Sale</Items>
        </ListItems>
        </Col>
      </Row>
      
      <Row >
      <Col>
        <Heading>Cars by Category</Heading>
        <ListItems>
            <Items>Jeep</Items>
            <Items>Japanese Cars</Items>
            <Items>Imported Cars</Items>
            <Items>Automatic Cars</Items>
            <Items>Low Priced Cars</Items>
            <Items>4x4 Cars</Items>
        </ListItems>
        </Col>
        <Col>
        <Heading>Cars by Body Type</Heading>
        <ListItems>
            <Items>Hatchback</Items>
            <Items>Sedan</Items>
            <Items>SUV</Items>
            <Items>Crossover</Items>
            <Items>Mini Van</Items>
            <Items>Van</Items>
        </ListItems>
        </Col>
        <Col>
        <Heading>Cars by Color</Heading>
        <ListItems>
            <Items>White Cars</Items>
            <Items>Silver Cars</Items>
            <Items>Black Cars</Items>
            <Items>Grey Cars</Items>
            <Items>Blue Cars</Items>
            <Items>Red Cars</Items>
        </ListItems>
        </Col>
        <Col>
        <Heading>Cars by Province</Heading>
        <ListItems>
            <Items>Cars in Punjab</Items>
            <Items>Cars in Sindh</Items>
            <Items>Cars in KPK</Items>
            <Items>Cars in Balochistan</Items>
            <Items>Cars in Azad Kashmir</Items>
            <Items>Cars in Federally Administered</Items>
        </ListItems>
        </Col>
        <Col>
        <Heading>Sell On PakWheels</Heading>
        <ListItems>
            <Items>Sell Your Car</Items>
            <Items>Sell Your Bike</Items>
            <Items>Sell Accessory</Items>
            <Items>Daihatsu Cars for Sale</Items>
            <Items>Mitsubishi Cars for Sale</Items>
            <Items>Nissan Cars for Sale</Items>
        </ListItems>
        </Col>
      
      </Row>
      <HR/>
      <Row>
      <FooterCol>
        <FooterPara>Copyright © 2003 - 2024 PakWheels (Pvt) Ltd. - All Rights Reserved.</FooterPara>
        <Links><FooterLink style={{borderRight:"2px solid #999",paddingRight:"4px"}}>Terms of Service  </FooterLink><FooterLink style={{marginLeft:"5px"}}> Privacy Policy</FooterLink></Links>
        <FooterPara>Reproduction of material from any PakWheels.com pages without permission is strictly prohibited.</FooterPara>
        </FooterCol>
      </Row>
    </Container>
  )
}

export default Footer

const Container = styled.div`
background: #23292f;
border-top: 2px solid #181c20;
padding: 30px 120px;
display: flex;
flex-direction: column;
gap: 30px;


`
const Row = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
@media (max-width: 1200px) {
    justify-content: space-between;
}
@media (max-width: 992px) {
    justify-content: space-between;
}
@media (max-width: 768px) {
    justify-content: space-between;

}

`
const Col = styled.div``
const Heading = styled.h2`
color: #fff;
    font-size: 16px;
    font-weight: normal;
    line-height: 18px;
`
const ListItems = styled.ul`
text-align: left;
margin: 0;
padding:0;
`
const Items = styled.li`
list-style-type: none;
color: #999;
text-align: left;
font-size: 12px;
font-weight: 400;
line-height: 24px;
cursor: pointer;
&:hover{
    border-bottom: 1px solid #999;
}
`
const FooterPara = styled.p`
color: #999;
font-size: 12px;
text-align: center;
`
const FooterLink = styled.a`
color: #999;
font-size: 12px;
text-align: center;
cursor:pointer;

&:hover{
     border-bottom: 1px solid #999;
}
`
const Links = styled.div`
text-align: center;
`
const FooterCol = styled.div`
line-height: 10px;
`
const HR = styled.hr`
margin-top: 20px;
border: 0;
border-top: 1px solid #181c20;
box-shadow: 0 1px 0px #464a53;
width: 85%;
`