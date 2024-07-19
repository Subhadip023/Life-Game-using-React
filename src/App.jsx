import { useState } from "react";
import Gride from "./componets/Gride";
import "./App.css";

const rows = 30;
const cols = 30;

const emptyGrid = () => {
  let array = [];
  for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < cols; j++) {
      array[i][j] = 0;
    }
  }
  return array;
};

function App() {
  const [grid, setGrid] = useState(emptyGrid());

  function toggleCell(row, col) {
    const updateGrid = grid.map((rowArray, rowIndex) =>
      rowArray.map((cell, colIndex) => {
        if (row == rowIndex && col == colIndex) {
          return grid[row][col] ? 0 : 1;
        } else {
          return cell;
        }
      })
    );
    setGrid(updateGrid);
  }
function runGame() {
  const nextGride=emptyGrid();
  const rows=grid.length;
  const cols=grid.length;
  for (let i = 0; i < rows; i++) {
    for(let j=0;j<cols;j++){
      if (i==0 || j==0 || i==rows-1 || j==cols-1) nextGride[i][j]=grid[i][j]
      else{
        let sumOfNeighbour=0
          for (let x = i-1; x <=i+1; x++) {
            for (let y = j-1; y <= j+1; y++) {
              if (x === i && y === j) continue;  
              sumOfNeighbour+=grid[x][y];
            }
          }
        if (grid[i][j]===1) {
          if (sumOfNeighbour < 2 || sumOfNeighbour>3) {
            nextGride[i][j]=0;
          }
          else {
            nextGride[i][j]=1;
          }
        }  else{
          if (sumOfNeighbour===3) {
            nextGride[i][j]=1;
          }
        }

      }

    }
    
  }
  setGrid(nextGride)
}
  

  return (
    <>
      <section className="main-section">
        <header>this is header</header>
        <div>
          <Gride grid={grid} toggleCell={toggleCell} />
        </div>
        <div className="btn">
          <button onClick={runGame}> run</button>
        </div>
      </section>
    </>
  );
}

export default App;
