import React, {useState, memo} from 'react'
import Board from './board.jsx'
import Step from './Step.jsx'


const Game = () => {

// const state = {
//     xIsNext: true,
//     stepNumber: 0,
//     history: [{
//         squares: Array(9).fill(null)
//     }]
// };
const [squares, setsquares] = useState([0,1,2,3,4,5,6,7,8]);
const [startSquare, setstartSquare] = useState()
const [possibleStep, setpossibleStep] = useState([]);

   
    const startGame = () => {
        
        let i = Math.floor(Math.random() * Math.floor(9));
        setstartSquare(i);
        checkPossibleStep()
        console.log(possibleStep)
    }
 const checkPossibleStep = () => {
    if(startSquare == 0) {
        setpossibleStep([2,3])
    }
    if(startSquare == 1) {
        setpossibleStep([0,2,3])
    }
    if(startSquare == 2) {
        setpossibleStep([0,3])
    }
    if(startSquare == 3) {
        setpossibleStep([1,2,3])
    }
    if(startSquare == 4) {
        setpossibleStep([0,1,2,3])
    }
    if(startSquare == 5) {
        setpossibleStep([0,1,3])
    }
    if(startSquare == 6) {
        setpossibleStep([1,2])
    }
    if(startSquare == 7) {
        setpossibleStep([0,1,2])
    }
    if(startSquare == 8) {
        setpossibleStep([0,1])
    }
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
                    squares = {squares}
                    startSquare={startSquare}
                    />
                </div>
                <div className='game-board-steps'>
                    <Step
                       possibleStep={possibleStep} 
                    />
                </div>

            </div>
        </div>
    )
}

export default memo(Game);