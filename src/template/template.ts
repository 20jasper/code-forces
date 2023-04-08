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

const createLineGenerator = function*(lines: string[]): Generator<string> {
	for(const line of lines) {
		yield line;
	}
};

// End boilerplate

function main(readLine: Generator<string>): void {

}

export {};
