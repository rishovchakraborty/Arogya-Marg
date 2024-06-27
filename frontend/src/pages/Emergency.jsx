import React from "react";
import Navbar from "../components/Navbar";
import MapComponent from "../components/Maps";

const Emergency = () => {
  return (
    <div>
      <Navbar url="/selectCase" loginUser="false" title="Hospitals near you" />

      <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
        <MapComponent />
      </div>
    </div>
  );
};

export default Emergency;
