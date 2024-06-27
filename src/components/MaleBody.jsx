import React from 'react'
import maleBody from '../assets/MaleBody.svg';

const MaleBody = () => {
  return (
    <div className='flex gap-20'>
      <div className='fle fle-col gap-16'>
        <div className='flex mt-[100px] items-center justify-center'>
          <div value='Shoulder' className='bg-bluebtn py-2  text-white rounded-lg px-4 cursor-pointer'>Shoulder</div>
          <hr class="ml-72 w-48 border border-black absolute" />
        </div>
        <div className='flex mt-[4px] items-center justify-center'>
          <div value='Chest' className='bg-bluebtn py-2  text-white rounded-lg px-4 cursor-pointer'>Chest</div>
          <hr class="ml-72 w-52 border border-black absolute" />
        </div>
        <div className='flex mt-[4px] items-center justify-center'>
          <div value='Arm' className='bg-bluebtn py-2  text-white rounded-lg px-4 cursor-pointer'>Arm</div>
          <hr class="ml-48 w-40 border border-black absolute" />
        </div>
        <div className='flex mt-[2px] items-center justify-center'>
          <div value='Stomach' className='bg-bluebtn py-2  text-white rounded-lg px-4 cursor-pointer'>Stomach</div>
          <hr class="ml-80 w-56 border border-black absolute" />
        </div>
        <div className='flex mt-[32px] items-center justify-center'>
          <div value='Thigh' className='bg-bluebtn py-2  text-white rounded-lg px-4 cursor-pointer'>Thigh</div>
          <hr class="ml-72 w-56 border border-black absolute" />
        </div>
        <div className='flex mt-[100px] items-center justify-center'>
          <div value='Leg' className='bg-bluebtn py-2  text-white rounded-lg px-4 cursor-pointer'>Leg</div>
          <hr class="ml-64 w-52 border border-black absolute" />
        </div>
      </div>
      <img src={maleBody} alt="Male Body" />
      <div>
        <div className='flex mt-[76px] items-center justify-center'>
          <hr class="mr-[330px] w-[250px] border border-black absolute" />
          <div value='Neck' className='bg-bluebtn py-2  text-white rounded-lg px-4 cursor-pointer'>Neck</div>
        </div>
        <div className='flex mt-[76px] items-center justify-center'>
          <hr class="mr-[330px] w-[250px] border border-black absolute" />
          <div value='Back' className='bg-bluebtn py-2  text-white rounded-lg px-4 cursor-pointer'>Back</div>
        </div>
      </div>
    </div>
  )
}

export default MaleBody;
