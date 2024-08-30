import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Logo from '../logo/logo.svg'
import MiniNavbar from './MiniNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSortDesc, faTimes } from '@fortawesome/free-solid-svg-icons';
import UsedCars from './Dropdowns/UsedCars/UsedCars';
import NewCars from './Dropdowns/NewCars/NewCars';
import Bikes from './Dropdowns/Bikes/Bikes';
import AutoStores from './Dropdowns/AutoStores/AutoStores';
import More from './Dropdowns/More/More';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const HandleOnClick = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
      // document.body.style.filter = "blur(5px)";
    } else {
      document.body.style.overflow = 'auto';
    }
    navigate('/sell');
    
  }

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
      // document.body.style.filter = "blur(5px)";
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  // for Mobile Screen
  const handleMobileItemClick = (index) => {
    if (menuOpen) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  return (
    <MainContainer>
      
      <MiniNavbarContainer>
          <MiniNavbar/>
      </MiniNavbarContainer>
    
    <DropdownContainer  onMouseLeave={() => handleMouseLeave()}>
      <Link to='/'>
<ImageDiv>
<Image src={Logo}/>
</ImageDiv></Link>

 {/* Toggle menu button for mobile */}
 <MenuToggle onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </MenuToggle>

        <NavLinksContainer menuOpen={menuOpen}>

      <DropdownMain 
      onMouseEnter={() => handleMouseEnter(1)}
      onClick={() => handleMobileItemClick(1)}
      >
       
 <DropdownButton>
       Used Cars <FontAwesomeIcon icon={faSortDesc}/>
      </DropdownButton>
     
      <DropdownMenu show={activeDropdown === 1 || menuOpen}
     
     onMouseEnter={() => handleMouseEnter(1)}
      >
        {/* <MenuItem>Dropdown 1 Item 1</MenuItem> */}
        <UsedCars/>
     
      </DropdownMenu>

      </DropdownMain>
       
<DropdownMain  
   onMouseEnter={() => handleMouseEnter(2)}
   onClick={() => handleMobileItemClick(2)}
>
 <DropdownButton>
      New Cars<FontAwesomeIcon icon={faSortDesc} style={{marginLeft:'5px'}}/>
      </DropdownButton>

      <DropdownMenu show={activeDropdown === 2 || menuOpen}
       onMouseEnter={() => handleMouseEnter(2)}
       
      >

        <NewCars/>

      </DropdownMenu>

</DropdownMain>

<DropdownMain  
   onMouseEnter={() => handleMouseEnter(3)}
   onClick={() => handleMobileItemClick(3)}
>
 <DropdownButton>
        Bikes<FontAwesomeIcon icon={faSortDesc} style={{marginLeft:'5px'}}/>
      </DropdownButton>

      <DropdownMenu show={activeDropdown === 3 || menuOpen}
       onMouseEnter={() => handleMouseEnter(3)}
      >
 
        <Bikes/>
      </DropdownMenu>

</DropdownMain>
     
<DropdownMain  
   onMouseEnter={() => handleMouseEnter(4)}
   onClick={() => handleMobileItemClick(4)}
>
 <DropdownButton>
      Auto Store<FontAwesomeIcon icon={faSortDesc} style={{marginLeft:'5px'}}/>
      </DropdownButton>

      <DropdownMenu show={activeDropdown === 4 || menuOpen}
       onMouseEnter={() => handleMouseEnter(4)}
      >
       <AutoStores/>
      </DropdownMenu>

</DropdownMain>


<DropdownMain  
   onMouseEnter={() => handleMouseEnter(0)}
>   
 <DropdownButton>
      Videos

      </DropdownButton>
      <DropdownMenu show={activeDropdown === 0}
       onMouseEnter={() => handleMouseEnter(0)}
      >
      </DropdownMenu>

</DropdownMain>


<DropdownMain  
   onMouseEnter={() => handleMouseEnter(0)}
>
 <DropdownButton>
      Forums
      </DropdownButton>

      <DropdownMenu
       onMouseEnter={() => handleMouseEnter(0)}
      >
      </DropdownMenu>

</DropdownMain>


<DropdownMain  
   onMouseEnter={() => handleMouseEnter(0)}
>
 <DropdownButton>
      Blog
      </DropdownButton>

      <DropdownMenu 
       onMouseEnter={() => handleMouseEnter(0)}
      >
      </DropdownMenu>

</DropdownMain>

<DropdownMain  
   onMouseEnter={() => handleMouseEnter(5)}
>
 <DropdownButton>
        More<FontAwesomeIcon icon={faSortDesc} style={{marginLeft:'5px'}}/>
      </DropdownButton>

      <DropdownMenu show={activeDropdown === 5}
       onMouseEnter={() => handleMouseEnter(5)}
      >
       <More/>
      </DropdownMenu>

</DropdownMain>

<div>
<DropdownMainEnd  
   onMouseEnter={() => handleMouseEnter(6)}
>
 <DropdownButton onClick={HandleOnClick}>
        Post an Ad<FontAwesomeIcon icon={faSortDesc} style={{marginLeft:'5px'}}/>
      </DropdownButton>

      <DropdownMenu show={activeDropdown === 6}
       onMouseEnter={() => handleMouseEnter(6)}
  
      >
        <MenuItem onClick={HandleOnClick}>Sell Your Car</MenuItem>
        <MenuItem>Sell Your Bike</MenuItem>
        <MenuItem>Sell Accessory</MenuItem>
      </DropdownMenu>

</DropdownMainEnd>
</div>
</NavLinksContainer>
    </DropdownContainer>
   
      {/* <HeroSection/> */}
      {menuOpen && <Overlay onClick={handleToggleMenu} />}
    
    </MainContainer>
  );
};

