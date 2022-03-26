const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);

solution();
function solution() {
    // Write your code
    console.log("강한친구 대한육군");
    console.log("강한친구 대한육군");
}