import React, { useState, useEffect } from 'react'

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

const Steps = ({ startSquare }) => {
    const [steps, setStep] = useState([]);
    const [current, setCurrent] = useState([]);

    // const renderDirectionCell = (num) => {
    //     let step = Math.floor(Math.random() * Math.floor(props.possibleStep.length));
    //     return <span className='square' key={num}> {props.possibleStep[step]} </span>
    // }
    const getRandomIndex = value => Math.floor(Math.random() * possibleSteps[value].length)


    const setCurrentStep = direction => {
        switch (direction) {
            case 0:
                setCurrent(current - 1)
                break;
            case 1:
                setCurrent(current - 3)
                break;
            case 2:
                setCurrent(current + 1)
                break;
            case 3:
                setCurrent(current + 3)
                break;
        }
    }

    useEffect(() => {
        if (typeof startSquare === 'number') {
            const index = getRandomIndex(startSquare)
            const direction = possibleSteps[startSquare][index]
            setStep([direction])
            setCurrentStep(direction)
        }
    }, [startSquare])

    useEffect(() => {
        if (steps.length < 10 && steps.length > 0) {
            setTimeout(() => {
                console.log(current)
                setStep([...steps, possibleSteps[current][getRandomIndex(current)]])
            }, 1000)
        }
    }, [steps])

    return (
        <div>
            <div className='board-row'>
                {
                    steps.map((step, index) => {
                        if (index < 5)
                            return <span className='square' key={index}> {step} </span>
                    })
                }
            </div>
            <div className='board-row'>
                {
                    steps.map((step, index) => {
                        if (index >= 5)
                            return <span className='square' key={index}> {step} </span>
                    })
                }
            </div>

        </div>
    )
}

export default Steps;