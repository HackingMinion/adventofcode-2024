import { splitToStrings } from "../utils/input.ts";

export function part1(input: string): number {
  const grid = createGrid(input);

  return countXmas(grid);
}

export function part2(input: string): number {
  return 0;
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
