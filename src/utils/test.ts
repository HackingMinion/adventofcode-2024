import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

export function testDay(
  day: number,
  solver: { part1: (input: string) => any; part2: (input: string) => any },
  exampleInput: string,
  expectedPart1: any,
  expectedPart2: any,
) {
  Deno.test(`Day ${day} - Part 1`, () => {
    const result = solver.part1(exampleInput);
    assertEquals(result, expectedPart1);
  });

  Deno.test(`Day ${day} - Part 2`, () => {
    const result = solver.part2(exampleInput);
    assertEquals(result, expectedPart2);
  });
}
