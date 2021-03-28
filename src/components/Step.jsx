import React, {useState} from 'react'


const Steps = (props) => {

// const [possibleStep, setpossibleStep] = useState(initialState)

const renderDirectionCell = (num) => {
     let step = props.possibleStep;
     let step = Math.floor(Math.random() * Math.floor(9));
        return <span className='square' key={num}> {step} </span>
}

    return(
        <div>
            <div className='board-row'>
                {renderDirectionCell(0)}
                {renderDirectionCell(1)}
                {renderDirectionCell(2)}
                {renderDirectionCell(3)}
                {renderDirectionCell(4)}
            </div>
            <div className='board-row'>
                {renderDirectionCell(5)}
                {renderDirectionCell(6)}
                {renderDirectionCell(7)}
                {renderDirectionCell(8)}
                {renderDirectionCell(9)}

            </div>

        </div>
    )
}

export default Steps;