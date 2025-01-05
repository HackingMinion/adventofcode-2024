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
  const regex = /(do\(\)|don't\(\))|mul\((\d{1,3}),(\d{1,3})\)/g;
  // const regex = /(?:do\(\)|don't\(\))?.?mul\((\d{1,3}),(\d{1,3})\)/g;
  let match;
  let sum = 0;
  let isEnabled = true;

  while ((match = regex.exec(input)) !== null) {
    const [fullMatch, instruction, num1, num2] = match;

    if (instruction === "do()") {
      isEnabled = true;
    } else if (instruction === "don't()") {
      isEnabled = false;
    } else if (num1 !== undefined && num2 !== undefined && isEnabled) {
      sum += parseInt(num1, 10) * parseInt(num2, 10);
    }
  }

  return sum;
}
