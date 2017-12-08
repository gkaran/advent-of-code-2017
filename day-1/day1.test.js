const {partOne, partTwo} = require('./day1');
const captcha = require('./day1.input');

describe('part one', () => {
  test('1122 -> 3', () => expect(partOne('1122')).toBe(3));
  test('1111 -> 4', () => expect(partOne('1111')).toBe(4));
  test('1234 -> 0', () => expect(partOne('1234')).toBe(0));
  test('91212129 -> 9', () => expect(partOne('91212129')).toBe(9));
  test('captcha -> 1097', () => expect(partOne(captcha)).toBe(1097));
});

describe('part two', () => {
  test('1212 -> 6', () => expect(partTwo('1212')).toBe(6));
  test('1221 -> 0', () => expect(partTwo('1221')).toBe(0));
  test('123425 -> 4', () => expect(partTwo('123425')).toBe(4));
  test('123123 -> 12', () => expect(partTwo('123123')).toBe(12));
  test('12131415 -> 4', () => expect(partTwo('12131415')).toBe(4));
  test('captcha -> 1197', () => expect(partTwo(captcha)).toBe(1188));
});

