import { canDivideEvenly, main } from './watermelon';
import createLineGenerator from '@helpers/createLineGenerator';

test('should return no if weight is odd', () => {
	expect(canDivideEvenly(11)).toBe('NO');
});

test('should return yes if watermelon can be split into 2 even parts', () => {
	expect(canDivideEvenly(10)).toBe('YES');
});

test('should return no if weight is even, but cant be split into two even parts', () => {
	expect(canDivideEvenly(2)).toBe('NO');
});

test('should return yes if weight is 8', () => {
	expect(canDivideEvenly(8)).toBe('YES');
});

test('main should correctly parse input', () => {
	const spy = jest.spyOn(console, 'log');

	main(createLineGenerator(['8']));

	expect(spy).toHaveBeenCalledWith('YES');
});
