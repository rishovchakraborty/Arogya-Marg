import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import CryptoJS from 'crypto-js';
import Navbar from "../components/Navbar";
import tempImg from "../assets/BodyTempImg.svg";
// import cryptoRandomString from 'crypto-random-string';
const Basichc4 = () => {
  //const secretKey=cryptoRandomString({length:64,type:'hex'});
  const [temp,setTemp]=useState("")
  const handleTemp= event => {
    setTemp(event.target.value);
};
const submitTemp=async()=>{
  //const encryptedValue=CryptoJS.AES.encrypt(temp,secretKey).toString();
  const final=await fetch('https://sehat-backend.onrender.com/api/temp',{
    method:"POST",
    headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify(temp)
})
  if (final.ok){
    console.log(final)
  }
}
  return (
    <div>
      <Navbar url="/bhcWeight" loginUser="true" title="General Checkup" />

      <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
        <div className="mt-24">
          <img src={tempImg} />
        </div>

        <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
          <div className="">
            <span className="mr-2 font-[600] text-[18px]">
              Enter Body temperature
            </span>
            <span className="text-gray-400 text-[14px]">(in &deg;F)</span>
          </div>

          <div className="flex justc  items-center">
            <input
            onChange={handleTemp}
              type="text"
              className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
              placeholder="97"
            />
          </div>
        </div>

        {/* button */}
        <Link to="/bhcHeartbeat">
          <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg " onClick={submitTemp}>
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Basichc4;
