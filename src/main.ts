import * as day01 from "@/days/day01.ts";
import {readInput} from "./utils/input.ts";

async function main() {
  const day = 1;
  const input = await readInput(day, false);

  console.log(`Day ${day} - Part 1:`, day01.part1(input));
  console.log(`Day ${day} - Part 2:`, day01.part2(input));
}

if (import.meta.main) {
  main();
}
