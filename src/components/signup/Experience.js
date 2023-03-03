import React, { useEffect, useState } from "react";
import SelectionChips from "./selectionchips";
import five from "./../../images/five.svg";
import eleven from "./../../images/five.svg";
import ug from "./../../images/five.svg";

export default function Experience({ onClose, title, phone }) {
  const [options, setOptions] = useState(["5-10", "11-12", "UG-PG"]);
  const [images, setImages] = useState([five, eleven, ug]);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState([]);
  const [showsubgrades, setShowSubGrades] = useState(false);

  const [suboptions, setSubOptions] = useState(null);
  const [gradselected, setGradeSelected] = useState(false);
  const [nameandgrade, setNameAndGrade] = useState(false);
  const fdata = {
    name: name,
    phone: phone,
    grade: grade,
  };
  function handleNameChange(event) {
    setName(event.target.value);
    if (gradselected && name) {
      setNameAndGrade(true);
    } else setNameAndGrade(false);
  }
  const handleSelectionChange = (option, suboption) => {
    console.log(`Selected option is ${option}`);

    setGradeSelected(true);
    setGrade(option);

    if (grade === "5-10") {
      console.log("i am inside of loop");
      
      setShowSubGrades(true);
      console.log(showsubgrades);
      // console.log(fivesubOptions);
    } else {
      setSubOptions(null);
      setShowSubGrades(false);
    }
    if (name) {
      setNameAndGrade(true);
    }
    if (name == "") {
      setNameAndGrade(false);
    }
  };
  const handleSubSelectionChange = (subOption) => {
    console.log(`Selected suboption is ${subOption}`);
  };

  // if(name&&gradselected){
  //   setNameAndGrade(true);
  // }
  console.log(fdata);
  // useEffect(()=>{
  //   fetch('http://localhost:4000/grades',{
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },

  //     }).then(response=>response.json())
  //     .then(data => setGrades(data))
  //     .catch(error => {console.error(error);})

  // },[])

  function confirmSignUp() {
    fetch("http://localhost:4000/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fdata }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  function handleGradeSelect() {}

  return (
    <>
      <div className="modal">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="forpx">
              <label className="ex-text">Help us personalize</label>
              <br></br>
              <label className="ex-text">your experience</label>
              <button className="modal-close-button" onClick={onClose}>
                &times;
              </button>
            </div>
          </div>
          <div className="modal-body">
            <form>
              <div>
                <label className="otp-sent-label">Name </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  className="mob-ph"
                  placeholder="Enter Your Name"
                  onChange={handleNameChange}
                />
              </div>

              <label className="otp-sent-label">Select Grade</label>
              {/* <div className="grades-div">
      {grades.map(item => (
        <button className ="Grade-btn" key={item.id} onClick={handleGradeSelect}>{item.index}</button>
      ))}
    </div> */}

              <div>
                <SelectionChips
                  images={images}
                  options={options}
                  onSelectionChange={handleSelectionChange}
                  subOptions={suboptions}
                  showsubgrades={showsubgrades}
                />
              </div>

              <div className="otp-space">
                <button
                  className={
                    nameandgrade ? "enabled-verify" : "disabled-verify"
                  }
                  disabled={!nameandgrade}
                  type="button"
                  onClick={confirmSignUp}
                >
                  <span className="get-otp-text">Confirm</span>
                </button>
              </div>
            </form>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
