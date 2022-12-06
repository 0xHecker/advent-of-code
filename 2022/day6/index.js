let fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf-8').split('');
let input2 = fs.readFileSync('./input.txt', 'utf-8');

/*
bvwbjplbgvbhsrlpgdmjqwftvncz: first marker after character 5
nppdvjthqldpwncqszvftbrmjlhg: first marker after character 6
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: first marker after character 11
*/

function solve(k) {
	return (
		input
			.map((_, i) => input.slice(i, i + k))
			.findIndex((a) => new Set(a).size == a.length) + k
	);
}

console.log(solve(4));
console.log(solve(14));

// long method
function solve2(packetSize) {
	for (let i = 0; i < input2.length - packetSize; i++) {
		let tempArr = input2.substring(i, i + packetSize).slice('');
		let uniqueSet = new Set(tempArr);
		if (uniqueSet.size == packetSize) {
			console.log(i + packetSize);
			break;
		} else {
			uniqueSet.clear();
		}
	}
}

// solution 1
solve2(4);
// solution 2
solve2(14);
