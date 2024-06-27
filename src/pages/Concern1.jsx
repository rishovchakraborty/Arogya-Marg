import React from 'react'
import Navbar from '../components/Navbar'
import ConsultDoctor from '../assets/ConsultDoctor.svg';
import general from '../assets/General.svg';
import diabetes from '../assets/Diabetes.svg';
import heart from '../assets/Heart.svg';
import CryptoJS from 'crypto-js';
import cataract from '../assets/Cataract.svg';
import { Link } from 'react-router-dom';
//import cryptoRandomString from 'crypto-random-string';
const Concern1 = () => {
  //const secretKey=cryptoRandomString({length:64,type:'hex'});
  const handleGeneral=async()=>{
    //const encryptedValue=CryptoJS.AES.encrypt("General Health Checkup",secretKey).toString();
    const final=await fetch('https://sehat-backend.onrender.com/api/option',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify("General Health Checkup")
  })
    if (final.ok){
      console.log(final)
    }
  }
  const handleDiabetes=async()=>{
    //const encryptedValue=CryptoJS.AES.encrypt("Diabetes",secretKey).toString();
    const final=await fetch('http://localhost:5000/api/option',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify("Diabetes")
  })
    if (final.ok){
      console.log(final)
    }
  }
  const handleSkin=async()=>{
    //const encryptedValue=CryptoJS.AES.encrypt("Skin",secretKey).toString();
    const final=await fetch('http://localhost:5000/api/option',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify("Skin")
  })
    if (final.ok){
      console.log(final)
    }

  }
  const handleHeart=async()=>{
    //const encryptedValue=CryptoJS.AES.encrypt("Heart",secretKey).toString();
    const final=await fetch('http://localhost:5000/api/option',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify("Heart")
  })
    if (final.ok){
      console.log(final)
    }
  }
  const handleCataract=async()=>{
    //const encryptedValue=CryptoJS.AES.encrypt("Cataract",secretKey).toString();
    const final=await fetch('http://localhost:5000/api/option',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify("Cataract")
  })
    if (final.ok){
      console.log(final)
    }
  }
  return (
    <div>
      <Navbar url='/loginSuccess' loginUser='true' title='Please Choose your concern' />

      <div className='w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]'>

        {/* first row */}
        <div className='flex justify-between mt-10'>

          <div className='flex flex-col justify-center items-center' onClick={handleGeneral}>
            <Link to='/bhcInfo'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={general} /></Link>
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1' >General Checkup</div>
          </div>

          <div className='flex flex-col justify-center items-center mx-36'onClick={handleDiabetes}>
  <Link to='/Diabetes1'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={diabetes} /></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1' >Diabetes Checkup</div>
</div>

          <div className='flex flex-col justify-center items-center mr-16' onClick={handleSkin}>
            <Link to='/skinRecord'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={ConsultDoctor} /></Link>
            <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1' >Skin Checkup</div>
          </div>

          
        </div>


        {/* second row */}
        <div className='flex justify-between mt-10'>



<div className='flex flex-col justify-center items-center mx-36' onClick={handleHeart}>
  <Link to='/healthProblem'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={heart} /></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1' >Heart Checkup</div>
</div>

<div className='flex flex-col justify-center items-center mr-16' onClick={handleCataract}>
  <Link to='/cataractImage'><img className='w-[207px] h-[224px] top-[280px] left-[222px] hover:drop-shadow-lg' src={cataract} /></Link>
  <div className='w-[256px] h-[33px] top-[539px] left-[207px] font-[600] text-[17px] leading-[33px] mt-1' >Cataract Checkup</div>
</div>


</div>

      </div>
    </div>
  )
}

export default Concern1