import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import styled, {keyframes} from 'styled-components';
import Swal from 'sweetalert2';

const Logout = () => {
  const navigate = useNavigate();

  const HandleLogOut = async() =>{
    try {
        await auth.signOut();
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Logout",
            showConfirmButton: false,
            timer: 1500
          });
      } catch (error) {
        console.error('Error logging out: ', error);
      }
  }


  return (
    <div>
        <Button onClick={HandleLogOut}>LogOut</Button>
    </div>
  );
};

export default Logout;
const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;
const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #4e5994;
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;