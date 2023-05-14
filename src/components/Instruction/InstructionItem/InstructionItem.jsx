import { useState } from "react";
import { IconButton } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';

export default function InstructionItem({ number, step }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className={"instruction-container"} onClick={() => setIsToggled(prevToggle => !prevToggle)} >
      <div className="instruction-button">
        <IconButton>
          {isToggled ? <CheckCircleOutlineOutlinedIcon className="icon" /> : <RadioButtonUncheckedOutlinedIcon className="icon" />}
        </IconButton>
        <p>{number}.</p>
      </div>
      <p className={"instruction-step" + (isToggled ? " checked" : "")}>{step}</p>
    </div>
  )
}