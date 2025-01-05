import * as day04 from "@/days/day04.ts";
import { readInput } from "./utils/input.ts";

async function main() {
  const day = 4;
  const input = await readInput(day, false);

  console.log(`Day ${day} - Part 1:`, day04.part1(input));
  console.log(`Day ${day} - Part 2:`, day04.part2(input));
}

if (import.meta.main) {
  main();
}
