module.exports = function getZerosCount(number) {
  // your implementation
  var countOfPowerOf5Elements = 0,
    divider = 1,
    result = 0;
  do {
    divider *= 5;
    result += countOfPowerOf5Elements = Math.floor(number / divider);
  } while (countOfPowerOf5Elements != 0);
  return result;
}