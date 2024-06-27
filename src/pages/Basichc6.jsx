import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import CryptoJS from 'crypto-js';
import Navbar from "../components/Navbar";
import SPO2Img from "../assets/SPO2Img.svg";
//import cryptoRandomString from 'crypto-random-string';
const Basichc6 = () => {
  //const secretKey=cryptoRandomString({length:64,type:'hex'});
  const [sp,setSp]=useState("")
  const handleSp= event => {
    setSp(event.target.value);
};
const submitSp=async()=>{
  //const encryptedValue=CryptoJS.AES.encrypt(sp,secretKey).toString();
  const final=await fetch('https://sehat-backend.onrender.com/api/sp',{
    method:"POST",
    headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify(sp)
})
  if (final.ok){
    console.log(final)
  }
}
  return (
    <div>
      <Navbar
        url="/bhcHeartbeat"
        loginUser="true"
        title="General Checkup"
      />

      <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
        <div className="mt-24">
          <img src={SPO2Img} />
        </div>

        <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
          <div className="">
            <span className="mr-2 font-[600] text-[18px]">Enter Sp02</span>
          </div>

          <div className="flex justc  items-center">
            <input
            onChange={handleSp}
              type="text"
              className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
              placeholder="99"
            />
          </div>
        </div>

        {/* button */}
        <Link to="/bhcBP">
          <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg " onClick={submitSp}>
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Basichc6;
