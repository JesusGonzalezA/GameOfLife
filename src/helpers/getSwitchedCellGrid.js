export const getSwitchedCellGrid = ( grid, row, col ) => {
    
    let gridCopy = grid.map( (row) => row.slice() )
    gridCopy[row][col] = !gridCopy[row][col];

    return gridCopy;
}