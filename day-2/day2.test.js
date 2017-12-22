const { partOne, partTwo } = require('./day2');
const input = require('./day2.input');

describe('part one', () => {
  it('should solve day 2 part 1 example', () => {
    const exampleInput =
      `5 1 9 5
       7 5 3
       2 4 6 8`;
    expect(partOne(exampleInput)).toBe(18);
  });

  it('should solve for puzzle input', () => expect(partOne(input)).toBe(46402));
});

describe('part two', () => {
  it('should solve day 2 part 2 example', () => {
    const exampleInput =
      `5 9 2 8
       9 4 7 3
       3 8 6 5`;
    expect(partTwo(exampleInput)).toBe(9);
  });

  it('should solve for puzzle input', () => expect(partTwo(input)).toBe(265))
});