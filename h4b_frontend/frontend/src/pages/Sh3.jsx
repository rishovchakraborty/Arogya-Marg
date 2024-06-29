import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecordVoiceSkin from '../components/RecordVoiceSkin';
import Quess1 from './SkinBody/Quess1';

const Sh3 = () => {
  return (
    <div>
    <Navbar url="/skinProblem" loginUser="true" title="Skin Health" />

    <div className="w-[100vw]  flex flex-col  bg-bgall h-[calc(100vh-100px)]">
    

      {/* <div className="w-[1440px] mt-[60px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
            Please record your concern
          </span>
        </div>

        <RecordVoiceSkin/>
      </div> */}

      {/* button */}
      {/* <Link to="/skinDoctor">
        <button className="mt-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg ">
          Proceed
        </button>
      </Link> */}

      <Quess1/>
    </div>
  </div>
  )
}

export default Sh3