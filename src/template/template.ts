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

function main(readLine: Generator<string>): void {

}

export { main };
