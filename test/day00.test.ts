import {part1, part2} from "@/days/day00.ts";
import {testDay} from "@/utils/test.ts";
import {readInput} from "../src/utils/input.ts";

const day = 0;
const exampleInput = await readInput(day, true);
const expectedPart1 = 10;
const expectedPart2 = 24;

testDay(day, { part1, part2 }, exampleInput, expectedPart1, expectedPart2);
