import * as day05 from "@/days/day05.ts";
import { readInput } from "./utils/input.ts";

async function main() {
  const day = 5;
  const input = await readInput(day, false);

  console.log(`Day ${day} - Part 1:`, day05.part1(input));
  console.log(`Day ${day} - Part 2:`, day05.part2(input));
}

if (import.meta.main) {
  main();
}
