import React from 'react';
import Bracket from './components/bracket';
import NavBar from './components/NavBar';
import WinnerSelector from './components/WinnerSelector';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WinnerSelector />
      <Bracket />
    </div>
  );
}

export default App;
