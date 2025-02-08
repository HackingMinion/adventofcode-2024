import { splitToStrings } from "../utils/input.ts";

export function part1(input: string): number {
  const grid = createGrid(input);

  return countXmas(grid);
}

export function part2(input: string): number {
  const grid = createGrid(input);

  return countMas(grid);
}

const createGrid = (input: string) => {
  const lines = splitToStrings(input);
  const grid: string[][] = [];

  for (let i = 0; i < lines.length; i++) {
    grid.push([]);

    const line = lines[i];
    for (const char of line) {
      grid[i].push(char);
    }
  }

  return grid;
};

const countXmas = (grid: string[][]) => {
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [1, -1], [
    1,
    1,
  ]];

  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const start = grid[row][col];
      if (start !== "X") {
        continue;
      }

      for (
        const [x, y] of dirs
      ) {
        const endX = row + 3 * x;
        const endY = col + 3 * y;

        if (
          endX < 0 || endY < 0 || endX >= grid.length || endY >= grid[0].length
        ) {
          continue;
        }

        const xmas = grid[row][col] + grid[row + x][col + y] +
          grid[row + 2 * x][col + 2 * y] + grid[endX][endY];
        if (xmas === "XMAS") {
          count++;
        }
      }
    }
  }

  return count;
};

const countMas = (grid: string[][]) => {
  const lt = [-1, -1];
  const rt = [1, -1];
  const lb = [-1, 1];
  const rb = [1, 1];

  let count = 0;

  // Loop through the grid and if A is found check all 4 corners and see if they spell MAS or SAM in any direction diagonally
  for (let row = 1; row < grid.length - 1; row++) {
    for (let col = 1; col < grid[row].length -1; col++) {
      const start = grid[row][col];
      if (start !== "A") {
        continue;
      }

      const leftTop = [lt[0] + row, lt[1] + col];
      const rightBottom = [rb[0] + row, rb[1] + col];

      const diag1 = grid[leftTop[0]][leftTop[1]] + "A" + grid[rightBottom[0]][rightBottom[1]];
      if (diag1 !== "MAS" && diag1 !== "SAM") {
        continue;
      }

      const rightTop = [rt[0] + row, rt[1] + col];
      const leftBottom = [lb[0] + row, lb[1] + col];

      const diag2 = grid[rightTop[0]][rightTop[1]] + "A" + grid[leftBottom[0]][leftBottom[1]];
      if (diag2 !== "MAS" && diag2 !== "SAM") {
        continue;
      }

      count++;
    }
  }

  return count;
};