export default Navbar;
const dropdownAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(-5px);
  }
`;
const dropupAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0.5;
    transform: translateY(-10px);
  }
`;

const DropdownContainer = styled.div`
margin-top: 15px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction:row;
justify-content: space-evenly;

@media (max-width: 1200px) {
  justify-content: space-between;
  
}
`;

const DropdownButton = styled.div`
 
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 15px;
  


`;

const DropdownMenu = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 5px);
 
  background-color: white;
  border-bottom: 4px solid #b73439;
  box-shadow: 0px 4px 4px -2px grey;
  cursor: pointer;
  max-height: 500px; /* Max height of the dropdown */
  overflow-y: auto; /* Enable vertical scrolling */
  animation: ${props =>
    props.show
      ? css`${dropdownAnimation} 0.5s ease-in forwards`
      : css`${dropupAnimation} 0.5s ease-in forwards`};
        @media (max-width: 1200px) {
    display: block; /* Display on smaller screens */
  display: none;

  }
`;

const MenuItem = styled.div`
  padding: 10px;
  color:black;
  &:hover {
    color:blue;

  }
`;
const DropdownMain = styled.div`
margin: 0px 12px;
color:white;
&:hover {
  background-color:white;
  color: #b73439;
}
`
const DropdownMainEnd = styled.div`
color:white;
background-color:#b73439;
border-radius:5px;
text-align:center;
margin-left: 20px;
padding: 1px 9px;
`

const Image = styled.img`
width : 150px;
height : 100%;
margin-right: 20px;
@media (max-width: 1200px) {

  margin-right: 0px;
  margin-left: 110px;
}
@media (max-width: 768px) {
  margin-left: 5px;
}
`
const MainContainer = styled.div`
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,0.9136904761904762) 36%, rgba(4,21,91,1) 100%, rgba(3,142,171,1) 100%);
`
const MiniNavbarContainer = styled.div`
  border-bottom: 1px solid #434343;
  margin: 0px 120px;

  @media (max-width: 768px) {
    margin: 0px 20px;
  }
`;
const MenuToggle = styled.div`
  display: none; /* Initially hidden on larger screens */
  cursor: pointer;
  font-size: 20px;
  @media (max-width: 1200px) {
    display: block; /* Display on smaller screens */
    position: absolute;
    top: 0px;
    right: 115px;
    z-index: 1000; /* Ensure it's above other content */
    color: white;

  }
  @media (max-width: 768px) {
    right: 20px;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    
    padding-top: 15px;
    padding-bottom: 15px;
    background: #080261;
    width: 100%;
    height: 70vh;
    position: absolute;
    z-index: 999;
    top: 45px; /* Adjust according to your design */
    left: ${(props) => (props.menuOpen ? '0' : '-100%')}; /* Hide off-screen */
    transition: left 0.3s ease-in-out;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
const ImageDiv = styled.div`

@media (max-width: 768px) {
  justify-content: space-between;
  margin-left: 12px;
}

`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0.5, 0.5); /* Semi-transparent black overlay */
  z-index: 998; /* Ensure it's below the menu */
`;