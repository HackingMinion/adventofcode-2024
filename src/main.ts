import { readInput } from "@/utils/input.ts";
import * as day01 from "@/days/day01.ts";

async function main() {
  const day = 1;
  const input = await readInput(day);

  console.log(`Day ${day} - Part 1:`, day01.part1(input));
  console.log(`Day ${day} - Part 2:`, day01.part2(input));
}

if (import.meta.main) {
  main();
}
