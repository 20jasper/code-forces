const createLineGenerator = function*(lines: string[]): Generator<string> {
	for(const line of lines) {
		yield line;
	}
};

export default createLineGenerator;
