import React, {useEffect, useState,useRef } from "react";
import Experience from "./Experience";
import Modal from "./IntroModal";
import { useNavigate } from "react-router-dom";
export default function OtpModal({onClose,title,emailorPhone,showSignUpModal}){
   
    const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
    const [isValid, setIsValid] = useState(false);
    const [status,setStatus] = useState('');
    const [showexpModal,setShowExpModal] =useState(false);
    const inputRefs = useRef([]);
    const [message,setMessage] =useState('');
    let is_registered;
    const navigate = useNavigate();
    
    // const [showOtpModal, setShowOtpModal] = useState(props.show);
    // if(is_registered===0){
    //     setShowExpModal(true)
    // }else setShowExpModal(false);
    const otp = otpValues.join('');
    const fdata ={
        username:emailorPhone,
        otp:otp
    }

    function handleExpModalClose(){
        setShowExpModal(false);
    }

    function handleMobileEdit(){
      console.log('edit button clicked');
      
    }

    const handleInputChange = (e, index) => {
      const { value } = e.target;
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }else if (!value && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    };
    useEffect(() => {
      const otpRegex = /^\d{6}$/;
      const isOtpValid = otpRegex.test(otpValues.join(''));
      setIsValid(isOtpValid);
    }, [otpValues]);

      function verifyOTP(){
        console.log(emailorPhone);
        fetch('http://localhost:4000/api/verifyotp',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({fdata})
        }).then(response =>  response.json())
        .then(data => {
            is_registered = data.is_registered;
            console.log(is_registered);
            console.log(data.message);
            if(data.message=='User Authenticated!' && is_registered==1){
              navigate('/login');
            }else if(data.message=='OTP Verified!' && is_registered==0) {
              
              navigate('/exp');
              
            }
            
            console.log(showexpModal);
        })
        .catch(error => {console.error(error);});

        
      }
      
    
    return(
        <>{showexpModal ? (<Experience phone={emailorPhone} onClose={handleExpModalClose} title ={'Help us personalize your experience'}/>):( <div className="modal"  >
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header" >
            <div><label className="vo-text">{title}</label>
            <button className="modal-close-button" onClick={onClose}>
              &times;
            </button>
            </div>
          </div>
          <div className="modal-body">
          <form>
    <div>
<div className="oslabel">
  <label className="otp-sent-label" htmlFor="otp">OTP sent to <strong> +91 {emailorPhone}</strong></label>
  <button className="edit-btn" onClick={console.log('button clked')}>Edit</button>
  </div>

  <div class="otp-input">
  {otpValues.map((value, index) => (
        <input
          className="otp-value"
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleInputChange(e, index)}
          ref={(ref) => inputRefs.current[index] = ref}

        />
      ))}
  </div>
</div>
<label className="message">{message}</label>

    <div className="votpbtn">
        <button className = {isValid ? 'enabled-verify':'disabled-verify'} disabled={!isValid}  type="button" onClick={verifyOTP} >
          <span className ="get-otp-text">Verify OTP</span>
        </button>
    </div>
  
    </form>

   
   
    {/* Now Signing up along with logging in */}
    {/* <a href="/register">Sign Up</a> */}
    <br></br>
     
          </div>
        </div>
      </div>
    )
       
     } </>
    )
}