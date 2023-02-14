import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate("/register");
    // }
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    return(
        <>
        <form>
        <label>Username: </label>
        <input type = "text"
          placeholder='Enter your Username'
          
        />
        <br></br>
        <label>Password: </label>
        <input type = "password"
          placeholder='Enter your Password'
        />
        <br></br>
       <button type="sumbit">Login</button>
       
        </form>
        <label>Not registered with us ? </label>
        <a href="/register">Sign Up</a>
        {/* <div>
            <button onClick={handleClick} type="button" >Register</button>
        </div>
       */}
        </>
    );
}