import React from 'react'


const Cell = (props) => {
    if (props.value == props.startSquare)
    {
        let startValue = 'X'
        return <button className='square' onClick={()=> {props.onClick()}}> {startValue} </button>
    }
    else{
        return <button className='square' onClick={()=> {props.onClick()}}>  </button>
    }
}

export default Cell;