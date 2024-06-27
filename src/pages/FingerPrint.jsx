import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import fingerPrintPic from '../assets/FingerPrintPic.svg';

const FingerPrint = () => {
  return (
    <div>
        <Navbar url='/login'/>

        <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

          {/* circles */}
            <div className='flex mt-12 mb-6'>
              <div className='bg-gray-300 w-[12px] h-[12px] top-[160px] left-[668px] rounded-full '></div>

            <div className='bg-bluebtn w-[12px] h-[12px] top-[60px] left-[668px] mx-8 rounded-full '></div>

            <div className='bg-gray-300 w-[12px] h-[12px] top-[60px] left-[668px] rounded-full '></div>

            </div>

            <div className='w-[624px] h-[42px] top-[360px] left-[408px] mt-12 mb-4'>
              <div className='font-[600] text-[22px] leading-[42px]'>Place your thumb on the fingerprint scanner</div>
            </div>

            <Link to='/irisScan'>
              <button className='w-[204px] h-[250px] top-[364px] left-[593px]'>
                <img src={fingerPrintPic}  className='hover:drop-shadow-lg'/>
              </button>
            </Link>

            </div>
        </div>
  )
}

export default FingerPrint