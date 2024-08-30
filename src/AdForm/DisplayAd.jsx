// CardDisplay.js

import { parse } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../Firebase';
import { getDocs, collection } from 'firebase/firestore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Details } from '@mui/icons-material';
import { formatValue } from 'react-currency-input-field';
import './Display.css'


const DisplayAd = ({ formData }) => {
    
  const [adsDetail, setAdsDetail] = useState([])
  const [loading, setLoading] = useState(false); // Add loading state
  
    const carData = localStorage.getItem("carFormData")
    const localName = localStorage.getItem('SignInMail')
   
    const data = JSON.parse(carData);

     const getData = async() => {
      setLoading(true)
      const valRef = collection(db,'details');
      const dataDb = await getDocs(valRef);
      const allData = dataDb.docs.map(val => ({...val.data(),id: val.id}) )

      const filteredData = allData.filter(car => {
        const myData = car.name === localName;
      
  
        return myData;
      });
      setLoading(false)
      setAdsDetail(filteredData);
   
     }

     useEffect(() => {
     getData();
    },[])
console.log("adsss",adsDetail)
  return (
    <OuterContainer>   
    <Heading>Your Ads</Heading>
    <Container>
    {loading ? (
            <Loader>Loading...</Loader> // Display loader when loading
          ) :
          <>
    {
      adsDetail.length == 0 && <p>You Haven't Submitted Any Ad Right Now</p>
    }
      { 
      adsDetail?.map((data) => ( 
      
     
        <Card sx={{ maxWidth: 300 }} style={{margin:"0px 0px",position:"relative"}}>
         <RibbonDiv>
            <Ribbon>FEATURED</Ribbon>
          </RibbonDiv>
        <CardActionArea>
          <ImgDiv>
          <CardMedia
            component="img"
            height="220"
            
            image={data.img}
            alt="green iguana"
            style={{maxWidth:"100%"}}
          /></ImgDiv>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color='#0c9ea8' fontSize='15px'>
              {data.make}
            </Typography>
            <Typography variant="body2" color="#1d0f7a" fontSize='14px'>
             {data.city}
            </Typography>
            <Typography variant="body2" color="#7b8397" fontSize='14px'>
             
            {data.year}
              </Typography>
          
    
            <Typography variant="body2" color="#6e0b5d" fontSize='14px'>
             
          {data.color}
            </Typography>
        
            <Typography variant="body2" color="#0ba34d" fontSize='14px'>
             {formatValue({
          value: `${data.price}`,
          intlConfig: { locale: 'en-IN', currency: 'PKR' },
        })} 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    //     <CardWrapper key={data.id}>
    //   <CardTitle>Car Information</CardTitle>
    //   <img src={data.img} alt='image'/>
    //   <CardText><strong>Make:</strong> {data?.make}</CardText>
    //   <CardText><strong>Model:</strong> {data?.model}</CardText>
    //   <CardText><strong>Year:</strong> {data?.year}</CardText>
    //   <CardText><strong>Color:</strong> {data?.color}</CardText>
    //   <CardText><strong>Price:</strong> {data?.price}</CardText>
    // </CardWrapper>
  ))
      }</>
    }
    
    
   
  
    </Container>
    </OuterContainer>
  );
};

export default DisplayAd;

const OuterContainer =styled.div`
background: #f2f3f3;
padding: 20px 0px;

`
const Heading = styled.h2`
padding-left: 130px;
font-size: 22px;
font-weight: 700;


`
const CardWrapper = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 2px #d4d4d4;
  background: #f0eded;
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

const CardText = styled.p`
  margin: 5px 0;
`;
const Container = styled.div`
display:flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
padding: 50px 0px;
background: #f2f3f3;
`
const Ribbon = styled.div`
background:#b73439;
color: white;
padding: 4px 5px;
font-size: 12px;
font-weight: 400;
`
const RibbonDiv = styled.div`
position: absolute;
left: 0;
top: 0;
z-index: 1;
`
const ImgDiv = styled.div`
width: 300px;
`
const Loader = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 20px;
  margin:auto;
`;
