import React from 'react'

function Cell({isAlive,onclick}) {
  return (
    <div onClick={onclick} 
    style={{
      height: '20px',
  width:  '20px',
  background: isAlive?"white":"black",
    }}
    >
    
    </div>
  )
}

export default Cell
