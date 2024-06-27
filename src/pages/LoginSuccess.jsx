import Navbar from '../components/Navbar';
import loginSuccessPic from '../assets/LoginSuccessPic.svg';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function LoginSuccess() {
  // useEffect(() => {
  //   // Set a timeout to redirect after a few seconds (e.g., 3 seconds)
  //   const redirectTimer = setTimeout(() => {
  //     window.location.href = '/concern1'; // Change the URL to redirect to the desired route
  //   }, 2000); // 3000 milliseconds = 3 seconds

  //   // Clean up the timer when the component unmounts
  //   return () => clearTimeout(redirectTimer);
  // }, []);

  return (
    <div>
      <Navbar url='/irisScan' />

      <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>


<Link to='/concern1'>
        <img className='mt-40' src={loginSuccessPic} alt="Login Success" />
        <div className='font-[600] text-[22px] leading-[42px] w-[231px] h-[42px] top-[654px] left-[605px] mt-2'>
          Login successful
        </div>
        </Link>

      </div>
    </div>
  );
}

export default LoginSuccess;
