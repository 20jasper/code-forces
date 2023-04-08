import createLineGenerator from '@helpers/createLineGenerator';
import { main, convertWord } from './71A';

test('should ignore first line', () => {
	const spy = jest.spyOn(console, 'log');
	const lines = ['2', 'hey', 'coolword'];

	main(createLineGenerator(lines));

	expect(spy).toHaveBeenNthCalledWith(1, lines[1]);
	expect(spy).toHaveBeenNthCalledWith(2, lines[2]);
});

test('should not affect words 10 letters or less', () => {
	expect(convertWord('hi')).toBe('hi');
});

test('should replace middle of word with number of letters', () => {
	expect(convertWord('hhhhhhhhhhhhhhhhhhhi')).toBe('h18i');
});
