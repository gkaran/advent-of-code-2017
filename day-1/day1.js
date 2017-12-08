function partOne (input) {
  const digits = Array.from(input);
  if (digits.length > 2) {
    digits.push(digits[0]);
  }

  let result = 0;
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === digits[i - 1]) {
      result += +digits[i - 1];
    }
  }

  return result;
}

function partTwo (input) {
  const digits = Array.from(input);
  let result = 0;

  const offset = digits.length / 2;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digits[(i + offset) % digits.length]) {
      result += +digits[i];
    }
  }

  return result;
}

module.exports = { partOne, partTwo };