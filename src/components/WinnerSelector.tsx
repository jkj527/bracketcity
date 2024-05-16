import React, { useState } from "react";
import '../styles/WinnerSelector.css';
import { survivors } from "../data";

const WinnerSelector: React.FC = () => {
    const [contestants, setContestants] = useState<string[]>(survivors);
    const [index, setIndex] = useState<number>(0);
    const [winners, setWinners] = useState<string[]>([]); // separate state to track winners

    const handleClick = (winnerIndex: number) => {
        const winner = contestants[index + winnerIndex];

        // Add the winner to the winners list
        setWinners(prevWinners => [...prevWinners, winner]);

        // Move to the next pair of contestants
        setIndex(prevIndex => prevIndex + 2);
    };

    const options = contestants.slice(index, index + 2);

    return (
        <div className="winner">
            {options.length === 2 ? (
                <>
                    <button onClick={() => handleClick(0)}>{options[0]}</button>
                    <button onClick={() => handleClick(1)}>{options[1]}</button>
                </>
            ) : (
                <div>No more contestants left</div>
            )}
        </div>
    );
}

export default WinnerSelector;
