import * as day03 from "@/days/day03.ts";
import { readInput } from "./utils/input.ts";

async function main() {
  const day = 3;
  const input = await readInput(day, false);

  console.log(`Day ${day} - Part 1:`, day03.part1(input));
  console.log(`Day ${day} - Part 2:`, day03.part2(input));
}

if (import.meta.main) {
  main();
}
