import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './SwiperClass.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCheck, faClock, faLocation, faLocationPin, faPhone, faT } from '@fortawesome/free-solid-svg-icons';
import InspecImage from '../Images/DetailImage/inspection-car-rate-7b4ede752bdfc0e0cd08c3247e7e37a8.png'


const UsedCarsDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const docRef = doc(db, 'details', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCar(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) {
    return <Loader>Loading...</Loader>;
  }

  if (!car) {
    return <p>Car not found</p>;
  }

  const convertToLacs = (number) => {
    if (number >= 100000) {
      return (number / 100000).toFixed(2) + ' Lacs';
    }
    return number.toString();
  };

  return (
    <Container>
    <DetailContainer>
   { car.img && (
  <Row>
   
    <Col>
      {/* Main Swiper */}
      
<SwiperDiv>
<Heading>{car.make} {car.year}</Heading>
<Location><FontAwesomeIcon icon={faLocation}/>{car.city}</Location>
<Swiper
pagination={{
  type: 'fraction',
}}
navigation={true}
modules={[Pagination, Navigation]}
className="mySwiper"
>
{(Array.isArray(car.img) ? car.img : [car.img]).map((imageUrl, idx) => (
            
            <ImgDiv > 
            <SwiperSlide key={idx}>
                 <Image src={imageUrl} key={idx}/>
                 
                  </SwiperSlide> 
          
                  </ImgDiv>
                  ))}
        <RibbonDiv>
            <Ribbon>FEATURED</Ribbon>
          </RibbonDiv>
</Swiper>
    
      <Detail>
      
      <YearDiv>
        <FontAwesomeIcon icon={faCalendar}/>
          <Para>{car.year}</Para>
      </YearDiv>
    <AutoDiv>
        <FontAwesomeIcon icon={faClock}/>
        <Para>Automatic</Para>
    </AutoDiv>
      <RegisDiv>
        <FontAwesomeIcon icon={faLocationPin}/>
          <Para>{car.register}</Para>
      </RegisDiv>
    
  
     </Detail>
     <InspectDiv>
        <Info>
       <Heading3>Never buy a used car without</Heading3>
       <Heading1>PakWheels<Span> Car Inspection</Span></Heading1>
       <p>Inspect the car on 200+ checkpoints</p>
       <OderListDiv>
        <ListItem><FontAwesomeIcon icon={faCheck} style={{color:'#3eb549'}}/> Engine</ListItem>
        <ListItem><FontAwesomeIcon icon={faCheck} style={{color:'#3eb549'}}/> Suspension</ListItem>
        <ListItem><FontAwesomeIcon icon={faCheck} style={{color:'#3eb549'}}/> Exterior</ListItem>
        <ListItem><FontAwesomeIcon icon={faCheck} style={{color:'#3eb549'}}/> Interior</ListItem>
       </OderListDiv>
       <Button>Schedule Inspection</Button>
        </Info>
        
        <ImagDiv>
        <img src={InspecImage}/>
        </ImagDiv>
      </InspectDiv>
      <DetailDiv>
        <ItemDiv><div>Registered In</div><div>{car.register}</div></ItemDiv>
        <ItemDiv><div>Color</div><div>{car.color}</div></ItemDiv>
       
      </DetailDiv>
      <DetailDiv>
      <ItemDiv><div>Assembly</div><div>Imported</div></ItemDiv>
        <ItemDiv><div>Engine Capacity</div><div>1800 cc</div></ItemDiv>
      </DetailDiv>
      </SwiperDiv>
    
</Col>
    
      <Col>
      <PriceDiv>
      <PricePara>PKR {convertToLacs(car.price)}</PricePara>
      <NumberDiv show={show} onClick={() => setShow(true)}>
        {
            show ?<NumberShow><FontAwesomeIcon icon={faPhone}/> {car.number}</NumberShow>:<NumberPara><FontAwesomeIcon icon={faPhone}/> Show Phone Number</NumberPara>
        }
         
      </NumberDiv>
         
      </PriceDiv>
   
      <SellerDiv>
      <SellerPara>Seller Details</SellerPara>
      <SellerInfo >
     
         <p style={{textAlign:'center',fontSize:'16px'}}>{car.name}</p>
      </SellerInfo>
         
      </SellerDiv>

      <SellerDiv>
      <SafetyPara>Safety tips for transaction</SafetyPara>
      <OrderList>
        <List>
        Use a safe location to meet seller
        </List>
        <List>Avoid cash transactions</List>
        <List>Beware of unrealistic offers</List>
      </OrderList>
         <ButtonLearn>Learn More</ButtonLearn>
      </SellerDiv>
      </Col>
      </Row>
    )}
    </DetailContainer>
    </Container>
  );
};

export default UsedCarsDetails;

const Loader = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
`;

const DetailContainer = styled.div`
  padding: 20px 0px;

  border-radius: 8px;
  margin: 0px 220px;
  @media (max-width: 778px) {
    margin: 0px 20px;
    }
