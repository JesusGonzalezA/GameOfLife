import React from 'react'
import { useSelector } from 'react-redux';

import { Cell } from './Cell';
import { Controllers } from './Controllers';

import '../styles/grid.css'
//**************************************************************************
export const Grid = () => {

    const { cols, grid, cellSize } = useSelector(state => state.game);
    const width = (cols * cellSize);

    return (
        <div className="mt-5">
            <div>
                <Controllers />
            </div>
            
            <div className="grid" style={{ width: width }}>
                {
                    grid.map( (row, index_row) => 
                        row.map( (_, index_col) => ( 
                                <Cell 
                                    key={`${index_row}_${index_col}`} 
                                    row={index_row}
                                    col={index_col}
                                />
                        ))
                    )
                }
            </div>
            
        </div>
    )
}
