import React ,{useContext}from 'react'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PicUser from '../components/PicUser';
import DragDropFiles from '../components/DragDropFilesSkin';
import QRCode from 'qrcode.react';
import noteContext from '../context/notes/noteContext'
const Sh1 = () => {
  const {adhar , handleChange_adhar}=useContext(noteContext);
  const for_now=12
  // Replace 'https://yourwebsite.com' with your actual website URL.
  const websiteUrl = `https://deluxe-marzipan-e0ed18.netlify.app?aadhar=${for_now}&area=skin`

  return (
    <div>
    <Navbar url="/concern1" loginUser="true" title="Skin Health" />

    <div className="w-[100vw]  flex flex-col items-center text-center font-bold bg-bgall h-[calc(100vh-100px)]">
    

      <div className="w-[1440px] mt-[20px] top-[160px] flex flex-col justify-center items-center">
        <div className="">
          <span className="mr-2 font-[600] text-[18px]">
          Please Stand straight and look into the camera 
          </span>
        </div>
      </div>

      {/* for image capturing */}
    {/* <PicUser/> */}

{/* for drag and drop */}
{/* <DragDropFiles/> */}


<div className='my-12 text-[18px]'>Select Files</div>

<div className='flex justify-between mt-[-100px]'>
  <div>
    <DragDropFiles/>
  </div>
  <div className='flex justify-center items-center mx-40'>
    OR
  </div>
  <div className='mt-[40px] flex justify-center flex-col items-center'>
  <h1 className='mb-4'>Generate QR Code for Your Website</h1>
      <QRCode value={websiteUrl} />
  </div>
</div>

      {/* button */}
      <Link to="/skinProblem">
        <button className="mt-[7px] fixed right-[60px] bottom-[40px] bg-bluebtn py-3 px-12 text-white rounded-lg">
          Proceed
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Sh1