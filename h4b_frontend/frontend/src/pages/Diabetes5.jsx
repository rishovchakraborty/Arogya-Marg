import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Diabetes from "../assets/Diabetes5.svg";

const Diabetes5 = () => {
  const [bmi,setBmi]=useState("")
  const handleBmi=(event)=>{
    setBmi(event.target.value)
  }
  const sendBmi=async()=>{
    const final=await fetch('https://sehat-backend.onrender.com/api/bmi',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(bmi)
  })
    if (final.ok){
      console.log(final)
    }
  }
  return (
    <div>
    <Navbar url="/Diabetes4" loginUser="true" title="Diabetes Checkup" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
      <div className="mt-24">
        <img src={Diabetes} />
      </div>

      <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Enter BMI
          </span>
        </div>

        <div className="flex justc  items-center">
          <input
          onChange={handleBmi}
            type="text"
            className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
          />
        </div>
      </div>

      {/* button */}
      <Link to="/Diabetes6">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg "onClick={sendBmi}>
          Proceed
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Diabetes5