import React, { useState } from "react";
import { makeStyles, Avatar } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import five from "../../images/five.svg";
import SubChips from "./subchips";
// const useStyles = makeStyles((theme) => ({
//   root: {

//   },
// }));

const SelectionChips = ({
  options,
  onSelectionChange,
  subOptions,
  showsubgrades,
}) => {
  //   const classes = useStyles();
  const [fivesubOptions, setFivesubOptions] = useState([
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
  ]);
  const [esubOptions, setEsubOptions] = useState(["Grade 11", "Grade 12"]);
  const [ugsubOptions, setUGsubOptions] = useState([
    "Graduate",
    "Post-Graduate",
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  //   const [selectedsubOption,setSelectedSubOption] = useState(null);

  const handleChipClick = (option, suboption) => {
    console.log(option);
    console.log(subOptions);
    setSelectedOption(option);
    onSelectionChange(option);
    

    if (option == "5-10") {
      console.log(showsubgrades);
      showsubgrades = true;
    }else showsubgrades = false;
  };
  //   const handleSubChipClick =(suboption) =>{
  //     console.log(subOptions);
  //     setSelectedSubOption(suboption);
  //     onSubSelectionChange(suboption);
  //   }

  return (
    <div>
      <div>
        {options.map((option) => (
          <Chip
            className="chip"
            key={option}
            label={option}
            clickable
            color={selectedOption === option ? "primary" : "default"}
            onClick={() => handleChipClick(option)}
          />
        ))}
      </div>
      <div>
        <SubChips suboptions={fivesubOptions} showsuboptions={showsubgrades}></SubChips>
      </div>
    </div>
  );
};

export default SelectionChips;
