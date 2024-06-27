import React, { useState, useRef } from 'react'

const PicUser = () => {

    const [isStreaming, setIsStreaming] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [photo, setPhoto] = useState(null);
  
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    };
  
    const capturePhoto = (event) => {
      if (isStreaming) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setPhoto(canvas.toDataURL('image/png'));
      }
    };
    
    
  return (
    <div className="App">
    <button className='' onClick={startCamera()}></button>
    <button className='bg-[#DEF0FF] py-2 px-8 rounded-md my-2' onClick={capturePhoto} disabled={!isStreaming}>
      Capture Photo
    </button>
    <div className='flex m-auto'>
    <video
    className='rounded-lg'
      ref={videoRef}
      autoPlay
      muted
      style={{ display: isStreaming ? 'block' : 'none' }}
    />
    <canvas  ref={canvasRef} style={{ display: 'none' }} />
    {photo &&<img className='ml-10 rounded-lg' src={photo} alt="Captured Photo" />}
    </div>
  </div>
  )
}

export default PicUser