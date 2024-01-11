import React, { useState } from 'react';

const SudokuCell = ({ initialValue, isEditable, cellPosition }) => {
  const [value, setValue] = useState(initialValue);
  const [ghostValue, setGhostValue] = useState('');

  const handleInputChange = (event) => {
    if (isEditable) {
      const newValue = parseInt(event.target.value, 10) || 0;
      const clampedValue = Math.min(Math.max(newValue, 1), 9);

      setValue(clampedValue);
    }
  };

  const handleGhostInputChange = (event) => {
    if (isEditable) {
      const newGhostValue = parseInt(event.target.value, 10) || 0;
      const clampedGhostValue = Math.min(Math.max(newGhostValue, 0), 9999);

      setGhostValue(clampedGhostValue.toString());
    }
  };

  return (
    <div>
      <input
        type="number"
        value={value || ''}
        onChange={handleInputChange}
        readOnly={!isEditable}
        data-cell-position={cellPosition}
      />

      <input
        type="number"
        value={ghostValue}
        onChange={handleGhostInputChange}
        readOnly={!isEditable}
        placeholder="Ghost Value"
        min="0"
        max="9999"
        data-cell-position={cellPosition}
      />
    </div>
  );
};

export default SudokuCell;
