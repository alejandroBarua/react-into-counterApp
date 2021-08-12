import { getData } from "../async-await";

describe('test async-await', () => {
	
	test('the async function should return my name', async() => {
		
		/* getData()
		.then(name => {

			expect(name).toBe("Alejandro Barua");
			done();
		}) */

		const { name } = await getData();
		
		expect(name).toBe("Alejandro Barua");

	})

	test('the async function should return url https', async() => {
		
		const { url } = await getData();
		
		expect(url.includes('https')).toBe(true);

	})
	
})
