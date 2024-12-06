import * as day02 from "@/days/day02.ts";
import {readInput} from "./utils/input.ts";

async function main() {
  const day = 2;
  const input = await readInput(day, false);

  console.log(`Day ${day} - Part 1:`, day02.part1(input));
  console.log(`Day ${day} - Part 2:`, day02.part2(input));
}

if (import.meta.main) {
  main();
}
