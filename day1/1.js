let fs = require('fs');

let data = fs.readFileSync('./input.txt', 'utf-8');

const withGapsArray = data.split('\n\n');

let bigArray = withGapsArray.map((elf) => elf.split('\n'));

const getElvesCalories = (bigArray) =>
	bigArray
		.map((elf) => elf.map((s) => +s).reduce((a, b) => a + b, 0))
		.sort((a, b) => b - a);

console.log(getElvesCalories(bigArray));

let k = 0;
bigArray[k] = [];

for (let i = 0; i < withGapsArray.length; i++) {
	if (withGapsArray[i] === '') {
		++k;
		bigArray[k] = [];
	} else {
		bigArray[k].push(withGapsArray[i]);
	}
}

let maxSum = 0;
let secondMaxSum = 0;
let thirdMaxSum = 0;

for (let i = 0; i < bigArray.length; i++) {
	let sum = 0;
	for (let j = 0; j < bigArray[i].length; j++) {
		sum += Number(bigArray[i][j]);
	}

	if (sum > maxSum) {
		maxSum = sum;
	}
}

console.log(maxSum);
console.log(secondMaxSum);
console.log(thirdMaxSum);
console.log(maxSum + secondMaxSum + thirdMaxSum);
