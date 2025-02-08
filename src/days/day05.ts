import { splitLines, splitToStrings } from "../utils/input.ts";

export function part1(input: string): number {
  const ruleInput = input.split("\r\n\r\n")[0]
  const updateInput = input.split("\r\n\r\n")[1]
  const rules = getRules(ruleInput);
  const updates = getUpdates(updateInput);

  // Get potentially incorrect rules for each update
  // Check if the index of first number of the these rules is before the current number index
  // which makes the rule incorrect by definition
  let count = 0;
  for (const update of updates) {
    if (isUpdateCorrect(update, rules)) {
      const middleNumber = update[Math.floor(update.length/2)];
      count += parseInt(middleNumber);
    }
  }

  return count;
}

export function part2(input: string): number {
  return 0;
}

const getRules = (input: string) => {
  const lines = splitToStrings(input);
  const rules: string[][] = [];

  for (const line of lines) {
    rules.push(line.split("|"));
  }
  return rules;
};

const getUpdates = (input: string) => {
  const lines = splitToStrings(input);
  const updates: string[][] = [];

  for (const line of lines) {
    updates.push(line.split(","));
  }
  return updates;
};

const isUpdateCorrect = (update: string[], rules: string[][]) => {
  for (const [numberIndex, number] of update.entries()) {
    const incorrectRules = getIncorrectRulesForNumber(number, rules);
    for (const incorrectRule of incorrectRules) {
      if(!isOrderOfNumbersCorrect(update, incorrectRule, numberIndex)) {
        return false;
      }
    }
  }

  return true;
}

const getIncorrectRulesForNumber = (number: string, rules: string[][]) => {
  return rules.filter((r) => {
    return r[1] === number;
  });
}

const isOrderOfNumbersCorrect = (update: string[], incorrectRule: string[], currentNumberIndex: number) => {
  const matchingIndex = update.findIndex((u) => u === incorrectRule[0]);
  if(matchingIndex === -1 || matchingIndex < currentNumberIndex) {
    return true;
  }

  return false;
}
