import React from 'react'
import connectDoctor from '../assets/eSanjeevaniConnectDoctor.svg';
import { Link } from 'react-router-dom';
const Sh4 = () => {
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-all'>
            <div className='font-[600] text-[25px]'>You Do not have any Heart related disease </div>
            {/* circle, language */}
            <div>

                {/* circle */}
                <div className='bg-[#DEF0FF] w-[391px] h-[391px] top-[-123px] left-[-123px] fixed rounded-full'>

                </div>

                {/* lanuage */}
                <div>
                    {/* component */}
                </div>
            </div>

            {/* picture  */}
            <div className='flex flex-col justify-center items-center '>
                <img className='w-[467px] h-[446.62px] top-[142px] left-[362px]' src={connectDoctor} />
            </div>

            {/* text */}
            {/* <div>

            <div className='w-[669px] h-[25px] top-[686px] left-[386px] font-[600] text-[22px] leading-[25px]  text-center mb-[30px]'>
            You are being connected to a doctor
            </div>
        </div> */}

            {/* description */}
            <div>
                <div className='loading mb-[20px] w-[550px] h-[54px] top-[743px] left-[445px] flex justify-center items-center font-[500] text-[18px] leading-[27px] text-center'>
                    <span className='w-[14px] h-[14px] bg-bluebtn rounded-full inline-block'></span>
                    <span className='w-[14px] mx-6 h-[14px] bg-bluebtn rounded-full inline-block'></span>
                    <span className='w-[14px] h-[14px] bg-bluebtn rounded-full inline-block'></span>
                </div>
            </div>


            {/* concentric circles */}
            <div className='bg-[#d9e7fd] w-[567.61px] h-[558px] top-[400px] left-[1053px] fixed rounded-full'>
                <div className='bg-[#DEF0FF] w-[367.61px] h-[358px] top-[500px] left-[1153px] fixed rounded-full'></div>
            </div>

        </div>
    )
}

export default Sh4