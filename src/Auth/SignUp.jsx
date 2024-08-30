import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled, { keyframes, createGlobalStyle } from "styled-components";
import Swal from 'sweetalert2'
import Login from "./Login";

const Signup = ({ onClose }) => {
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); 
  const [showModal2, setShowModal2] = useState(false);


  const handleSignup = (e) => {

    e.preventDefault();
    if(password === confirmPassword){

    localStorage.setItem("signUpMail",email);
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
        onClose();
        navigate('/login-page')
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account Created Successfully!",
          showConfirmButton: false,
          timer: 1500
               });
    }).catch((e) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something is Wrong!",
            });
    })
 }
    else{
        alert("password do not match!")
    }
    // localStorage.setItem('user', JSON.stringify({ username, password }));
    // navigate('/login');
  };
  const HandleOnClick = () => {
    navigate('/login-page')
  onClose()
   }
   const handleCloseModal2 = () => {
     setShowModal2(false);
   };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
      <CloseButton onClick={onClose}>X</CloseButton>
        <Title>Let’s get you started!</Title>
        <Form onSubmit={handleSignup}>
            <Label>Email Address</Label>
          <Input
            type="email"
            name="email"
            placeholder='username@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
             <Label>Full Name</Label>
          <Input
            type="text"
            name="text"
            placeholder='Enter your full name here'
            value={text}
            onChange={(e) => setText(e.target.value)} 
          />
          <Label>New Password</Label>
          <Input
            type="password"
            name="password"
            placeholder='Set a New Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Label>Confirmed Password</Label>
          <Input
            type="password"
            name="password"
            placeholder='Enter Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          <Button >SignUp</Button>
        
        </Form>
        <div style={{display:'flex',justifyContent:'center'}}><p style={{color:'black'}}>Already have an account?</p>
        <LinkButton onClick={HandleOnClick} style={{textDecoration:'none',marginLeft:'4px'}}>LogIn</LinkButton>
       
        </div>
      </Wrapper>
      
    </>
  );
};

export default Signup;
const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

const Wrapper = styled.section`
position: fixed;

top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
padding: 30px;
border: 1px solid #ccc;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
border-radius:5px;
width: 30%;
height: 90%;
z-index: 20;
@media (max-width: 1200px) {
  width: 40%;
  height: 85%;
}

@media (max-width: 992px) {
  width: 60%;
  height: 90%;
}

@media (max-width: 768px) {
  width: 80%;
  height: auto;
  max-width: 400px;
}
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    max-width: 100%;
    justify-content: space-between;
  }
`;

const Input = styled.input`
  max-width: 100%;
  padding: 18px 13px;
  background: #f9f9fa;
  color:black;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  border: none;
  outline: 0;
 
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #1877f2;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 15%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 10px;
   }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
color: black;
@media (max-width: 768px) {
  margin-bottom: 15px;
 }
 @media (max-width: 992px) {
  margin-bottom: 5px;
 }
 @media (max-width: 1200px) {
   margin-bottom: 5px;
 }
`
const LinkButton = styled.button`
background: transparent;
cursor:pointer;
border:none;
color: #1877f2;
`