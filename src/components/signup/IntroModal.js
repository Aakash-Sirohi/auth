// import React, {useEffect, useState} from "react";
// import googleimage from '../../images/google.svg';

// import ReactDOM from 'react-dom';
// import './IntroModal.css'
// import OtpModal from "./otpmodal";
// import Register from "./SignUp";

// function isValidEmail(email) {
//   // Email pattern regex
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
//   // Test email against regex pattern
//   return emailPattern.test(email);
// }

// export default function Modal({show,onClose,showOtpModal,title}) {
//   const [email,setEmail] = useState('');

 
  
//         if (show) {
//           return null;
//         }
//         console.log(show);
//         const handleEmailChange =(e)=>{
//           setEmail(e.target.value);
//           setIsValid(isValidEmail(email));
//         }
               
//         const fdata = {
//             email: email,          
//           }

//         function handleClick(){

         
//             fetch('http://localhost:4000/login',{
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//                 // 'X-CSRF-Token': csrfToken
//               },
//               body: JSON.stringify({fdata})
//             }).then(response => response.json())
        
//             .catch(error => {console.error(error);})
//             if(props.showOtpModal==false){
//               showOtpModal(true);
//               {<OtpModal/>}
//             }
//           }
//         return (
//           <div className="modal"  onClick={props.onClose}>
//             <div className="modal-content" onClick={e => e.stopPropagation()}>
//               {/* {Modal Header} */}
//               <div className="modal-header" >
//                 <div>
//                 <label className="gs-text">{props.title}</label>


//                 {/* {Modal close button} */}
//                 <button className="modal-close-button" onClick={props.onClose}>
//                   &times;
//                 </button>
//                 </div>
//               </div>

//               {/* {Modal BODY} */}
//               <div className="modal-body">
//               <form>
//         {/* <input type="hidden" name="_csrf" value={csrfToken} /> */}
//         {/* <label>Username: </label> */}
        


//         <input type = "text"
//           class = "mob-ph"
//           placeholder='Enter mobile or email ID'
//           value ={email}
//           onChange ={handleEmailChange}

//         />



//         <br></br>
//         {/* <label>Password: </label>
//         <input type = "password"
//           placeholder='Enter your Password'
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <br></br> */}
//        {/* <button type="sumbit">Login</button> */}

//         <div className="otp-space " onClick={props.onClose}>
//             <button className = "get-otp-button" onClick={handleClick}  type="button" >
//               <span class ="get-otp-text">Get OTP</span>
//             </button>
//         </div>
      
//         </form>

//         <div className="clabel">
//         <hr className="line1"></hr>
//           <span className="cspan">or continue with </span>
//           <hr className="line2"></hr>
//           </div>



          
//         <div>
//           <div></div>
//             <button class = "google-button" onClick={handleGoogleLogin} type="button" >
//               <div>
//               <img className="google-image" src={googleimage} alt="SVG Image"/>
//               <label className="google-label">Google</label>
//               </div>
//               </button>
//             <button class = "fb-button"onClick={handleFacebookLogin} type="button" >Facebook</button>
//         </div>
        
//         <div>
            
//         </div>
//         {/* Now Signing up along with logging in */}
//         {/* <a href="/register">Sign Up</a> */}
//         <br></br>
         
//               </div>
//             </div>
//           </div>
//         );
//       }
