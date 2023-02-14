import React, {useState} from "react";

export default function Register(){
  const [firstname,setFirstName]  =useState('');
  const [lastname,setLastName]  =useState('');
  const handleFirstNameChange =(e) =>{
      setFirstName(e.target.value);
    }
    const handleLastNameChange =(e)=>{
      setLastName(e.target.value);
    }

     const handleSubmit =(e) =>{
      alert('A form was submitted by '+firstname +' ' + lastname + 'ji!');
      const data ={
        firstname: firstname,
        lastname: lastname
      }
      fetch('http://localhost:4000/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
      }).then(response => response.json())
      .then(data =>{
        console.log(data);
      })
      .catch(error=>{
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
        />
        <br></br>
        <label>Password: </label>
        <input type = "password"
        id ="password"
          placeholder='Enter your Password'
        />
        <br></br>
        <label> Confirm Password: </label>
        <input type = "password"
          placeholder='Confirm your Password'
        />

        <br></br> 
        <input type="submit" value="SIGNUP" />
        
       


      </form>
        </>

    );
}














