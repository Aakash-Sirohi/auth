import React, {useState} from "react";

export default function Register(){
  const [firstname,setFirstName]  =useState('');
  const [lastname,setLastName]  =useState('');
  const [username,setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

        const handleFirstNameChange =(e) =>{
          setFirstName(e.target.value);
        }
        const handleLastNameChange =(e)=>{
          setLastName(e.target.value);
        }
        const handleUserNameChange =(e)=>{
          setUserName(e.target.value);
        }
        const handlePasswordChange =(e)=>{
          setPassword(e.target.value);
        }
        const handleEmailChange =(e) =>{
          setEmail(e.target.value);
        }

      const handleSubmit =(e) =>{    
      const data ={
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password

      }
      fetch('http://localhost:4000/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
      }).then(response =>{
        response.json();
        const messageElement = document.createElement('p');
        messageElement.textContent = 'User Sucessfully Created';
        document.body.appendChild(messageElement);
        setTimeout(()=>{
          document.body.removeChild(messageElement);
        },5000);  
        }).catch(error=>{
        console.error(error);
      })
      

      e.preventDefault();
    }
    return(
        <>
      <form onSubmit={handleSubmit}
      >
        <label>FirstName: </label>
        <input type = "text"
          id="firstname"
          placeholder='Enter your Firstname'
          value={firstname}
          onChange={handleFirstNameChange}
        />
        <br></br>
        <label>LastName: </label>
        <input type = "text"
        id="lastname"
          placeholder='Enter your Lastname'
          value={lastname}
          onChange={handleLastNameChange}

        />
        <br></br>
        <label>Choose Username: </label>
        <input type = "text"
          id ="username"
          placeholder='Choose Username'
          value={username}
          onChange={handleUserNameChange}
        />
        <br></br>
        <label>Email: </label>
        <input type = "text"
          id ="email"
          placeholder='Choose Email'
          value={email}
          onChange={handleEmailChange}
        />
        <br></br>
        <label>Password: </label>
        <input type = "password"
         id ="password"
          placeholder='Enter your Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <br></br>
        <label> Confirm Password: </label>
        <input type = "password"
          placeholder='Confirm your Password'
        />

        <br></br> 
        <input type="submit" value="SIGNUP" />
        <br></br>

        <label>Already a user ? </label>
        <a href="/login">Log In</a>
        
        
        
       


      </form>
        </>

    );
}














