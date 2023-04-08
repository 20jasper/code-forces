import createLineGenerator from '../../helpers/createLineGenerator';

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
const convertWord = (word: string): string => {
	if(word.length <= 10) {
		return word;
	}

	return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
};

function main(readLine: Generator<string>): void {
	// throw out next num
	readLine.next();

	for(const word of readLine) {
		console.log(convertWord(word));
	}
}

export { main, convertWord };
