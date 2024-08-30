import React from 'react'
import styled from 'styled-components'
import Img1 from '../Images/AdPosting/car-221614dec8c0f3717dede556a5daad01.svg'
import Img2 from '../Images/AdPosting/photos-708994063564767acaca738e1261f90d.svg'
import Img3 from '../Images/AdPosting/tag-3ba531fca999b37f89be28609fe9e9c0.svg'
import AdSubmission from '../AdForm/AdSubmission'
import AdFormDropdown from '../AdForm/AdFormDropdown'
import CarComponents from '../AdForm/CarComponents'

const AdPosting = () => {
  return (
    <MainDiv>
        <Container>
            <div>
      <MainHeading>Sell your Car With 3 Easy & Simple Steps!</MainHeading>
      <Para>It's free and takes less than a minute</Para>
      </div>
      <InnerDiv>
        <Image src={Img1}/> <Para2>Enter Your Car Information </Para2>
        <Image src={Img2}/> <Para2> Upload Photos </Para2>
        <Image src={Img3}/> <Para2>Enter Your Selling Price</Para2>
      </InnerDiv>
      {/* <AdSubmission/> */}
     
      </Container> 
      <CarComponents/>
    </MainDiv>
  )
}

export default AdPosting

const MainDiv = styled.div`
padding: 40px 0px;
background: #f2f3f3;
padding-bottom: 400px;
`
const MainHeading = styled.h1`
font-size: 28px;
color: #233d7b;
text-align: center;
line-height: 12px;
@media (max-width: 576px) {
  font-size: 22px;
}
`
const Para = styled.p`
text-align: center;
line-height: 12px;
`
const Container = styled.div`
background: white;
padding: 20px 0px;
`
const Image = styled.img`
max-width:100%;
height:63px;
@media (max-width: 576px) {
  max-width:100%;
height:50px;
}
`
const InnerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 576px) {
 margin: 0px 10px;
}
@media (max-width: 768px) {
  margin: 0px 10px;
}

`
const Para2 = styled.p`
font-size: 15px;
margin-right: 15px;
margin-left: 5px;
@media (max-width: 576px) {
  font-size: 12px;
  margin-left: 1px;
}
`