import {part1, part2} from "@/days/day01.ts";
import {testDay} from "@/utils/test.ts";
import {readInput} from "../src/utils/input.ts";

const day = 1;
const exampleInput = await readInput(day, true);
const expectedPart1 = 11;
const expectedPart2 = 31;

testDay(day, { part1, part2 }, exampleInput, expectedPart1, expectedPart2);
