let fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf-8');

let arr = [
	['M', 'J', 'C', 'B', 'F', 'R', 'L', 'H'],
	['Z', 'C', 'D'],
	['H', 'J', 'F', 'C', 'N', 'G', 'W'],
	['P', 'J', 'D', 'M', 'T', 'S', 'B'],
	['N', 'C', 'D', 'R', 'J'],
	['W', 'L', 'D', 'Q', 'P', 'J', 'G', 'Z'],
	['P', 'G', 'T', 'F', 'R', 'H'],
	['L', 'V', 'M', 'G'],
	['C', 'B', 'G', 'P', 'F', 'Q', 'R', 'J'],
];

let nums = input.split('\n').map((t) => {
	return t
		.split(' ')
		.filter((s) => +s)
		.map((u) => +u);
});

// console.log(nums);

// problem 2
nums.map((t) => {
	let [a, b, c] = [t[0], t[1], t[2]];
	let tempArr = [];
	for (let i = 0; i < a; i++) {
		let ele = arr[b - 1].pop();
		tempArr.push(ele);
	}
	tempArr.reverse().map((s) => arr[c - 1].push(s));
});

arr.map((t) => console.log(t[t.length - 1]));
