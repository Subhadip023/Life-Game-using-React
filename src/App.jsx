import { useState,useEffect } from "react";
import Gride from "./componets/Gride";

const rows = 30;
const cols = 80;

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
const randomGrid = () => {
  let array = [];
  for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < cols; j++) {
      array[i][j] = Math.floor(Math.random()*2);
    }
  }
  return array;
};

function App() {
  const [grid, setGrid] = useState(emptyGrid());
  const [start,setStart]=useState(false)

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
  const cols=grid[0].length;
  for (let i = 0; i < rows; i++) {
    for(let j=0;j<cols;j++){
    
   
        let sumOfNeighbour=0
          for (let x = i-1; x <=i+1; x++) {
            for (let y = j-1; y <= j+1; y++) {
              if (x === i && y === j) continue;  
              sumOfNeighbour+=grid[(x+rows)%rows][(y+cols)%cols];
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
    
  
  setGrid(nextGride)
}
  
useEffect(()=>{
  if (start) {
    const interval=setInterval(runGame,100)
    return ()=>clearInterval(interval)
  }
}
,[start,grid]
)


  return (
    <>
      <section className="main-section">
        <header>Conway's Game of life By Subhadip</header>
        <div>
          <Gride grid={grid} toggleCell={toggleCell} />
        </div>
        <div className="btn">
          <button onClick={()=>setStart(!start)}> {start?'Stop':"Start"}</button>
          <button onClick={()=>setGrid(emptyGrid)}>Reset</button>
          <button onClick={()=>setGrid(randomGrid)}>Random</button>
        </div>
      </section>
    </>
  );
}

export default App;
