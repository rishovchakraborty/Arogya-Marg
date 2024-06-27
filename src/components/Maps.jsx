import React, { useState,useEffect } from 'react'
import mappic from '../assets/mapNear.svg';
import {IoLocationOutline,IoCallOutline} from 'react-icons/io5';
import {GoDotFill} from 'react-icons/go';
import {AiOutlineLeft,AiOutlineRight,AiOutlineSearch} from 'react-icons/ai';
import Loading from './Loading';
const Maps = () => {

const[loading,setLoading]=useState(true);

useEffect(() => {
  // Simulate loading delay (e.g., an API request) with setTimeout
  setTimeout(() => {
    setLoading(false); // Set loading to false when your content is ready
  }, 2000); // Adjust the delay time as needed
}, []);


  return (
    <div>
      {loading?<Loading/>:<div>

<input className='fixed top-[130px] left-[50px] text-[12px] bg-white flex justify-center text-center border-gray-700 border-2 items-center rounded-lg cursor-pointer w-[180px] h-[30px]' type='text' placeholder='Enter location manually'/>
 
  <img src={mappic} className='w-[100vw] h-[67vh] object-cover mt-[-20px]'/>

  <div className='flex justify-center items-center m-auto h-[calc(33vh-80px)] font-light text-[14px]'>

    <div><AiOutlineLeft/></div>

      {/* fortis */}
    <div className='bg-white w-1/4 flex flex-col justify-center items-start mx-5 p-1 px-10 rounded-lg'>
      <div className='font-semibold my-2'>
        Fortis Hospital
      </div>
      <div className='flex '>
        <span><IoLocationOutline/></span><span className='ml-2'>B-22 Sector 62, Noida, Uttar Pradesh 201301</span>
        </div>
      <div className='flex flex-row justify-center items-center'>
        <span><IoCallOutline/></span><span className='ml-2'>0120 430 0222</span>
        </div>
      <div className='flex text-bgcolor flex-row justify-center items-center'>
        <span><GoDotFill/></span><span className='ml-1'>Live bed status</span>
        </div>
      <div className='mx-4'>191 beds available</div>
    </div>


    {/* apollo */}
    <div className='bg-white w-1/4 flex flex-col justify-center items-start mx-5 p-1 px-10 rounded-lg'>
      <div className='font-semibold my-2'>
        Apollo Hospitals Noida
      </div>
      <div className='flex '>
        <span><IoLocationOutline/></span><span className=''> Kamal Marg, Block B, S-52, Noida, Uttar Pradesh 201307</span>
        </div>
      <div className='flex flex-row justify-center items-center'>
        <span><IoCallOutline/></span><span className='ml-2'>0120 249 8801</span>
        </div>
      <div className='flex text-bgcolor flex-row justify-center items-center'>
        <span><GoDotFill/></span><span className='ml-1'>Live bed status</span>
        </div>
      <div className='mx-4'>126 beds available</div>
    </div>

    {/* max */}
    <div className='bg-white w-1/4 flex flex-col justify-center items-start mx-5 p-1 px-10 rounded-lg'>
      <div className='font-semibold my-2'>
        Max Multi Speciality Centre
      </div>
      <div className='flex '>
        <span><IoLocationOutline/></span><span className=''>A364, A Block, Pocket A, Sector 19, Noida, 201301 </span>
        </div>
      <div className='flex flex-row justify-center items-center'>
        <span><IoCallOutline/></span><span className='ml-2'>0120 662 9999</span>
        </div>
      <div className='flex text-bgcolor flex-row justify-center items-center'>
        <span><GoDotFill/></span><span className='ml-1'>Live bed status</span>
        </div>
      <div className='mx-4'>69 beds available</div>
    </div>

  <div><AiOutlineRight/></div>

  </div>
</div>}
    </div>
  )
}

export default Maps