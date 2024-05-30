import React, { useState } from "react";
import '../styles/WinnerSelector.css';
import { survivors, tvshows, movies } from "../data";
// import { randomizeArr } from "../utils"
import BracketComponent from "./bracket";

const WinnerSelector: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('survivors');
    const [contestants, setContestants] = useState<string[]>(survivors);
    const [index, setIndex] = useState<number>(0);
    const [winners, setWinners] = useState<string[]>([]);
    const [round, setRound] = useState<number>(1);

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (value === 'survivors') {
            setContestants(survivors);
        } else if (value === 'tvshows') {
            setContestants(tvshows);
        } else if (value === 'movies') {
            setContestants(movies);
        }
        setIndex(0);
        setWinners([]);
        setRound(1);
    };

    const handleClick = (winnerIndex: number) => {
        const winner = contestants[index + winnerIndex];
        setWinners(prevWinners => [...prevWinners, winner]);
        setIndex(prevIndex => prevIndex + 2);
        if (index + 2 >= contestants.length) {
            setContestants(winners);
            // setWinners([]);
            setIndex(0);
            setRound(prevRound => prevRound + 1);
        }
    };

    const options = contestants.slice(index, index + 2);

    return (
        <div className="winner">
            <select value={selectedOption} onChange={handleSelectionChange}>
                <option value="survivors">Survivor</option>
                <option value="tvshows">TV Shows</option>
                <option value="movies">Movies</option>
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
            <BracketComponent selectedOption={selectedOption} winners={winners} round={round} />
        </div>
    );
}

export default WinnerSelector;
