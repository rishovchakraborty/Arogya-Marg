import React ,{useState}from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Diabetes from "../assets/Diabetes2.svg";
const Diabetes2 = () => {
  const [glucose,setGlucose]=useState("")
  const handleGluc=(event)=>{
    setGlucose(event.target.value)
  }
  const sendGluc=async()=>{
    const final=await fetch('https://sehat-backend.onrender.com/api/gluc',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(glucose)
  })
    if (final.ok){
      console.log(final)
    }
  }
  return (
    <div>
    <Navbar url="/Diabetes1" loginUser="true" title="Diabetes Checkup" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
      <div className="mt-24">
        <img src={Diabetes} />
      </div>

      <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Enter Glucose level
          </span>
        </div>

        <div className="flex justc  items-center">
          <input
          onChange={handleGluc}
            type="text"
            className="flex justify-center text-center px-8 py-1 rounded-lg bg-bginput my-4"
          />
        </div>
      </div>

      {/* button */}
      <Link to="/Diabetes3">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg "onClick={sendGluc}>
          Proceed
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Diabetes2