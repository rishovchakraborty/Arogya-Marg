import React from 'react'
import Navbar from '../components/Navbar'
import emergency from '../assets/emergency.png';
import consultDoctor from '../assets/consultDoctor.svg';
import { Link } from 'react-router-dom';

const SelectCase = () => {
  return (
    <div>
      <Navbar url='/' />
      <div className='w-[100vw]  flex flex-col justify-center items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>
        <div className='w-[680px] h-[383px] top-[220px] left-[380px] mt-[-120px]'>
          <div className='mb-6 text-2xl'>Please select your option</div>

          <div className='flex justify-between items-baseline mt-[60px]'>

            <div>
              <Link to='/emergency'>
                <img className='hover:drop-shadow-lg' src={emergency} alt='emergency' />
                <div className='mt-6'>Emergency</div>
              </Link>
            </div>

            <div>
              <Link to='/login'><img className='hover:drop-shadow-lg' src={consultDoctor} alt='consult doctor' />
              <div className='mt-6'>Consult Doctor</div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectCase