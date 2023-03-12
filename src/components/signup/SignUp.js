import React, {useState} from "react";
import IntroModal from "./IntroModal";
import googleimage from '../../images/google.svg';
import fbimage from '../../images/fb.svg';
import OtpModal from "./otpmodal";



export default function Register(){
  
  const [emailorPhone,setEmailOrPhone] = useState('');
  const [showSignUpModal,setShowSignUpModal] = useState(false);
  const [showOtpModal, setShowOtpModal] =useState(false);
  const [title,setTitle] = useState('Get Started');
  const [message,setMessage] =useState('');
  let fdata = {

  }
  const handleEmailorPhoneChange =(e)=>{
    setEmailOrPhone(e.target.value);
    
  }
  function validateEmailOrPhoneNumber(emailorPhone) {
    // Email pattern regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    // Test email against regex pattern
    if (emailRegex.test(emailorPhone)) {
      return 'email';
    } else if (phoneRegex.test(emailorPhone)) {
      return 'phone';
    } else {
      return 'invalid';
    }
  }

  function handleGetOTP(){
    if(validateEmailOrPhoneNumber(emailorPhone)=='email'){
      console.log(validateEmailOrPhoneNumber(emailorPhone));
      fdata = {
        username: emailorPhone,          
      }

      fetch('http://localhost:4000/api/getotp',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fdata})
    }).then(response => response.json())
    .catch(error => {console.error(error);})
    setShowOtpModal(true);
    setEmailOrPhone(emailorPhone);
    setMessage('');
    }
    
    else if(validateEmailOrPhoneNumber(emailorPhone)=='phone'){
      console.log(validateEmailOrPhoneNumber(emailorPhone));
      fdata = {
        username: emailorPhone,          
      }
      fetch('http://localhost:4000/api/getotp',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fdata})
    }).then(response => response.json())
    .catch(error => {console.error(error);})
    setShowOtpModal(true);
    setEmailOrPhone(emailorPhone);
    } else {
      console.log(validateEmailOrPhoneNumber(emailorPhone));
      setMessage('Invalid Email or Mobile.');
    }
    
  }

  function handleOpenOtpModal(){
    setShowOtpModal(true);
  }

  function handleCloseOtpModal(){
    setShowOtpModal(false);
  }

  function handleCloseModal(){
    setShowSignUpModal(false)
  }


  return (
    <div className="sign-up">
      {showOtpModal  ?(<OtpModal onClose={handleCloseOtpModal} title= "Verify Otp" emailorPhone ={emailorPhone} showSignUpModal ={showSignUpModal}></OtpModal>):
      
      (<div className="modal"  >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              {/* {Modal Header} */}
              <div className="modal-header" >
                <div>
                <label className="gs-text">{title}</label>


                {/* {Modal close button} */}
                <button className="modal-close-button" onClick={handleCloseModal}>
                  &times;
                </button>
                </div>
              </div>

              {/* {Modal BODY} */}
              <div className="modal-body">
              <form>
        {/* <input type="hidden" name="_csrf" value={csrfToken} /> */}
        {/* <label>Username: </label> */}
        


        <input type = "text"
          className = "mob-ph"
          placeholder='Enter mobile or email ID'
          value ={emailorPhone}
          onChange ={handleEmailorPhoneChange}

        />

        <label className="message">{message}</label>



        <br></br>
        {/* <label>Password: </label>
        <input type = "password"
          placeholder='Enter your Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <br></br> */}
       {/* <button type="sumbit">Login</button> */}

        
            <button className = "get-otp-button" onClick={handleGetOTP}  type="button" >
              <span className ="get-otp-text">Get OTP</span>
            </button>
       
      
        </form>

        <div className="clabel">
        {/* <hr className="line1"></hr> */}
          <label className="cspan">------    or continue with  ------ </label>
          {/* <hr className="line2"></hr> */}
          </div>



          
        <div>
          
            <button className = "google-button"  type="button" >
              <div>
              <img className="google-image" src={googleimage} alt="SVG Image"/>
              <label className="google-label">Google</label>
              </div>
              </button>
            <button className = "fb-button"type="button" >   
             <div>
            <img className="fb-image" src={fbimage} alt="SVG Image"/>
            <label className="fb-label">Facebook</label>

            </div></button>
        
        </div>
        
        <div>
            
        </div>
        {/* Now Signing up along with logging in */}
        {/* <a href="/register">Sign Up</a> */}
        <br></br>
         
              </div>
            </div>
          </div>)


      }

      
      
      
      {/* <OtpModal show={isValid}></OtpModal> */}
    </div>
  );
    }














