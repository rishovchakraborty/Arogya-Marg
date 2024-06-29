import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import irisScanPic from '../assets/IrisScanPic.svg';
import PicUser from '../components/PicUser';

const IrisScan = () => {
  return (
    <div>
    <Navbar url='/fingerPrint'/>

    <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

      {/* circles */}
        <div className='flex mt-4 mb-6'>
          <div className='bg-gray-300 w-[12px] h-[12px] top-[160px] left-[668px] rounded-full '></div>

        <div className='bg-gray-300 w-[12px] h-[12px] top-[60px] left-[668px] mx-8 rounded-full '></div>

        <div className='bg-bluebtn w-[12px] h-[12px] top-[60px] left-[668px] rounded-full '></div>

        </div>

        <div className='w-[877px] h-[42px] left-[282px]  mb-4'>
          <div className='font-[600] text-[22px] leading-[42px]'>Please Stand straight and look into the camera for an iris scan</div>
        </div>

<PicUser/>

        <Link to='/loginSuccess'>
          <button className=' fixed top-[204px] right-[40px] bg-bluebtn py-2 px-8 text-white rounded-xl'>
            Verify
          </button>
        </Link>

        </div>
    </div>
  )
}

export default IrisScan