import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Forgot_password() {
  const[nextlink,setNextlink]=useState('')
  const [Otp, setotp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setotp([...Otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const getOTP=async()=>{
    const final=await fetch('https://sehat-backend.onrender.com/api/otp',{
      method:"POST",
      headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(Otp)
  })
    if (final.ok){
      console.log("it worked")
      setNextlink('/fingerPrint')
    }
  }
  //   for timer
  const [counter, setCounter] = React.useState(179);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div className="forgot_body">
        <div className="forgot_head ">OTP Verification</div>
        <div className="forgot_cont">
          Enter the code sent to your registered Phone number
        </div>
        <div className="boxes_otp ">
          {Otp.map((data, index) => {
            return (
    
                <input
                  // className='fle'
                  type="text"
                  maxLength="1"
                  className="input_otp"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  required />
          
            );
          })}
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link to='/fingerprint'
            //  to={nextlink} onClick={getOTP}
             >
              <div className="forgot_btn bg-bluebtn rounded-lg w-[200px] py-2 my-4 text-white font-[100] ">Verify OTP</div>
            </Link>
          </div>
          <div className="timer">
            <div className="written">Resend OTP in 00 : {counter}</div>
            <a href="/" className="forgot_resend">
              Resend OTP ?
            </a>
          </div>{" "}
        </div>
    </div>
  );
}
export default Forgot_password;