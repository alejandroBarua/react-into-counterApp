import { getHeroeByIdAsync } from "../async";
import { heroes } from '../heroes'

describe('test async function', () => {
	
	test('the function must return a hero', (done) => {
		
		const id = 1;

		getHeroeByIdAsync(id)
			.then(heroe => {
				expect(heroe).toEqual(heroes[id-1]);
				done();
			})
		
	})

	
	test('if the hero does not exist, it must return an error', (done) => {
		
		const id = 10

		getHeroeByIdAsync(id)
			.catch(err => {
				expect(err).toBe('no hero found');
				done();
			})
		
	})

})
