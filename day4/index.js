let fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf-8');
let arr = input.split('\n').map((t) => t.split(/-|,/).map((a) => +a));
console.log(arr);

// first problem
let first = arr.filter(
	([a, b, c, d]) => ((a <= c) & (b >= d)) | ((a >= c) & (b <= d))
).length;
console.log(first);

// [a, b, c, d]
// 5a 20b 2c 10d
// 2a 10b 1c 20d
// 1 2 3 4 5 6 7 8 9 10

// second problem
let second = arr.filter(([a, b, c, d]) => a <= d && c <= b).length;
console.log(second);

// this also works
let second2 = arr.filter(([a, b, c, d]) => !((b < c) | (d < a))).length;
console.log(second2);
