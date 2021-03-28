import React, { useState, memo } from 'react'
import Board from './board.jsx'
import Step from './Step.jsx'

const possibleSteps = [
    [2, 3],                     // для первой ячейки
    [0, 2, 3],                  // для второй ячейки
    [0, 3],
    [1, 2, 3],
    [0, 1, 2, 3],
    [0, 1, 3],
    [1, 2],
    [0, 1, 2],
    [0, 1]
]

const Game = () => {

    // const state = {
    //     xIsNext: true,
    //     stepNumber: 0,
    //     history: [{
    //         squares: Array(9).fill(null)
    //     }]
    // };
    const [squares, setsquares] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const [startSquare, setstartSquare] = useState()
    const startGame = () => {

        let i = Math.floor(Math.random() * Math.floor(9));
        setstartSquare(i);
    }

    return (
        <div className='game-container'>
            <h1>
                Hello gamer
            </h1>
            <button onClick={() => startGame()}> Start Game </button>
            <div className='game'>
                <div className='game-board'>
                    <Board
                        squares={squares}
                        startSquare={startSquare}
                    />
                </div>
                <div className='game-board-steps'>
                    <Step startSquare={startSquare}/>
                </div>

            </div>
        </div>
    )
}

export default memo(Game);