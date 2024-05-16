import React from "react";
import { Bracket, IRoundProps } from 'react-brackets';
import '../styles/bracket.css';

const rounds: IRoundProps[] = [
  {
    title: 'Round One',
    seeds: [
      {
        id: 1,
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 2,
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
      {
        id: 3,
        teams: [{ name: 'Team E' }, { name: 'Team F' }],
      },
      {
        id: 4,
        teams: [{ name: 'Team G' }, { name: 'Team H' }],
      },
      {
        id: 5,
        teams: [{ name: 'Team I' }, { name: 'Team J' }],
      },
      {
        id: 6,
        teams: [{ name: 'Team K' }, { name: 'Team L' }],
      },
      {
        id: 7,
        teams: [{ name: 'Team M' }, { name: 'Team N' }],
      },
      {
        id: 8,
        teams: [{ name: 'Team O' }, { name: 'Team P' }],
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
        id: 13,
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
