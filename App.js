import React, { useState } from 'react';
import './App.css';
import SudokuBoard from './sudokuBoard';

const App = () => {
  const [puzzleData, setPuzzle] = useState([
    [0, 7, 0, 0, 6, 0, 0, 0, 1],
    [0, 0, 0, 0, 9, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 8, 5, 0, 0, 0, 0],
    [6, 0, 5, 0, 0, 0, 0, 2, 4],
    [0, 3, 8, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 9, 0, 0],
    [2, 0, 0, 5, 0, 0, 0, 7, 0],
    [5, 4, 1, 0, 0, 6, 0, 0, 0],
  ]);

  return (
    <div className="App">
      <h1>Sudoku App</h1>
      <SudokuBoard puzzle={puzzleData} />
    </div>
    );
};

export default App;
