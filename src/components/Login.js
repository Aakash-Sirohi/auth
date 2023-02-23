import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Modal from './signup/IntroModal'
export default function Login(){
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate("/register");
    // }
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    // const [csrfToken, setCsrfToken] = useState('');
    const handleUserNameChange =(e)=>{
      setUserName(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }

   

    // useEffect(() => {
    //   fetch('http://localhost:4000/csrf')
    //   .then(res => res.json())
    //   .then(data => setCsrfToken(data.csrfToken))
    //   .catch(err => console.error(err))
    // },[]);

   

    const fdata = {
      username: username,
      password: password,
      
    }
    
    return(
        <>
        <Modal/>
        </>
    );
}