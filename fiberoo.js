const _ = require('underscore');

function fib() {
  const total = [0, 1];
  for (let i = 2; i < 10; i++) {
    total.push(total[i - 1] + total[i - 2]);
  }
  return total;
}

console.log(fib());

function numsToStrings(num) {
  return _.map(num, (obj) => `${obj}`);
}
console.log(numsToStrings(fib()));

function numEvenNums(nums) {
  return _.filter(nums, (obj) => ((obj % 2) === 0)).length;
}
console.log(numEvenNums(fib()));
