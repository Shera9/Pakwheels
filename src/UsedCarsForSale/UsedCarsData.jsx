
import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardWrapper = styled.div`
  flex: 0 0 24%; /* Each card takes 25% of the carousel width */
  padding: 10px;
  box-sizing: border-box;
 background: white;
   justify-content: space-between;
   margin: 2px 5px;
   border: 1px solid #f0f0f0;
   
   @media (max-width: 1200px) {
    flex: 0 0 32%; /* Adjusted for smaller screens like tablets */
  }
  @media (max-width: 992px) {
    flex: 0 0 48%; /* Adjusted for medium screens like large phones */
    margin:0px;
    
  }
  @media (max-width: 768px) {
    flex: 0 0 100%; /* Full width for smaller screens like phones */
    margin:  0; /* Adjust margin for spacing */
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 176px;
 margin:auto;
`;

const Title = styled.h3`
  margin: 10px 0;
  text-align: start;
  color:#233d7b;
  font-size: 15px;
  @media (max-width: 1200px) {
    margin: 10px 20px;
  }
  @media (max-width: 992px) {
    margin: 10px 60px;
    
  }
  @media (max-width: 770px) {
    margin: 10px 120px;
  }
  @media (max-width: 600px) {
    margin: 10px 40px;
  }
`;

const Price = styled.p`
  margin-top: 5px;
  font-weight: bold;
  text-align: start;
  font-size: 14px;
  color: #3eb549;
  @media (max-width: 1200px) {
    margin: 10px 20px;
  }
  @media (max-width: 992px) {
    margin: 10px 60px;
    
  }
  @media (max-width: 770px) {
    margin: 10px 120px;
  }
  @media (max-width: 600px) {
    margin: 10px 40px;
  }
`;
const Location = styled.p`
text-align: start;
color: #7b8397;
font-size:14px;
@media (max-width: 1200px) {
  margin: 10px 20px;
}
@media (max-width: 992px) {
  margin: 10px 60px;
  
}
@media (max-width: 770px) {
  margin: 10px 120px;
}
@media (max-width: 600px) {
  margin: 10px 40px;
}
`


const UsedCarsData = ({ imageSrc, title, price,location }) => {
  return (

    <Container>
    <Row>
   <CardOuter >
           <Card sx={{ maxWidth: 280 }} style={{margin:"0px 10px",position:'relative'}}>
           <RibbonDiv>
            <Ribbon>FEATURED</Ribbon>
          </RibbonDiv>
         <CardActionArea>
           <CardMedia
             component="img"
             height="220"
         
             image={imageSrc}
             alt="green iguana"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" color='#233d7b' fontSize='15px'>
               {title}
             </Typography>
             <Typography variant="body2" color="#3eb549" fontSize='14px'>
              {price}
             </Typography>
           
     
             <Typography variant="body2" color="#7b8397" fontSize='14px'>
              {location} 
             </Typography>
           </CardContent>
         </CardActionArea>
       </Card>
           </CardOuter>
           </Row>
           </Container>
   
    // <CardWrapper>
    //   <Image src={imageSrc} alt={title} />
      
    //   <Title>{title}</Title>
    //   <Price>{price}</Price>
    //   <Location>{location}</Location>
     
    // </CardWrapper>
  );
};

export default UsedCarsData;

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
const CardOuter = styled.div`

@media (max-width: 1200px) {
  padding: 30px 0px;
}
@media (max-width: 992px) {
  padding: 30px 0px;

}
   @media (max-width: 768px) {
    transform: translate(12%, 0%);
   
   }`
   const Container = styled.div`

padding: 20px 0px;

@media (max-width: 1200px) {
  padding: 30px 0px;
}
@media (max-width: 992px) {
  padding: 30px 0px;
}
@media (max-width: 768px) {
  padding: 30px 0px;
 
}
`
const Row = styled.div`
margin: 0px 0px;
display:flex;
transform: translate(1%, 0%);
flex-direction:column;
justify-content: center;
@media (max-width: 1200px) {
  margin: 0px 0px;

}
}
@media (max-width: 992px) {
  transform: translate(20%, 0%);
}
@media (max-width: 768px) {
 margin: 0px 0px;
 transform: translate(9%, 0%);
}
`
