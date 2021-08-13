import React from 'react';
//import { render } from '@testing-library/react';
import Component from '../Component';
import { shallow } from 'enzyme';

describe('tests <Component />', () => {
	
/* 	test('render title', () => {
		
		const title = "Hello World";
		const { getByText } = render(<Component title={title} />);

		expect(getByText(title)).toBeInTheDocument();
	}) */

	test('render title', () => {
		
		const title = "Hello World";
		const wrapper = shallow(<Component title={title} />);

		expect(wrapper).toMatchSnapshot();

	})

	test('render subtitle', () => {
		
		const title = "Hello World";
		const subtitle = "I am a subtitle";
		const wrapper = shallow(
			<Component 
				title={title} 
				subtitle={subtitle}
			/>);

		const textParagraph = wrapper.find('p').text(); // funciona como el querySelector('#id')

		expect(textParagraph).toBe(subtitle);

	})
})
