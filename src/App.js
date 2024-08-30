import React,{useState} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import GlobalStyle,{Container, Header, Row} from './globalStyles';
import { BrowserRouter } from "react-router-dom";
import UsedCarsData from './Navbar/Dropdowns/UsedCars/UsedCarsData';
import Routing from './Routing';
import MultiRowCarousel from './PracticeCarousel';
import HomePage from './HomePage/HomePage';

function App() {
  const [currency, setCurrency] = useState('USD');
  return (
  	<BrowserRouter>
    <Routing/>
    
		{/* <Navbar/> */}
    {/* <UsedCarsData/> */}
    {/* <NavbarContents/> */}
    {/* <MultiRowCarousel/> */}
		</BrowserRouter>
  );
}

export default App;
