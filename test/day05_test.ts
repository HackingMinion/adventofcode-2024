import { part1, part2 } from "@/days/day05.ts";
import { testDay } from "@/utils/test.ts";
import { readInput } from "../src/utils/input.ts";

const day = 5;
const exampleInput = await readInput(day, true);
const expectedPart1 = 143;
const expectedPart2 = 1;

testDay(
  day,
  { part1, part2 },
  exampleInput,
  expectedPart1,
  expectedPart2,
);
