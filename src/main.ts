import * as day00 from "@/days/day00.ts";
import {readInput} from "./utils/input.ts";

async function main() {
  const day = 0;
  const input = await readInput(day, false);

  console.log(`Day ${day} - Part 1:`, day00.part1(input));
  console.log(`Day ${day} - Part 2:`, day00.part2(input));
}

if (import.meta.main) {
  main();
}
