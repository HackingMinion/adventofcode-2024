export async function readInput(day: number): Promise<string> {
  const path = `inputs/day${day.toString().padStart(2, '0')}.txt`;
  try {
    return await Deno.readTextFile(path);
  } catch (error) {
    console.error(`Error reading file at ${path}:`, error);
    throw error;
  }
}

export async function readInputLines(day: number): Promise<string[]> {
  const input = await readInput(day);
  return input.split("\n").filter(line => line.trim() !== "");
}