`;
const Container = styled.div`
background: #f2f2f2;
padding: 20px 0px;
`
const Row = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
@media (max-width: 778px) {
  flex-wrap: wrap;
  gap:20px;

  }
`
const Col = styled.div`


`
const SwiperDiv = styled.div`
background: white;
padding:15px 20px;
border: 1px solid #e6e6e6;
border-radius: 2px;
margin:auto;

`
const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
  overflow: hidden;
  @media (max-width: 778px) {
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  @media (max-width: 778px) {
    min-width: 100%;
    height: auto;
  }
`;

const ThumbDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;
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
const Heading = styled.h1`
font-weight: 700;
line-height: 1px;
color: #233d7b;
`
const Location = styled.p`
color: #518ecb;
font-size: 14px;
line-height: 2px;
margin-bottom:25px;
`
const Detail = styled.div`
display:flex;
color: #518ecb;
padding: 25px 0px;
font-size: 16px;

`
const YearDiv = styled.div`
border: 1px solid #e6e6e6;
border-left: none;
padding: 10px 40px;
text-align:center;
@media (max-width: 778px) {
    padding: 10px 30px;
      
        }
`
const RegisDiv = styled.div`
border: 1px solid #e6e6e6;
border-left: none;
padding: 10px 40px;
text-align:center;
@media (max-width: 778px) {
    padding: 10px 30px;
      
        }
`
const AutoDiv = styled.div`
border: 1px solid #e6e6e6;
border-left: none;
padding: 10px 40px;
text-align:center;
@media (max-width: 778px) {
    padding: 10px 30px;
      
        }
`
const Para = styled.p`
color: #518ecb;
font-size: 16px;
line-height: 2px;
`
const PriceDiv = styled.div`
background:white;
border: 1px solid #e6e6e6;
border-radius: 2px;
padding-bottom: 30px;
`
const PricePara = styled.p`
color: #3eb549;
font-weight: 700;
font-size: 23px;

padding: 20px 65px;
    border-bottom: 1px solid #EAEDEF;
  
`
const SellerDiv = styled.div`
background:white;
border: 1px solid #e6e6e6;
border-radius: 2px;
padding-bottom: 30px;
margin-top:20px;
`
const SellerPara = styled.p`
font-weight: 700;
font-size: 23px;
padding: 20px 65px;
    border-bottom: 1px solid #EAEDEF;
        color: #434343;
`
const NumberShow = styled.p`
color: ${props => (props.show ? 'white' : 'rgb(21, 169, 73)')};
pointer-events: ${props => (props.show ? ": none" : '')}
   
        line-height: 1.4287;
  
        font-size: 18px;
        text-align:center;
`
const NumberPara = styled.p`

  cursor:pointer;
   
        line-height: 1.4287;
  
        font-size: 18px;
        text-align:center;
        color:white;
`
const NumberDiv = styled.div`

border-color: #37a241;
border-radius: 2px;
width: 85%;
margin:auto;
padding: 6px 0px;
 background-color: ${props => (props.show ? 'transparent' : '#3eb549')};
  border: ${props => (props.show ? '2px solid #37a241' : '#37a241')};
  
`
const SellerInfo = styled.div`
border-color: #37a241;
border-radius: 2px;
width: 85%;
margin:auto;
padding: 6px 0px;
`
const InspectDiv = styled.div`
display:flex;
flex-wrap:wrap-reverse;
align-items:center;
background:white;
justify-content: space-between;
border: 1px solid #e6e6e6;
padding-left: 25px;
padding-right: 25px;
padding-bottom: 25px;
padding-top: 10px;
margin-top:20px;
`
const Info = styled.div`

`
const ImagDiv = styled.div`

`
const OderListDiv = styled.div`
width: 200px;
display:flex;
justify-content: space-between;
flex-wrap:wrap;
text-align:start;
padding-bottom: 5px;
`
const ListItem = styled.p`
    font-size: 16px;
    font-weight: 400;
`
const Heading1 = styled.h1`
font-weight: 700;
font-size: 24px;
color: #233d7b;
line-height: 5px;
`
const Span = styled.span`
color: #b73439 !important;
`
const Heading3 = styled.h3`
font-size: 16px;
font-weight: 400;
color: #6b6b6b;
`
const Button = styled.button`
font-weight: 400;
padding: 10px 16px;
font-size: 18px;
line-height: 1.33333;
border-radius: 5px;
color: #fff;
    background-color: #3eb549;
    border-color: #37a241;
    cursor:pointer;
    
`
const DetailDiv = styled.div`
display:flex;
justify-content:space-between;
margin-top: 25px;

`
const ItemDiv = styled.div`
display:flex;
justify-content: space-between;
width:50%;
margin:0px 15px;
border-top: 1px solid #e6e6e6;
border-bottom: 1px solid #e6e6e6;
padding: 10px 3px;
`
const SpanDiv = styled.span`
margin-left:50px;
`
const SafetyPara = styled.p`
font-size: 16px;
font-weight: 700;
line-height: 1.5;
color: #233d7b;
text-align:center;
`
const OrderList = styled.ol`

`
const List = styled.li`
font-weight: 400;
font-size: 14px;
line-height: 1.4287;
color: #434343;

`
const ButtonLearn = styled.button`
background:transparent;
border:none;
cursor:pointer;
float:right;
color: #518ecb;
font-weight: 400;
font-size: 14px;
line-height: 1.4287;
margin-right: 10px;
`
