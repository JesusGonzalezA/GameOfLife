export const getEvolvedGrid = ( grid, rows, cols) => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          let count = 0;

          if (i > 0) if (grid[i - 1][j]) count++;
          if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++;
          if (i > 0 && j < cols - 1) if (grid[i - 1][j + 1]) count++;
          if (j < cols - 1) if (grid[i][j + 1]) count++;
          if (j > 0) if (grid[i][j - 1]) count++;
          if (i < rows - 1) if (grid[i + 1][j]) count++;
          if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++;
          if (i < rows - 1 && j < cols - 1) if (grid[i + 1][j + 1]) count++;

          // Underpopulation or overpopulation
          if (grid[i][j] && (count < 2 || count > 3)) 
            grid[i][j] = false;

          // Reproduction
          if (!grid[i][j] && count === 3) 
            grid[i][j] = true;
        }
      }

    return grid;
}