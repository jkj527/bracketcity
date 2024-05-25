import React from "react";
import { Bracket, IRoundProps } from 'react-brackets';
import '../styles/bracket.css';
import { survivors, tvshows, movies } from "../data";

interface BracketComponentProps {
    selectedOption: string;
    winners: string[];
}

const BracketComponent: React.FC<BracketComponentProps> = ({ selectedOption, winners }) => {
    let contestants: string[];
    if (selectedOption === 'survivors') {
        contestants = survivors;
    } else if (selectedOption === 'tvshows') {
        contestants = tvshows;
    } else if (selectedOption === 'movies') {
        contestants = movies;
    } else {
        contestants = [];
    }

    const rounds: IRoundProps[] = [
        {
            title: 'Round One',
            seeds: [
                { id: 1, teams: [{ name: contestants[0] }, { name: contestants[1] }] },
                { id: 2, teams: [{ name: contestants[2] }, { name: contestants[3] }] },
                { id: 3, teams: [{ name: contestants[4] }, { name: contestants[5] }] },
                { id: 4, teams: [{ name: contestants[6] }, { name: contestants[7] }] },
                { id: 5, teams: [{ name: contestants[8] }, { name: contestants[9] }] },
                { id: 6, teams: [{ name: contestants[10] }, { name: contestants[11] }] },
                { id: 7, teams: [{ name: contestants[12] }, { name: contestants[13] }] },
                { id: 8, teams: [{ name: contestants[14] }, { name: contestants[15] }] },
            ],
        },
        {
            title: 'Quarter Finals',
            seeds: [
                { id: 9, teams: [{ name: winners[0] }, { name: winners[1] }] },
                { id: 10, teams: [{ name: winners[2] }, { name: winners[3] }] },
                { id: 11, teams: [{ name: winners[4] }, { name: winners[5] }] },
                { id: 12, teams: [{ name: winners[6] }, { name: winners[7] }] },
            ],
        },
        {
            title: 'Semifinals',
            seeds: [
                { id: 13, teams: [] },
                { id: 14, teams: [] },
            ],
        },
        {
            title: 'Championship',
            seeds: [
                { id: 15, teams: [] },
            ],
        },
    ];

    return (
        <div className="bracket">
            <Bracket rounds={rounds} />
        </div>
    )
};

export default BracketComponent;
