import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchCell } from '../actions/game';

import '../styles/grid.css'

//**************************************************************************

export const Cell = React.memo(( { row, col } ) => {

    const dispatch = useDispatch();
    const isAlive = useSelector(state => state.game.grid[row][col]);
    const { cellSize } = useSelector(state => state.game);

    const selectBox = () => {
        dispatch( switchCell( row, col ))
    }
    
    return (
        <div 
            className={ (isAlive)? 'box on' : 'box off' }
            style={{width: cellSize + 1, height: cellSize + 1}}
            onClick={ selectBox }
        />
    )
})