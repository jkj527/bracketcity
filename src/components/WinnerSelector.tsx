import React, { useState } from "react";
import '../styles/WinnerSelector.css';
import { survivors } from "../data";

const WinnerSelector = () => {
    const [contestants, setContestants] = useState(survivors);
    const [options, setOptions] = useState([contestants[0], contestants[1]]);

    const handleClick = () => {
        // push winner to next round
        // remove loser from contestants
            // take slice of state, alter, set state
        // reset options state to be next two survivors
        
    }

    return (
        <div className="winner">
            <button onClick={handleClick} >{options[0]}</button>
            <button onClick={handleClick} >{options[1]}</button>
        </div>
    )
}

export default WinnerSelector;