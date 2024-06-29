import React, { useState ,useContext} from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import OTP from '../components/OTP'
import noteContext from '../context/notes/noteContext'
const Login = () => {
  const {adhar , handleChange_adhar}=useContext(noteContext);
  const sendAdhar=async(event)=>{
    event.preventDefault()
    const final=await fetch('https://sehat-backend.onrender.com/api/adhar',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(adhar)
  })
    if (final.ok){
      console.log(final)
    }
  }
  return (
    <div>
      <Navbar url='/selectCase' />

      <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

        {/* circles */}
        <div className='flex mt-12'>
          <div className='bg-bgcircle w-[12px] h-[12px] top-[160px] left-[668px] rounded-full '></div>

          <div className='bg-gray-300 w-[12px] h-[12px] top-[60px] left-[668px] mx-8 rounded-full '></div>

          <div className='bg-gray-300  w-[12px] h-[12px] top-[60px] left-[668px] rounded-full '></div>

        </div>

        <div className=' h-[42px] top-[360px] left-[593px] mt-10'>
          <div className='font-[600] text-[24px] leading-[42px]'>Login with Aadhar / Abha Number</div>
        </div>

        <div className='flex justify-evenly'>
        <div className='mt-8'>
          <div className='text-[17px]'>Enter your Aadhar number</div>

          <form >
            <input type="text" required={true} onChange={handleChange_adhar}
              className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="xxxx-xxxx-xxxx-xxxx"
            />
            <button type='submit' className='bg-bluebtn rounded-lg px-8 py-2 my-4 text-white font-[100] ' onClick={sendAdhar}>Proceed</button>
          </form>
        </div>
          <div className='mt-20 pl-48'>
            OR
          </div>
        <div className='mt-8 ml-60'>
          <div className='text-[17px]'>Enter your Abha number</div>

          <form >
            <input type="text" required={true} onChange={handleChange_adhar}
              className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              placeholder="xx-xxxx-xxxx-xxxx"
            />
            <button type='submit' className='bg-bluebtn rounded-lg px-8 py-2 my-4 text-white font-[100] ' onClick={sendAdhar}>Proceed</button>
          </form>
        </div>
        </div>
<div className='mt-12'>
  <OTP/>
</div>

      </div>
    </div>
  )
}

export default Login