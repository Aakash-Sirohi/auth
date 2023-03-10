import React, {useEffect, useState} from "react";
import { Route, useNavigate } from "react-router-dom";

export default function Login(){

    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate("/register");
    // }

    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [csrfToken, setCsrfToken] = useState('');
    const [data,setData] =useState(null);
    <Route path="/login" element = {<Login/>}/>;
    const handleUserNameChange =(e)=>{
      setUserName(e.target.value);
    }

    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }


    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch ('http://localhost:4000/csrf');
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      };
      fetchData();
      
    },[]);

    useEffect(() =>{
      if(csrfToken){
        document.cookie = `csrfToken=${csrfToken}; path=/`;
      }
    }, [csrfToken]);
    console.log(data);

    const fdata = {
      username: username,
      password: password,
      
    }
    
    
    function handleClick(){
    
      fetch('http://localhost:4000/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          //  'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify({fdata})
      }).then(response => response.json())
      .then(console.log(csrfToken))
      .catch(error => {console.error(error);})
    }
    return(
        <>
        <form>
        <input type="hidden" name="_csrf" value={csrfToken} />
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
