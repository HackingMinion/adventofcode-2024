import { getLineAsNumbers, splitToStrings } from "../utils/input.ts";

interface levels {
  safe: boolean;
  levels: number[];
}

export function part1(input: string): number {
  const lines = splitToStrings(input);

  const res = lines.filter((l) => {
    const levels = getLineAsNumbers(l);
    return checkLevels(levels, "increasing") ||
      checkLevels(levels, "decreasing");
  });
  return res.length;
}

export function part2(input: string): number {
  const lines = splitToStrings(input);

  const data = lines.map((l) => {
    return {
      safe: false,
      levels: getLineAsNumbers(l),
    };
  });

  for (const d of data) {
    d.safe = checkLevels(d.levels, "increasing") ||
      checkLevels(d.levels, "decreasing");
  }

  for (const d of data.filter((d) => !d.safe)) {
    for (let i = 0; i < d.levels.length + 1; i++) {
      if (d.safe) {
        continue;
      }

      const modified = d.levels.toSpliced(i, 1);
      d.safe = checkLevels(modified, "increasing") ||
        checkLevels(modified, "decreasing");
    }
  }

  return data.filter((d) => d.safe).length;
}

const checkLevels = (
  levels: number[],
  mode: "increasing" | "decreasing",
): boolean => {
  return levels.every((l, index) => {
    if (index === 0) {
      return true;
    }

    const lastValue = levels[index - 1];
    const diff = mode === "increasing" ? l - lastValue : lastValue - l;

    return diff >= 1 && diff <= 3;
  });
};
