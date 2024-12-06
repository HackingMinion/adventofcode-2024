import {getLineAsNumbers, splitToNumbers, splitToStrings} from "../utils/input.ts";

export function part1(input: string): number {
  const lines = splitToStrings(input);
  const res = lines.filter(l => {
    const levels = getLineAsNumbers(l)
    return checkLevels(levels, 'increasing') || checkLevels(levels, 'decreasing');
  })
  return res.length
}

export function part2(input: string): number {
  return 0;
}

const checkLevels = (levels: number[], mode: 'increasing' | 'decreasing'): boolean => {
  return levels.every((l, index) => {
    if (index === 0) {
      return true;
    }

    const lastValue = levels[index - 1];
    const diff = mode === 'increasing' ? l - lastValue : lastValue - l;

    return diff > 0 && diff < 4;
  });
};
