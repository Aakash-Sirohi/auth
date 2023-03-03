import React, { useState } from 'react';
import Chip from '@mui/material/Chip';

const SubChips = ({ suboptions, onSubSelectionChange ,showsubgrades }) => {
    
      const [selectedSubOption, setSelectedSubOption] = useState(null);
    //   const [selectedsubOption,setSelectedSubOption] = useState(null);
     
      const handlesubChipClick = (suboption) => {
        console.log(suboption);
        
        setSelectedSubOption(suboption);
        onSubSelectionChange(suboption);
        
        
        
      };

return (
  <div>
    <div>
      {suboptions.map((suboption) => (
        <Chip
          className="chip"
          key={suboption}
          label={suboption}
          clickable
          color={selectedSubOption === suboption ? "primary" : "default"}
          onClick={() => handlesubChipClick(suboption)}
        />
      ))}
    </div>
    <div></div>
  </div>
);}

export default SubChips;