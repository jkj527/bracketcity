import React from "react";
import '../styles/WinnerSelector.css';
import { survivors } from "../data";

const WinnerSelector = () => {
    return (
        <div className="winner">
            <button>Survivor 1</button>
            <button>Survivor 2</button>
        </div>
    )
}

export default WinnerSelector;