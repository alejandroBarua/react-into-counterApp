import { toDouble, getUser } from "../demo";

describe('tests double fuction', () => {
	
	test('the function must return double a number', () => {
		
		expect(toDouble(2)).toBe(4);

	})

	test('the function returns a number', () => {
		
		expect(typeof toDouble(2)).toBe('number');

	})
	

	test('if I do not pass arguments, the function must return zero', () => {
		
		expect(toDouble()).toBe(0);

	})
	
})

describe('test object', () => {

	test('the function must return a valid object', () => {
		
		const user = {
			name: 'Alejandro',
			age: 25
		}
		
		// no se puede usar el metodo toBe para comparar objetos o arreglos
		expect(getUser('Alejandro', 25)).toEqual(user);

	})

})
