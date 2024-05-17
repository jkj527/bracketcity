import React from "react";
import { Bracket, IRoundProps } from 'react-brackets';
import '../styles/bracket.css';
import { survivors, tvshows } from "../data";

interface BracketComponentProps {
    selectedOption: string;
}

const BracketComponent: React.FC<BracketComponentProps> = ({ selectedOption }) => {
    const contestants = selectedOption === 'survivors' ? survivors : tvshows;

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
                { id: 9, teams: [] },
                { id: 10, teams: [] },
                { id: 11, teams: [] },
                { id: 12, teams: [] },
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
