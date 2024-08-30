// src/App.js
import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Auth/SignUp';
import Login from './Auth/Login';
import Logout from './Auth/LogOut';

import styled from 'styled-components';
import { auth } from './Firebase';
import Navbar from './Navbar/Navbar';
import SellYourCar from './SellYourCar/SellYourCar';
import UsedCarsCarousel from './Carousel/UsedCarsCarousel';
import PakwheelsOffering from './PakwheelsOffering/PakwheelsOffering';
import PakwheelsOfferingData from './PakwheelsOffering/PakwheelsOfferingData';
import ManagedByPakwheel from './ManagedByPakwheels/ManagedByPakwheel';
import UsedCarsFeatured from './UsedCarsForSale/UsedCarsFeatured';
import UsedCarsData from './UsedCarsForSale/UsedCarsData';
import PostAnAdd from './PostAnAdd/PostAnAdd';
import HomePage from './HomePage/HomePage';
import AdPosting from './PostAnAdd/AdPosting';
import DisplayAd from './AdForm/DisplayAd';
import SignUpPage from './Auth/SignUpPage';
import LogInPage from './Auth/LogInPage';
import Footer from './Footer/Footer';
import UsedCarsSearch from './HeroSection/UsedCarsSearch';
import UsedCarsDetails from './HeroSection/UsedCarsDetails';


function Routing() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
          } else {
            setIsAuthenticated(false);
            localStorage.removeItem('isAuthenticated');
          }
        });
    
        return () => unsubscribe();
      }, []);
//   const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  return (
   
  <>
     <Navbar/>
     <Container>
        <Routes>
      
          {/* <Route path="/" element={<Navbar />} /> */}

           <Route path='/' element ={<HomePage/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
           <Route path="/signup-page" element={<SignUpPage />} />
          <Route path="/login-page" element={<LogInPage />} /> 
          <Route path='/sell' element ={<PostAnAdd/>}/>
          <Route path='/sell/post-ad' element ={<AdPosting/>}/>
          <Route path='/ad' element ={<DisplayAd/>}/>
         <Route path='/used-cars/search' element={<UsedCarsSearch/>}/>
         <Route path='/used-cars/:id' element ={<UsedCarsDetails/>}/>
        </Routes>
</Container>
    <Footer/>  
</>
       
  );
}

export default Routing;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const NavDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background:#63adad;
margin: 0;
color: white;
padding: 0px 100px
`
const ButtonSignIn = styled.button`
border: none;
border-radius: 5px;
padding: 10px 20px;
margin-right: 2px;
&:hover{
    cursor:pointer;
    background-color:#e8e5dc;
}
`
const ButtonSignUp = styled.button`
border: none;
border-radius: 5px;
padding: 10px 20px;
margin-left: 2px;

&:hover{
    cursor:pointer;
    background-color:#e8e5dc;
}

`
const ButtonLogout = styled.button`
border: none;
border-radius: 5px;
padding: 10px 20px;
&:hover{
    cursor:pointer;
    background-color:#e8e5dc;
}
`