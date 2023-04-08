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
const queryDatabase = (database: Map<string, number>, name: string): 'OK' | string => {
	const queryCount = database.get(name) ?? 0;
	database.set(name, queryCount + 1);

	if(queryCount === 0) {
		return 'OK';
	}

	return `${name}${queryCount}`;
};

function main(readLine: Generator<string>): void {
	// throw out first num
	readLine.next();

	const database = new Map<string, number>();

	for(const name of readLine) {
		console.log(queryDatabase(database, name));
	}
}

export { main, queryDatabase };
