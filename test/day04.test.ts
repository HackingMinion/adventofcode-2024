import { part1, part2 } from "@/days/day04.ts";
import { testDay } from "@/utils/test.ts";
import { readInput } from "../src/utils/input.ts";

const day = 4;
const exampleInput = await readInput(day, true);
const expectedPart1 = 18;
const expectedPart2 = 9;

testDay(
  day,
  { part1, part2 },
  exampleInput,
  expectedPart1,
  expectedPart2,
);
