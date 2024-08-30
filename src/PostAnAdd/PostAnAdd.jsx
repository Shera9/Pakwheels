import React,{useState} from 'react'
import AdImg1 from '../Images/PostAnAd/postad-img-58f5eb96777aff56872a2ee71b6475fd.png'
import AdImg2 from '../Images/PostAnAd/postsifm-ad-f4537763e3d48b3dafd3926515aa7c4e.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Login from '../Auth/Login'

const PostAnAdd = () => {
     
    const navigate = useNavigate()
    const user = localStorage.getItem("SignInMail")
    const [showModal2, setShowModal2] = useState(false);

    const HandleOnClick = () => {
     if(user !== null){
        navigate('/sell/post-ad');
     }
    
    else
     setShowModal2(true);
    }
    const handleCloseModal2 = () => {
      setShowModal2(false);
    };
  return (
    <MainBack>
     <Heading1>Sell Your Car Online in Pakistan Instantly!</Heading1>
     <Heading2>Choose How To Sell Your Car</Heading2>

     <Row>
        <Col>
        <h2>Post your Ad on PakWheels</h2>
        <img src={AdImg1}/>
        <Para>Post your Ad for Free in 3 Easy Steps</Para>
        <Para>Get Genuine offers from Verified Buyers</Para>
        <Para>Sell your car Fast at the Best Price</Para>
        <Button onClick={HandleOnClick}>Post An Ad</Button>
        {showModal2 && <Login onClose={handleCloseModal2} />}
        </Col>
        <Col>
        <h2>Post your Ad on PakWheels</h2>
        <img src={AdImg2}/>
        <Para>Dedicated Sales Expert to Sell your Car</Para>
        <Para>We Bargain for you and share the Best Offer</Para>
        <Para>We ensure Safe & Secure Transaction</Para>
        <Button>Sell It For Me</Button>
        </Col>
     </Row>
    </MainBack>
  )
}

export default PostAnAdd

const Heading1 = styled.h1`
font-size: 28px;
color: #233d7b;
text-align: center;
line-height: 15px;
@media (max-width: 576px) {
    font-size: 22px;
  }
`
const Heading2 = styled.h2`
font-size: 26px;
color: #545454;
text-align: center;
line-height: 15px;
@media (max-width: 576px) {
    font-size: 20px;
  }
`
const MainBack = styled.div`
background: #bec9d9;
padding: 20px 0px;
`
const Row = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap:20px;
margin-top: 55px;
`
const Col = styled.div`
background: white;
padding: 20px 80px;
border-radius: 6px;
text-align:center;
`
const Button = styled.button`
background-color: #182953;
border-color: #101c38;
font-size: 14px;
color: white;
padding: 10px 40px;
border-radius: 6px;
cursor:pointer;

`
const Para = styled.p`
line-height: 11px;
text-align: start;
`