// import React, { useState,useEffect } from 'react'
// import mappic from '../assets/mapNear.svg';
// import {IoLocationOutline,IoCallOutline} from 'react-icons/io5';
// import {GoDotFill} from 'react-icons/go';
// import {AiOutlineLeft,AiOutlineRight,AiOutlineSearch} from 'react-icons/ai';
// import Loading from './Loading';
// const Maps = () => {

// const[loading,setLoading]=useState(true);

// useEffect(() => {
//   // Simulate loading delay (e.g., an API request) with setTimeout
//   setTimeout(() => {
//     setLoading(false); // Set loading to false when your content is ready
//   }, 2000); // Adjust the delay time as needed
// }, []);


//   return (
//     <div>
//       {loading?<Loading/>:<div>

// <input className='fixed top-[130px] left-[50px] text-[12px] bg-white flex justify-center text-center border-gray-700 border-2 items-center rounded-lg cursor-pointer w-[180px] h-[30px]' type='text' placeholder='Enter location manually'/>
 
//   <img src={mappic} className='w-[100vw] h-[67vh] object-cover mt-[-20px]'/>

//   <div className='flex justify-center items-center m-auto h-[calc(33vh-80px)] font-light text-[14px]'>

//     <div><AiOutlineLeft/></div>

//       {/* fortis */}
//     <div className='bg-white w-1/4 flex flex-col justify-center items-start mx-5 p-1 px-10 rounded-lg'>
//       <div className='font-semibold my-2'>
//         Fortis Hospital
//       </div>
//       <div className='flex '>
//         <span><IoLocationOutline/></span><span className='ml-2'>B-22 Sector 62, Noida, Uttar Pradesh 201301</span>
//         </div>
//       <div className='flex flex-row justify-center items-center'>
//         <span><IoCallOutline/></span><span className='ml-2'>0120 430 0222</span>
//         </div>
//       <div className='flex text-bgcolor flex-row justify-center items-center'>
//         <span><GoDotFill/></span><span className='ml-1'>Live bed status</span>
//         </div>
//       <div className='mx-4'>191 beds available</div>
//     </div>


//     {/* apollo */}
//     <div className='bg-white w-1/4 flex flex-col justify-center items-start mx-5 p-1 px-10 rounded-lg'>
//       <div className='font-semibold my-2'>
//         Apollo Hospitals Noida
//       </div>
//       <div className='flex '>
//         <span><IoLocationOutline/></span><span className=''> Kamal Marg, Block B, S-52, Noida, Uttar Pradesh 201307</span>
//         </div>
//       <div className='flex flex-row justify-center items-center'>
//         <span><IoCallOutline/></span><span className='ml-2'>0120 249 8801</span>
//         </div>
//       <div className='flex text-bgcolor flex-row justify-center items-center'>
//         <span><GoDotFill/></span><span className='ml-1'>Live bed status</span>
//         </div>
//       <div className='mx-4'>126 beds available</div>
//     </div>

//     {/* max */}
//     <div className='bg-white w-1/4 flex flex-col justify-center items-start mx-5 p-1 px-10 rounded-lg'>
//       <div className='font-semibold my-2'>
//         Max Multi Speciality Centre
//       </div>
//       <div className='flex '>
//         <span><IoLocationOutline/></span><span className=''>A364, A Block, Pocket A, Sector 19, Noida, 201301 </span>
//         </div>
//       <div className='flex flex-row justify-center items-center'>
//         <span><IoCallOutline/></span><span className='ml-2'>0120 662 9999</span>
//         </div>
//       <div className='flex text-bgcolor flex-row justify-center items-center'>
//         <span><GoDotFill/></span><span className='ml-1'>Live bed status</span>
//         </div>
//       <div className='mx-4'>69 beds available</div>
//     </div>

//   <div><AiOutlineRight/></div>

//   </div>
// </div>}
//     </div>
//   )
// }

// export default Maps

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import { GoDotFill } from 'react-icons/go';
import Loading from './Loading';
import axios from 'axios';

const Maps = () => {
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState([22.9834, 88.4872]); // Kalyani, West Bengal coordinates
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Fetch hospitals and clinics near the default location (Kalyani)
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('/api/hospitals', {
          params: { lat: position[0], lon: position[1] }
        });
        setHospitals(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hospital data:', error);
        setLoading(false);
      }
    };

    fetchHospitals();
  }, [position]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <input
            className="fixed top-[130px] left-[50px] text-[12px] bg-white flex justify-center text-center border-gray-700 border-2 items-center rounded-lg cursor-pointer w-[180px] h-[30px] shadow-md"
            type="text"
            placeholder="Enter location manually"
          />

          <MapContainer center={position} zoom={13} className="w-[100vw] h-[67vh] mt-[-20px]">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Your location</Popup>
            </Marker>
            {hospitals.map((hospital, index) => (
              <Marker key={index} position={[hospital.latitude, hospital.longitude]}>
                <Popup>
                  <div>
                    <div className="font-semibold my-2">{hospital.name}</div>
                    <div className="flex">
                      <span>
                        <IoLocationOutline />
                      </span>
                      <span className="ml-2">{hospital.address}</span>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                      <span>
                        <IoCallOutline />
                      </span>
                      <span className="ml-2">{hospital.phone}</span>
                    </div>
                    <div className="flex text-bgcolor flex-row justify-center items-center">
                      <span>
                        <GoDotFill />
                      </span>
                      <span className="ml-1">Live bed status</span>
                    </div>
                    <div className="mx-4">{hospital.beds} beds available</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <div className="p-4 bg-white">
            <h2 className="text-center text-lg font-semibold mb-4">Hospitals and Clinics Near You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
              <div className="hospital-card bg-white flex flex-col justify-center items-start p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="font-semibold text-lg mb-2">
                  Apollo Hospitals Noida
                </div>
                <div className="flex items-center mb-2">
                  <IoLocationOutline />
                  <span className="ml-2">Kamal Marg, Block B, S-52,kalyani, kol 201307</span>
                </div>
                <div className="flex items-center mb-2">
                  <IoCallOutline />
                  <span className="ml-2">0120 249 8801</span>
                </div>
                <div className="flex items-center text-bgcolor mb-2">
                  <GoDotFill />
                  <span className="ml-1">Live bed status</span>
                </div>
                <div>126 beds available</div>
              </div>

              <div className="hospital-card bg-white flex flex-col justify-center items-start p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="font-semibold text-lg mb-2">
                  Fortis Hospital
                </div>
                <div className="flex items-center mb-2">
                  <IoLocationOutline />
                  <span className="ml-2">Sector B, Pocket 1, kalyani, kol 201301</span>
                </div>
                <div className="flex items-center mb-2">
                  <IoCallOutline />
                  <span className="ml-2">0120 430 0222</span>
                </div>
                <div className="flex items-center text-bgcolor mb-2">
                  <GoDotFill />
                  <span className="ml-1">Live bed status</span>
                </div>
                <div>150 beds available</div>
              </div>

              <div className="hospital-card bg-white flex flex-col justify-center items-start p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="font-semibold text-lg mb-2">
                  Max Super Speciality Hospital
                </div>
                <div className="flex items-center mb-2">
                  <IoLocationOutline />
                  <span className="ml-2">A-364, Sector 30, kalyani, kol 201303</span>
                </div>
                <div className="flex items-center mb-2">
                  <IoCallOutline />
                  <span className="ml-2">0120 662 9999</span>
                </div>
                <div className="flex items-center text-bgcolor mb-2">
                  <GoDotFill />
                  <span className="ml-1">Live bed status</span>
                </div>
                <div>200 beds available</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Maps;
