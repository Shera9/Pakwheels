import React from 'react'
import SellImg from '../Images/SellImages/67674390397202548.png'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const SellYourCar = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('SignInMail')
  const HandleClick = () => {
    if(email !== null){
       navigate('/sell/post-ad')
    }
   else{
    alert("Sign In first!")
   }
  }
  return (
    <Container>
      <Row>
        <MainHeading>Sell Your Car on PakWheels and Get the Best Price</MainHeading>
        <ColOuter>
        <ColInner>
        <Heading>Post your Ad on PakWheels</Heading>
        <ParaInner>
       <ParaDiv> <FontAwesomeIcon icon={faCheck} style={{color:"#3eb549"}}/><Items>Post your Ad for Free in 3 Easy Steps</Items></ParaDiv>
       <ParaDiv><FontAwesomeIcon icon={faCheck} style={{color:"#3eb549"}}/><Items>Get Genuine offers from Verified Buyers</Items></ParaDiv>
       <ParaDiv><FontAwesomeIcon icon={faCheck} style={{color:"#3eb549"}}/> <Items>Sell your car Fast at the Best Price</Items></ParaDiv>
        </ParaInner>
        <Button1 onClick={() => HandleClick()}>Post Your Ad</Button1>
        </ColInner>
        <ColInner>
        <Heading>Try PakWheels Sell It For Me</Heading>
        <ParaDiv> <FontAwesomeIcon icon={faCheck} style={{color:"#3eb549"}}/> <Items>Dedicated Sales Expert to Sell your Car</Items></ParaDiv>
        <ParaDiv> <FontAwesomeIcon icon={faCheck} style={{color:"#3eb549"}}/><Items>We Bargain for you and share the Best Offer</Items></ParaDiv>
        <ParaDiv> <FontAwesomeIcon icon={faCheck} style={{color:"#3eb549"}}/> <Items>We ensure Safe & Secure Transaction</Items></ParaDiv>
        <Button2>Register Your Car</Button2>
        </ColInner>
        </ColOuter>
        </Row>

        <Row>
        <Col>
      <Image src={SellImg}/>
        </Col>
       
      </Row>
    </Container>
  )
}

export default SellYourCar

const Container = styled.div`
padding-top: 55px;
padding-bottom:20px;
background:white;
`
const Row = styled.div`
text-align: center;
`
const Col  = styled.div`

`
const ColOuter = styled.div`
display: flex; 
justify-content: space-evenly;
flex-wrap: wrap;
margin-bottom: 80px;


`
const ColInner = styled.div``

const Items = styled.p`
text-align: start;
margin-left: 7px;
`
const Button1 = styled.button `
float: left;
padding: 13px 35px;
border-radius: 5px;
background: #b73439;
color: white;
border: none;
font-size: 18px;
margin-top: 10px;
cursor: pointer;
`
const Button2 = styled.button `
float: left;
padding: 13px 35px;
border-radius: 5px;
background: #518ecb;
color: white;
border: none;
font-size: 18px;
margin-top: 10px;
cursor: pointer;
`
const Heading = styled.h2`
color: #233d7b;
`
const MainHeading = styled.h2`
color: #434343;
`
const Image = styled.img`
@media (max-width: 1200px) {
 width: 80%;
}
@media (max-width: 992px) {
  flex: 0 0 48%; /* Adjusted for medium screens like large phones */
  margin:0px;
  
}
@media (max-width: 768px) {
  flex: 0 0 100%; /* Full width for smaller screens like phones */
  margin:  0; /* Adjust margin for spacing */
}
`
const ParaInner = styled.div`
display: flex;
flex-direction: column;
`
const ParaDiv = styled.div`
display: flex;
align-items:center;
`