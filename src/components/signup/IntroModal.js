import React, {useEffect, useState} from "react";
import googleimage from '../../images/google.svg';

import ReactDOM from 'react-dom';
import './IntroModal.css'



export default function Modal(props) {
  const [csrfToken, setCsrfToken] = useState('');
  const [username,setUserName] = useState('');
        if (!props.show) {
          return null;
        }
        
        const handleUserNameChange =(e)=>{
          setUserName(e.target.value);
        }
        function handleGoogleLogin(){
        }
      
          function handleFacebookLogin(){
            
          }
          
          const fdata = {
            username: username,          
          }

          function handleClick(){
           
            fetch('http://localhost:4000/login',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
                // 'X-CSRF-Token': csrfToken
              },
              body: JSON.stringify({fdata})
            }).then(response => response.json())
            .then(console.log(csrfToken))
            .catch(error => {console.error(error);})
          }
        return (
          <div className="modal"  onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              {/* {Modal Header} */}
              <div className="modal-header" >
                <div>
                <label className="gs-text">{props.title}</label>


                {/* {Modal close button} */}
                <button className="modal-close-button" onClick={props.onClose}>
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
          class = "mob-ph"
          placeholder='Enter mobile or email ID'
          value ={username}
          onChange ={handleUserNameChange}
        />



        <br></br>
        {/* <label>Password: </label>
        <input type = "password"
          placeholder='Enter your Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <br></br> */}
       {/* <button type="sumbit">Login</button> */}
        <div>
            <button class = "get-otp-button" onClick={handleClick} type="button" ><span class ="get-otp-text">Get OTP</span></button>
        </div>
        </form>

        <div className="clabel">
        <hr className="line"></hr>
          <span>or continue with </span>
          <hr className="line"></hr>
          </div>



          
        <div>
          <div></div>
            <button class = "google-button" onClick={handleGoogleLogin} type="button" >
              <div>
              <img className="google-image" src={googleimage} alt="SVG Image"/>
              <label className="google-label">Google</label>
              </div>
              </button>
            <button class = "fb-button"onClick={handleFacebookLogin} type="button" >Facebook</button>
        </div>
        
        <div>
            
        </div>
        {/* Now Signing up along with logging in */}
        {/* <a href="/register">Sign Up</a> */}
        <br></br>
         
              </div>
            </div>
          </div>
        );
      }
