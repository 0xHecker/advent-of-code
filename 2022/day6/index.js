let fs = require('fs');

let d = fs.readFileSync('./input.txt', 'utf-8').split('');

/*
bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 5
nppdvjthqldpwncqszvftbrmjlhg: first marker after character 6
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 11

*/

function solve(k) {
	return (
		d
			.map((_, i) => d.slice(i, i + k))
			.findIndex((a) => new Set(a).size == a.length) + k
	);
}

console.log(solve(4));
console.log(solve(14));
