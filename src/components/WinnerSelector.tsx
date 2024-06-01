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
    const [standings, setStandings] = useState<string[]>([]);
    const [round, setRound] = useState<number>(1);
    const [champion, setChampion] = useState<string | null>(null);

    // ONLY WORKS FOR SURVIVOR - MAKE APPROPRIATE CHANGES TO ACCOMMODATE OTHER SELECTIONS

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
        setStandings([]);
        setRound(1);
        setChampion(null);
    };

    // this new func should handle the asynchronicity of the last winner of the round getting added before contestants is set to winners
    const handleClick = (winnerIndex: number) => {
        const winner = contestants[index + winnerIndex];
        setStandings([...standings, winner]);
        setWinners(prevWinners => {
            const updatedWinners = [...prevWinners, winner];
            if (winners.length === 1) {
                setChampion(winners[0]);
            }
            
            setIndex(prevIndex => {
                const newIndex = prevIndex + 2;

                if (newIndex >= contestants.length) {
                    setContestants(updatedWinners);
                    setWinners([]);
                    setRound(prevRound => prevRound + 1);
                    return 0;
                } else {
                    return newIndex;
                }
            });

            return updatedWinners;
        });
    };

    const options = contestants.slice(index, index + 2);
    console.log('Selected Option: ', selectedOption);
    console.log('Contestants:', contestants);
    console.log('Index: ', index);
    console.log('Options: ', options);
    console.log('Winners: ', winners);

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
                    <div className="champion">{champion} is the champion!</div>
                )}
            </div>
            <BracketComponent selectedOption={selectedOption} winners={winners} round={round} standings={standings} />
        </div>
    );
}

export default WinnerSelector;
