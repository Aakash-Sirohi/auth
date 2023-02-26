import React, {useEffect, useState} from "react";

export default function Experience({onClose,title}){
    const [name, setName] = useState('');
    const [grades, setGrades] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/grades',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      }).then(response=>response.json())
      .then(data => setGrades(data))
      .catch(error => {console.error(error);})
      
  },[])


    function confirmSignUp(){
      
    }

    function handleNameChange(event) {
        setName(event.target.value);
      }

    return(
        <>
        <div className="modal"  >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header" >
                <div><label className="ex-text">{title}</label>
                <button className="modal-close-button" onClick={onClose}>
                  &times;
                </button>
                </div>
              </div>
              <div className="modal-body">
        <form>
        <div>
        <label>Name </label>
      <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={handleNameChange} 
      />
    </div>

    <label>Grade</label>
    <div>
      {grades.map(item => (
        <button className ="Grade-btn" key={item.id}>{item.index}</button>
      ))}
    </div>
     <div className="otp-space">
            <button className = "get-otp-button" type="button" onClick={confirmSignUp} >
              <span className ="get-otp-text">Confirm</span>
            </button>
        </div>
      
        </form>
          <br></br>
         
              </div>
            </div>
          </div>
        
        
        </>
    )

}