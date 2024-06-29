import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MaleBody from '../components/MaleBody';

const Bh1 = () => {
  return (
    <div>
    <Navbar url="/bodyProblem" loginUser="true" title="Body Health" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
      

      <div className="w-[1440px] mt-[5px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Please choose your area of concern
          </span>
        </div>

        <div>
          <MaleBody/>
        </div>
      </div>

      
      <Link to="/bodyRecord">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg fixed bottom-[50px] right-[50px] ">
          Next
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Bh1