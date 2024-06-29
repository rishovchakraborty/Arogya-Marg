import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bhc1 from "../assets/bhc1.svg";
import bhc11 from "../assets/bhc11.svg";
import bhc12 from "../assets/bhc12.svg";
import bhc13 from "../assets/bhc13.svg";

const Basichc1 = () => {
  return (
    <div>
      <Navbar url="/concern1" loginUser="true" title="General Checkup" />

      <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
        {/* big pic */}
        <div className="mt-24">
          <img src={bhc1} />
        </div>

        {/* small pics */}
        <div className=" w-4/5 flex justify-around mt-[-230px]">
          <div>
            <img src={bhc11} />
          </div>
          <div className="mx-[-160px]">
            <img src={bhc12} />
          </div>
          <div>
            <img src={bhc13} />
          </div>
        </div>

        {/* button */}
        <Link to="/bhcHeight">
          <button className="mt-[240px] bg-bluebtn py-3 px-12 text-white rounded-lg ">
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Basichc1;
