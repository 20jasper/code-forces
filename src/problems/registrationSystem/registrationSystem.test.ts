import createLineGenerator from '@helpers/createLineGenerator';
import { main, queryDatabase } from './registrationSystem';

describe('registration system', () => {
	let database = new Map<string, number>();

	beforeEach(() => {
		database = new Map();
	});

	test('should return OK if name not in Database', () => {
		expect(queryDatabase(database, 'jim')).toBe('OK');
	});

	test('should append a number if already in database', () => {
		expect(queryDatabase(database, 'jim')).toBe('OK');
		expect(queryDatabase(database, 'jim')).toBe('jim1');
		expect(queryDatabase(database, 'jim')).toBe('jim2');
	});
});


test('should ignore first number', () => {
	const spy = jest.spyOn(console, 'log');

	main(createLineGenerator(['1', 'jim']));

	expect(spy).toHaveBeenCalledWith('OK');
});

