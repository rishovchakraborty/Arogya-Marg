import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecordVoiceBody1 from '../components/RecordVoiceBody1';
import Ques1 from './QuestionsBody/Ques1';

const Bh3 = () => {
  return (
    <div>
    <Navbar url="/body" loginUser="true" title="Body Health" />

    <div className="w-[100vw]  flex flex-col  bg-bgall h-[calc(100vh-100px)]">
     

      {/* <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Please record your concern
          </span>
        </div>

          <Ques1/>
          <RecordVoiceBody1/> 
      </div> */}

      {/* button */}
      {/* <Link to="/bodyConnect">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg ">
          Proceed
        </button>
      </Link> */}

<Ques1/>

    </div>
  </div>
  )
}

export default Bh3