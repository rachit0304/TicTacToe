import React, { useState } from 'react'
import Square from './Square'


function Board() {
    const [square, setSquare] = useState(Array(9).fill(null))
    const [isX ,setisX] = useState(true);
  
    function onSquareClick  (i) {
        if(square[i] || calculateWinner(square)){
            return;
        }

        const next = square.slice();
        if(isX)
        next[i] = "x"
        else
        next[i] = "o"
        
        setSquare(next)
        setisX(!isX)
    }

    let status;
    let winner = calculateWinner(square);
    if (winner) 
    status = `winner is ${winner}`;
    else 
    status = `Next player is ${isX ? "X" : "O"}`;
  


  return (
    <>
   
    <div className='board'>
        
        <button onClick={()=> setSquare(Array(9).fill(null))} className='btn-re'>Reset</button>
        <h3>{status}</h3>
    
        <div className='row-board'>
      <Square value={square[0]} onClick={()=> onSquareClick(0)}/>
      <Square value={square[1]} onClick={()=> onSquareClick(1)}/>
      <Square value={square[2]} onClick={()=> onSquareClick(2)}/>
      </div>

      <div className='row-board'>
      <Square value={square[3]} onClick={()=> onSquareClick(3)}/>
      <Square value={square[4]} onClick={()=> onSquareClick(4)}/>
      <Square value={square[5]} onClick={()=> onSquareClick(5)}/>
      </div>

      <div className='row-board'>
      <Square value={square[6]} onClick={()=> onSquareClick(6)}/>
      <Square value={square[7]} onClick={()=> onSquareClick(7)}/>
      <Square value={square[8]} onClick={()=> onSquareClick(8)}/>
      </div>

    </div>

    </>
  )
}

function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }
  

export default Board
