import React from 'react';
import Cell from './Cell';

function Grid({ grid, toggleCell }) {
  return (
    <div
      className="Grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${grid[0].length},20px)`,
        gap: '2px',
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isAlive={cell}
            onclick={() => toggleCell(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
}

export default Grid;
