import { part1, part2 } from "@/days/day02.ts";
import { testDay } from "@/utils/test.ts";
import { readInput } from "../src/utils/input.ts";

const day = 2;
const exampleInput = await readInput(day, true);
const expectedPart1 = 2;
const expectedPart2 = 4;

testDay(day, { part1, part2 }, exampleInput, expectedPart1, expectedPart2);
