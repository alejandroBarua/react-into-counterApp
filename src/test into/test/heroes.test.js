import { 
	getHeroeById, 
	getHeroesByOwner,
	heroes

} from "../heroes";


describe('test heroes function by id', () => {
	
	test('the same heroes must return', () => {

		for (let i = 0; i < heroes.length; i++) {
			const heroeData = heroes[i];
			const heroe = getHeroeById(i+1);

			expect(heroe).toEqual(heroeData);			
		}
	})

	test('must return undefined if the hero does not exist', () => {

		const heroe = getHeroeById(heroes.length+1);

		expect(heroe).toBe(undefined);

	})

})


describe('test heroes function by owner', () => {
	
	test('the same heroes must return', () => {

		const owner = 'DC';
		const dcHeroesData = heroes.filter(el => el.owner === owner);
		const dcHeroes = getHeroesByOwner(owner);

		expect(dcHeroes).toEqual(dcHeroesData);
	
	})

	test('the resulting array must be length 2', () => {

		expect(getHeroesByOwner('Marvel').length).toBe(2);
	
	})

})
