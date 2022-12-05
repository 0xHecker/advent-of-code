const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf-8');

let halfedArray = input
	.split('\n')
	.map((t) => [t.slice(0, t.length / 2), t.slice(t.length / 2, t.length)]);
// console.log(halfedArray);

const alphabetMap = new Map();
let smallChar = 'a';
let bigChar = 'A';
for (let i = 0; i < 26; i++) {
	let char = String.fromCharCode(smallChar.charCodeAt() + i);
	alphabetMap.set(char, i + 1);
}

for (let i = 26; i < 52; i++) {
	let char = String.fromCharCode(bigChar.charCodeAt() + i - 26);
	alphabetMap.set(char, i + 1);
}

let priority = 0;

halfedArray.map((t) => {
	let setGo = new Set();
	let arr = [];
	t[0].split('').map((first) => setGo.add(first));
	t[1].split('').map((second) => {
		if (setGo.has(second) && !arr.includes(second)) {
			priority += alphabetMap.get(second);
			arr.push(second);
		}
	});
	arr.length = 0;
	setGo.clear();
});

console.log(priority);
