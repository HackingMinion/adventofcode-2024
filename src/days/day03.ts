export function part1(input: string): number {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  let match;
  let sum = 0;

  while ((match = regex.exec(input)) !== null) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    sum += num1 * num2;
  }

  return sum;
}

export function part2(input: string): number {
  return 0;
}
