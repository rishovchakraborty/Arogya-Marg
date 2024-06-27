import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';

function RecordVoiceBody3() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorder = useRef(null);
  const audioStream = useRef(null);

  const startRecording = async () => {
    try {
      audioStream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(audioStream.current);
      mediaRecorder.current.ondataavailable = handleDataAvailable;
      mediaRecorder.current.onstop = handleRecordingStop;
      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing the microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioChunks((prevChunks) => [...prevChunks, event.data]);
    }
  };

  const handleRecordingStop = () => {
    setIsRecording(false);
    if (audioStream.current) {
      audioStream.current.getTracks().forEach((track) => track.stop());
    }
  };
  const AudioSending=async()=>{
    const audioURL=new Blob(audioChunks,{type:"audio/wav"})
      var data=new FormData()
      data.append('audio',audioURL)
      const sending_audio=await fetch('https://sehat-backend.onrender.com/api/receiveBody/3', {
      method: 'POST',
      body: data
    })
  };
  return (
    <div className="audio-recorder">
      {isRecording ? (
        <>
          <div>
            <div className='flex mt-[5px] items-center justify-center'><img src="https://gifdb.com/images/high/sound-bar-sound-wave-xi3hsaiw59ojqnak.gif" width={50} height={50} alt="" /><img src="https://gifdb.com/images/high/sound-bar-sound-wave-xi3hsaiw59ojqnak.gif" width={50} height={50} alt="" /><img src="https://gifdb.com/images/high/sound-bar-sound-wave-xi3hsaiw59ojqnak.gif" width={50} height={50} alt="" /></div>
            <p className='mt-4'>Recording...</p>
            <Button className='bg-[#DEF0FF] px-8 py-2 rounded-lg mt-20' variant="danger" onClick={stopRecording}>
              Stop Recording
            </Button>
          </div>
        </>
      ) : (
        <Button className='bg-[#DEF0FF] px-8 py-2 rounded-lg mt-20' variant="success" onClick={startRecording}>
          Start Recording
        </Button>
      )}
      {audioChunks.length > 0 && AudioSending()&& (
        <audio className='mt-8' controls>
          <source src={URL.createObjectURL(new Blob(audioChunks, { type: 'audio/wav' }))} />
        </audio>
      )}
    </div>
  );
}

export default RecordVoiceBody3;
