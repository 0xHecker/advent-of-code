let fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf-8');

let arr = input.split('\n').map((t) => t.split(' '));

// A : rock    : 1
// B : paper   : 2
// C : siccors : 3

// X : rock
// Y : paper
// Z : siccors

// Wins
// CX AY BZ

let score = 0;

const obj = {
	X: 1,
	Y: 2,
	Z: 3,
	A: 1,
	B: 2,
	C: 3,
	win: 6,
	draw: 3,
	lost: 0,
};

const wins = {
	A: 'Y',
	B: 'Z',
	C: 'X',
};

const loose = {
	A: 'Z',
	B: 'X',
	C: 'Y',
};
const draw = {
	A: 'X',
	B: 'Y',
	C: 'Z',
};

arr.map((a) => {
	if (obj[a[0]] == obj[a[1]]) {
		score += obj[a[1]];
		score += obj.draw;
		return;
	}
	if (
		(a[0] === 'C' && a[1] === 'X') ||
		(a[0] === 'A' && a[1] === 'Y') ||
		(a[0] === 'B' && a[1] === 'Z')
	) {
		score += obj[a[1]];
		score += obj.win;
		return;
	} else {
		score += obj[a[1]];
		return;
	}
});

console.log(score);

score = 0;
// X : Lose, Y : Draw, Z : Win

arr.map((a) => {
	if (a[1] === 'X') {
		score += obj[loose[a[0]]];
		score += obj.lost;
		console.log(a[0], a[1], obj[a[1]] + obj.lost);
	}
	if (a[1] === 'Y') {
		score += obj[draw[a[0]]];
		score += obj.draw;
		console.log(a[0], a[1], obj[a[1]] + obj.draw);
	}
	if (a[1] === 'Z') {
		score += obj[wins[a[0]]];
		score += obj.win;
		console.log(a[0], a[1], obj[a[1]] + obj.win);
	}
});
console.log(score);
