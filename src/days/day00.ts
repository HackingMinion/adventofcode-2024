import {splitToNumbers} from "../utils/input.ts";

export function part1(input: string): number {
  const numbers = splitToNumbers(input);
  return numbers.reduce((sum, n) => sum + n, 0);
}

export function part2(input: string): number {
  const numbers = splitToNumbers(input);
  return numbers.reduce((product, n) => product * n, 1);
}
