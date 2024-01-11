import React, { useState } from 'react';
import SudokuCell from './sudokuCell';
import SudokuSolver from './sudokuSolver';

const SudokuBoard = ({ puzzle : puzzleData}) => {
  
  // Assuming puzzle is a 2D array containing the initial values
  // If puzzle is not provided, use a blank puzzle
  
  const [puzzle, setPuzzle] = useState(puzzleData || Array.from({ length: 9 }, () => Array(9).fill(0)));
  
  const [isSolving, setIsSolving] = useState(false);

  const handleSolveClick = () => {
    setIsSolving(true);

    //{isSolving && <SudokuSolver puzzle={puzzle} /*onSudokuSolved={handleSudokuSolved} *//>}
    // Logic to solve the puzzle and update the puzzle state
    // You can use the backtracking algorithm or any solving logic here
    // After solving, setPuzzle(solvedPuzzle);
    
  };


/*
  const handleSudokuSolved = (solvedPuzzle) => {
    // Handle the solved puzzle, if needed
    console.log('Sudoku solved!', solvedPuzzle);
    // Update the puzzle state with the solved puzzle
    setPuzzle(solvedPuzzle);
    // Stop solving
    setIsSolving(false);
  };*/


  return (
    <div className="sudoku-board">
      {puzzle.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((initialValue, colIndex) => {
            const cellPosition = rowIndex * puzzle.length + colIndex + 1;
            const isEditable = initialValue === 0;

            return (
              <SudokuCell
                key={cellPosition}
                initialValue={initialValue}
                isEditable={isEditable}
                cellPosition={cellPosition}
              />
            );
          })}
        </div>
      ))}
      <button onClick={handleSolveClick} disabled={isSolving}>
        Solve Puzzle
      </button>
    </div>
  );
};

export default SudokuBoard;