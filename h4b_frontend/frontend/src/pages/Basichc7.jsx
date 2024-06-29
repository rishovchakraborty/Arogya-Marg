import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CryptoJS from 'crypto-js';
import BPImg from "../assets/BPImg.svg";
//import cryptoRandomString from 'crypto-random-string';
const Basichc7 = () => {
  //const secretKey=cryptoRandomString({length:64,type:'hex'});
  const [bp,setBp]=useState("")
  const handleBp= event => {
    setBp(event.target.value);
};
const submitBp=async()=>{
  //const encryptedValue=CryptoJS.AES.encrypt(bp,secretKey).toString();
  const final=await fetch('https://sehat-backend.onrender.com/api/bp',{
    method:"POST",
    headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify(bp)
})
  if (final.ok){
    console.log(final)
  }
}
  return (
    <div>
      <Navbar url="/bhcSPO2" loginUser="true" title="General Checkup" />

      <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
        <div className="mt-24">
          <img src={BPImg} />
        </div>

        <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
          <div className="">
            <span className="mr-2 font-[600] text-[18px]">
              Enter Blood Pressure
            </span>
            <span className="text-gray-400 text-[14px]">(in mmHg)</span>
          </div>

          <div className="flex justc  items-center">
            <input
            onChange={handleBp}
              type="text"
              className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
              placeholder="100/60"
            />
          </div>
        </div>

        {/* button */}
        <Link to="/bodyProblem">
          <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg " onClick={submitBp}>
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Basichc7;
