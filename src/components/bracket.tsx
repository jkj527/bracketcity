import React from "react";
import { Bracket, IRoundProps } from 'react-brackets';
import '../styles/bracket.css';
import { survivors, tvshows, movies } from "../data";

interface BracketComponentProps {
    selectedOption: string;
    winners: string[];
    round: number;
    standings: string[];
}

const BracketComponent: React.FC<BracketComponentProps> = ({ selectedOption, standings }) => {
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
                { id: 9, teams: [{ name: standings[0] }, { name: standings[1] }] },
                { id: 10, teams: [{ name: standings[2] }, { name: standings[3] }] },
                { id: 11, teams: [{ name: standings[4] }, { name: standings[5] }] },
                { id: 12, teams: [{ name: standings[6] }, { name: standings[7] }] },
            ],
        },
        {
            title: 'Semifinals',
            seeds: [
                { id: 13, teams: [{ name: standings[8] }, { name: standings[9] }] },
                { id: 14, teams: [{ name: standings[10] }, { name: standings[11] }] },
            ],
        },
        {
            title: 'Championship',
            seeds: [
                { id: 15, teams: [{ name: standings[12] }, { name: standings[13] }] },
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
