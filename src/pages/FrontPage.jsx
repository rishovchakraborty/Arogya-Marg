import React from 'react'
import frontPagePic from '../assets/FrontPagePic.svg';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FrontPage = () => {
    return (
        // <Navbar/>
        <div className='w-[100pvh] h-[100vh] flex flex-col justify-center items-center bg-bgcolor'>
            <div class="TranslateElement" id="google_translate_element"></div>
            {/* picture  */}
            <div className='flex flex-col justify-center items-center '>
                <img className='w-[693px] h-[546.62px] top-[142px] left-[362px]' src={frontPagePic} alt='frontPagePic' />
            </div>

            {/* text */}
            <div>
                <div className='font-bold text-white text-center text-[40px] mt-[-80px] mb-[10px]'>SEHAT</div>

                <div className='z-auto w-[669px] h-[25px] top-[686px] left-[386px] font-[500] text-[22px] leading-[25px] text-white text-center mb-[30px]'>
                    System for Enhanced Healthcare Assistance & Telemedicine
                </div>
            </div>

            {/* description */}
            <div>
                <div className=' mb-[20px] w-[550px] h-[54px] top-[743px] left-[445px] font-[500] text-[18px] leading-[27px] text-center text-white'>
                    An intelligent health kiosk empowering with convenient access to primary and preventive healthcare services.
                </div>
            </div>

            {/* button */}
            <Link to='/selectCase' className='bg-bluebtn w-[272px] h-[52px] top-[821px] left-[580px] rounded-[10px] text-white flex flex-col justify-center items-center'>Get Started</Link>

            {/* concentric circles */}
            <div className='bg-lightbg w-[567.61px] h-[558px] top-[400px] left-[1053px] fixed rounded-full -z-1 '>
                <div className='bg-lightbg2 w-[367.61px] h-[358px] top-[500px] left-[1153px] fixed rounded-full'></div>
            </div>

        </div>
    )
}

export default FrontPage