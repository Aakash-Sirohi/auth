import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate("/register");
    // }
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleUserNameChange =(e)=>{
      setUserName(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }

    const data = {
      username: username,
      password: password
    }
    
    function handleClick(){
      fetch('http://localhost:4000/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
      }).then(response =>{
        response.json();
      }).catch(error => {console.error(error);})
    }
    return(
        <>
        <form>
        <label>Username: </label>
        <input type = "text"
          placeholder='Enter your Username'
          value ={username}
          onChange ={handleUserNameChange}
          
        />
        <br></br>
        <label>Password: </label>
        <input type = "password"
          placeholder='Enter your Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <br></br>
       {/* <button type="sumbit">Login</button> */}
       
        </form>
        <label>Not registered with us ? </label>
        <a href="/register">Sign Up</a>
        <br></br>
         <div>
            <button onClick={handleClick} type="button" >Login</button>
        </div>
       
        </>
    );
}