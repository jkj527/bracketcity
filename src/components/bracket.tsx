import React from "react";
import { Bracket, IRoundProps } from 'react-brackets';
import '../styles/bracket.css';

const survivors: string[] = [
    "Boston Rob",
    "Sandra Diaz-Twine",
    "Tony Vlachos",
    "John Cochran",
    "Yul Kwon",
    "Tyson Apostol",
    "Rick Devens",
    "Jeremy Collins",
    "Earl Cole",
    "Kim Spradlin",
    "Amber Mariano",
    "Richard Hatch",
    "Parvati Shallow",
    "Todd Herzog",
    "J.T. Thomas",
    "Denise Stapley"
];

console.log(survivors);

const rounds: IRoundProps[] = [
  {
    title: 'Round One',
    seeds: [
      {
        id: 1,
        teams: [{ name: survivors[0] }, { name: survivors[1] }],
      },
      {
        id: 2,
        teams: [{ name: survivors[2] }, { name: survivors[3] }],
      },
      {
        id: 3,
        teams: [{ name: survivors[4] }, { name: survivors[5] }],
      },
      {
        id: 4,
        teams: [{ name: survivors[6] }, { name: survivors[7] }],
      },
      {
        id: 5,
        teams: [{ name: survivors[8] }, { name: survivors[9] }],
      },
      {
        id: 6,
        teams: [{ name: survivors[10] }, { name: survivors[11] }],
      },
      {
        id: 7,
        teams: [{ name: survivors[12] }, { name: survivors[13] }],
      },
      {
        id: 8,
        teams: [{ name: survivors[14] }, { name: survivors[15] }],
      },
    ],
  },
  {
    title: 'Quarter Finals',
    seeds: [
      {
        id: 9,
        teams: [],
      },
      {
        id: 10,
        teams: [],
      },
      {
        id: 11,
        teams: [],
      },
      {
        id: 12,
        teams: [],
      },
    ],
  },
  {
    title: 'Semifinals',
    seeds: [
      {
        id: 13,
        teams: [],
      },
      {
        id: 14,
        teams: [],
      },
    ],
  },
  {
    title: 'Championship',
    seeds: [
      {
        id: 15,
        teams: [],
      },
    ],
  },
];

const BracketComponent = () => {
  return (
    <div className="bracket">
      <Bracket rounds={rounds} />;
    </div>
  )
};

export default BracketComponent;
