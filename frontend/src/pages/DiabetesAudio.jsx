import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecordVoice from '../components/RecordVoice';
import Ques1 from './DiabetesBody/Ques1';
const DiabetesAudio = () => {
  return (
    <div>
    <Navbar url="/Diabetes7" loginUser="true" title="Diabetes Checkup" />

    <div className="w-[100vw]  flex flex-col  bg-bgall h-[calc(100vh-100px)]">
    

      {/* <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Please record your concern
          </span>
        </div>

        <RecordVoice/>
      </div> */}

      {/* button */}
      {/* <Link to="/diabetesDoctor">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg ">
          Proceed
        </button>
      </Link> */}

      <Ques1/>
    </div>
  </div>
  )
}

export default DiabetesAudio