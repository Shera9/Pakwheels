import React,{useState,useEffect} from 'react'
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMessage, faMobile, faSortDesc, faUpDown } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Signup from '../Auth/SignUp'
import Login from '../Auth/Login'
import Swal from 'sweetalert2';
import { auth } from '../Firebase';

const MiniNavbar = () => {

const navigate = useNavigate();
const [isOpen, setIsOpen] = useState(false);
  const HandleLogOut = async() =>{
    try {
        await auth.signOut();
        localStorage.removeItem('SignInMail');
        setShowModal2(true);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Logout",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/login-page')
      } catch (error) {
        console.error('Error logging out: ', error);
      }
  }
const SignInMail = localStorage.getItem('SignInMail')
  useEffect(() => {
 setShowModal(false)
 setShowModal2(false)
  }, [SignInMail]); 

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  
  


  const [showModal, setShowModal] = useState(false); 
  const [showModal2, setShowModal2] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
 

  const handleLoginClick2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const HandleAdLink = () => {
    setIsOpen(false);
    navigate('/ad')
  }
   
  return (
    <Container>

      <Row1>

        <Col>
        <FontAwesomeIcon icon={faMobile} style={{marginTop:'8px',color:'#b73439'}}/>
            <Para>Download App via SMS</Para>
        </Col>
      
 </Row1>
   
 <Row>
          <Col>
            <Urdu>اردو</Urdu>
{
 
 SignInMail !== null  ?
  <>
   <Span2></Span2> <DropdownContainer>
      <DropdownButton
        className="dropbtn"
        onClick={handleDropdownToggle}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
 <NamP >Welcome {SignInMail}!<FontAwesomeIcon icon={faSortDesc}/></NamP>
      </DropdownButton>
      <DropdownContent className={isOpen ? 'dropdown-content show' : 'dropdown-content'}
       onMouseEnter={() => setIsOpen(true)}
       onMouseLeave={() => setIsOpen(false)}
      >
        <DropdownLink href="#">Profile</DropdownLink>
        <DropdownLink onClick={HandleAdLink}>My Ads</DropdownLink>
        <DropdownLink href="#">My Orders</DropdownLink>
        {/* <DropdownLink href="#">My Orders</DropdownLink> */}
        <DropdownLink href="#">My Saved Ads</DropdownLink>
        <DropdownLink href="#">My Rides</DropdownLink>
        <DropdownLink href="#">Alerts</DropdownLink>
        <DropdownLink href="#" style={{borderBottom:'2px solid grey'}}>Messages</DropdownLink>
        <DropdownLink onClick={HandleLogOut}>Sign Out</DropdownLink>
        {/* {showModal2 && <Login onClose={handleCloseModal2} />} */}
      </DropdownContent>
    </DropdownContainer><Span2></Span2>
 

  <FontAwesomeIcon icon={faMailBulk} style={{marginTop:'8px',marginLeft:'2px'}}/>
   </>
  :
  <>
  <Span></Span> <Items onClick={handleLoginClick}> Sign Up </Items>
            {showModal && <Signup onClose={handleCloseModal} />}
            <Span></Span> <Items onClick={handleLoginClick2}> Sign In </Items>
            {showModal2 && <Login onClose={handleCloseModal2} />}
            </>
}
            

          </Col>

          </Row>
    </Container>
  )
}

export default MiniNavbar

const Container  = styled.div`
display: flex;
justify-content: space-between;

color: white;
@media (max-width: 768px) {

  align-items: center;
}
`
const Row1  = styled.div`
line-height:2px;
font-size: 14px;
@media (max-width: 768px) {
  
  font-size: 12px;
}

`
const Row = styled.div`
margin-top: 3px;
@media (max-width: 768px) {
 
`
const Col  = styled.div`
display: flex;

list-style-type: none;
margin:0;
justify-content: space-between;
@media (max-width: 768px) {
  
  flex-wrap: no-wrap;
  align-items: center;
  line-height: 5px;
}
`
const Urdu = styled.li`
color: #b73439;
margin: 0px 5px;
font-size: 14px;
`
const Items = styled.li`
margin: 0px 5px;
font-size: 14px;
text-decoration:none;
color: white;
cursor: pointer;
@media (max-width: 768px) {
  
  font-size: 12px;
}
`
const Span = styled.span`
border-left: 2px solid grey;
margin-top: 5px;
`
const MenuContainer = styled.div`
border-bottom: 1px solid black;
`
const Para = styled.p`
margin-left: 7px;
@media (max-width: 768px) {
  
  margin-left: 0px;
  font-size: 12px;
  margin-top: 15px;
}
`
const NamP = styled.p`
font-size : 12px;
padding: 0px 2px;
cursor: pointer;
@media (max-width: 768px) {
  
  font-size: 12px;
}

`
const Span2 = styled.span`
border-left: 2px solid grey;
margin: 12% 0%;

`
const DropdownContainer = styled.div`
  position: relative;
    z-index: 3;
  display: inline-block;
 
`;

const DropdownButton = styled.button`
 
  color: white;

  background-color: transparent;
  border: none;
  cursor: pointer;

`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;

  top: 35px;
  background-color: white;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
 border-radius: 6px;
  &.show {
    display: block;
  }
`;

const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  cursor: pointer;
  display: block;
     font-size: 12px;
     line-height: 6px;
  &:hover {
    background-color:#223c7a;
    color: white;
  }
`;