import {splitToNumbers, splitToStrings} from "../utils/input.ts";

function getLeftRightLists(input: string) {
  const lines = splitToStrings(input);
  const left: number[] = [];
  const right: number[] = [];

  for (const line of lines) {
    const [leftValue, rightValue] = line.trim().split(/\s+/).map(Number); // Split and convert to numbers
    left.push(leftValue);
    right.push(rightValue);
  }

  return [left, right]
}

export function part1(input: string): number {
  const [left, right] = getLeftRightLists(input);
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < left.length; i++) {
    sum  += Math.abs(left[i] - right[i]);
  }

  return sum;
}

export function part2(input: string): number {
  const [left, right] = getLeftRightLists(input);

  const leftNoDuplicates = Array.from(new Set(left));
  const similarityMap = new Map<number, number>();

  for (const num of leftNoDuplicates) {
    const score = num * frequency(right, num)
    similarityMap.set(num, score)
  }

  const sum = left.reduce((acc, curr) => {
    const score = similarityMap.get(curr)
    acc += score ?? 0
    return acc
  }, 0)

  return sum;
}

const frequency = (arr: number[], item: number) => {
  return arr.filter(x => x === item).length;
};
