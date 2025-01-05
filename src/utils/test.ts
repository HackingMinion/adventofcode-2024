import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

export function testDay(
  day: number,
  solver: { part1: (input: string) => any; part2: (input: string) => any },
  exampleInput: string,
  expectedPart1: any,
  expectedPart2: any,
  exampleInputPart2: string | undefined = undefined,
) {
  Deno.test(`Day ${day} - Part 1`, async () => {
    const result = await solver.part1(exampleInput);
    assertEquals(result, expectedPart1);
  });

  Deno.test(`Day ${day} - Part 2`, async () => {
    const result = await solver.part2(exampleInputPart2 ?? exampleInput);
    assertEquals(result, expectedPart2);
  });
}
