import createLineGenerator from '@helpers/createLineGenerator';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', (chunk) => {
	input += chunk;
});

process.stdin.on('end', () => {
	const lines = input
		.trim()
		.split('\n')
		.map((string) => string.trim());
	const lineGenerator = createLineGenerator(lines);
	main(lineGenerator);
});

// End boilerplate
const canDivideEvenly = (weight: number): 'YES' | 'NO' => {
	if(weight === 2 || weight % 2 !== 0) {
		return 'NO';
	}
	return 'YES';
};

function main(readLine: Generator<string>): void {
	const weight = Number(readLine.next().value);
	console.log(canDivideEvenly(weight));
}

export { main, canDivideEvenly };
