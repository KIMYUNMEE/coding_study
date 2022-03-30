const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
var a = input[0];
var b = input[1];

var sum = 0;

for (let i = 1; i < 4; i++) {
  var value = Number(b.toString().substr(-i, 1)) * a;
  console.log(value);
  sum = sum + value * 10 ** (i - 1);
}

console.log(sum);