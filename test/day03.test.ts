import { part1, part2 } from "@/days/day03.ts";
import { testDay } from "@/utils/test.ts";
import { readInput } from "../src/utils/input.ts";

const day = 3;
const exampleInput = await readInput(day, true);
const exampleInputPart2 = await readInput(day, true, true);
const expectedPart1 = 161;
const expectedPart2 = 48;

testDay(
  day,
  { part1, part2 },
  exampleInput,
  expectedPart1,
  expectedPart2,
  exampleInputPart2,
);
