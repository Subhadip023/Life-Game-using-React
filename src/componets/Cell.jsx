import React from "react";

function Cell({ isAlive, onclick }) {
  return (
    <div className="cell"
      onClick={onclick}
      style={{
        
        background: isAlive ? "white" : "black",
      }}
    ></div>
  );
}

export default Cell;
