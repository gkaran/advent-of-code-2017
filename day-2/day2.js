function partOne (input) {
  return parseRows(input)
    .map(row => Math.max(...row) - Math.min(...row))
    .reduce((a, b) => a + b, 0);
}

function partTwo (input) {
  return parseRows(input)
    .map(row => row.map((value, index) => {
      const pairs = [];
      for (let i = index + 1; i < row.length; i++) {
        pairs.push([value, row[i]]);
      }
      return pairs;
    }).reduce((a, b) => a.concat(b), []))
    .map(rowPairs => rowPairs.filter(pair => Math.max(...pair) % Math.min(...pair) === 0))
    .map(rowPairs => rowPairs.map(pair => Math.max(...pair) / Math.min(...pair)).reduce((a, b) => a + b, 0))
    .reduce((a, b) => a + b, 0);
}

function parseRows (input) {
  return input.split(/[\r\n]+/g)
    .map(row => row.trim().split(/\s+/).map(i => parseInt(i, 10)));
}

module.exports = { partOne, partTwo };