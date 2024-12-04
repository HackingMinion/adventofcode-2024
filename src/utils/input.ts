export async function readInput(day: number, isTest: boolean = false): Promise<string> {
  const testSuffix = isTest ? "_test" : "";
  const path = `inputs/day${day.toString().padStart(2, '0')}${testSuffix}.txt`;
  try {
    return await Deno.readTextFile(path);
  } catch (error) {
    console.error(`Error reading file at ${path}:`, error);
    throw error;
  }
}

export function splitToStrings(input: string): string[] {
  return filterNonEmptyLines(splitLines(input));
}

export function splitToNumbers(input: string): number[] {
  return splitToStrings(input).map(Number);
}
export function filterNonEmptyLines(lines: string[]): string[] {
  return lines.filter(line => line.trim() !== "");
}

export function splitLines(input: string): string[] {
  return input.split("\r\n");
}
