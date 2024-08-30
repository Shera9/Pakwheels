import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled, { keyframes, createGlobalStyle } from "styled-components";
import Swal from 'sweetalert2'

const SignUpPage = ({ onClose }) => {
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if(password === confirmPassword){

    localStorage.setItem("signUpMail",email);
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
        // onClose();
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
        text: "Something went wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    })
 }
    else{
        alert("password do not match!")
    }
    // localStorage.setItem('user', JSON.stringify({ username, password }));
    // navigate('/login');
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
      {/* <CloseButton onClick={onClose}>X</CloseButton> */}
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
          <Button>SignUp</Button>
        </Form>
        <div style={{display:'flex',justifyContent:'center'}}><p style={{color:'black'}}>Already have an account?</p><Link to='/login-page' style={{textDecoration:'none',marginLeft:'4px'}}>LogIn</Link></div>
      </Wrapper>
    </>
  );
};

export default SignUpPage;
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
z-index: 2;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
   
`;

const Input = styled.input`
  max-width: 100%;
  padding: 18px 13px;
  background: #f9f9fa;

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
`