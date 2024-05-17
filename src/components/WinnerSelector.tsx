import React, { useState } from "react";
import '../styles/WinnerSelector.css';
import { survivors, tvshows } from "../data";

const WinnerSelector: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('survivors');
    const [contestants, setContestants] = useState<string[]>(survivors);
    const [index, setIndex] = useState<number>(0);
    const [winners, setWinners] = useState<string[]>([]);

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (value === 'survivors') {
            setContestants(survivors);
        } else {
            setContestants(tvshows);
        }
        setIndex(0);
        setWinners([]);
    };

    const handleClick = (winnerIndex: number) => {
        const winner = contestants[index + winnerIndex];
        setWinners(prevWinners => [...prevWinners, winner]);
        setIndex(prevIndex => prevIndex + 2);
    };

    const options = contestants.slice(index, index + 2);

    return (
        <div className="winner">
            <select value={selectedOption} onChange={handleSelectionChange}>
                <option value="survivors">Survivor</option>
                <option value="tvshows">TV Shows</option>
            </select>
            <div className="winner-buttons">
                {options.length === 2 ? (
                    <>
                        <button onClick={() => handleClick(0)}>{options[0]}</button>
                        <button onClick={() => handleClick(1)}>{options[1]}</button>
                    </>
                ) : (
                    <div>No more contestants left</div>
                )}
            </div>
        </div>
    );
}

export default WinnerSelector;
