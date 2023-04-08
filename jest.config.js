/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^@helpers/(.*)': '<rootDir>/src/helpers/$1',
		'^@problems/(.*)': '<rootDir>/src/problems/$1'
	}
};
