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
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 4,
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
      {
        id: 5,
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 6,
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
      {
        id: 7,
        teams: [{ name: 'Team A' }, { name: 'Team B' }],
      },
      {
        id: 8,
        teams: [{ name: 'Team C' }, { name: 'Team D' }],
      },
    ],
  },
  {
    title: 'Quarter Finals',
    seeds: [
      {
        id: 9,
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 10,
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 11,
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 12,
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
  {
    title: 'Semifinals',
    seeds: [
      {
        id: 13,
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
      {
        id: 14,
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
  {
    title: 'Championship',
    seeds: [
      {
        id: 13,
        teams: [{ name: 'Team A' }, { name: 'Team C' }],
      },
    ],
  },
];

const bracket = () => {
  return (
    <div className="bracket">
        <Bracket rounds={rounds} />;
    </div>
  )
};

export default bracket;