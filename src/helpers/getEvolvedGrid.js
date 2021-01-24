import { getGridClone } from "./getGridClone";

export const getEvolvedGrid = ( grid, rows, cols) => {

    let gridClone = getGridClone(grid);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          let count = countNeighbours( grid, i, j )

          // Underpopulation or overpopulation
          if (grid[i][j] && (count < 2 || count > 3)) 
            gridClone[i][j] = false;

          // Reproduction
          else if (!grid[i][j] && count === 3) 
            gridClone[i][j] = true;

          else 
            gridClone[i][j] = grid[i][j]
        }
      }

    return gridClone;
}

const setCellValueHelper = ( grid, row, col ) => {
  try {
      return ( grid[row][col] === true )? 1 : 0;
  }
  catch {
      return 0;
   }
};

const countNeighbours = ( grid, row, col ) => {
  let total_neighbours = 0;

  total_neighbours += setCellValueHelper(grid, row - 1, col - 1);
  total_neighbours += setCellValueHelper(grid, row - 1, col);
  total_neighbours += setCellValueHelper(grid, row - 1, col + 1);
  total_neighbours += setCellValueHelper(grid, row, col - 1);
  total_neighbours += setCellValueHelper(grid, row, col + 1);
  total_neighbours += setCellValueHelper(grid, row + 1, col - 1);
  total_neighbours += setCellValueHelper(grid, row + 1, col);
  total_neighbours += setCellValueHelper(grid, row + 1, col + 1);

  return total_neighbours;
};