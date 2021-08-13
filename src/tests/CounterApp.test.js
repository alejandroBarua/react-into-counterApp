import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('tests <CounterApp />', () => {

	let wrapper = shallow(<CounterApp />); // lo inicializo para tener el auto-completado

	beforeEach(() => {
		wrapper = shallow(<CounterApp value={12} />);
	})

	test('render counterApp', () => {

		expect(wrapper).toMatchSnapshot();
	})

	test('the counter should start at value', () => {
		
		const value = 100;
		const wrapper = shallow(<CounterApp value={value} />);
		const counterText = wrapper.find('h2').text().trim(); // funciona como el querySelector('#id')

		expect(counterText).toBe(value.toString());
	})

	test('btn subtract counter', () => {

		//console.log(wrapper.find('button').at(0).html()); // show first button
		wrapper.find('button').at(0).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		
		expect(counterText).toBe('11');
	})

	test('btn reset counter', () => {

		//console.log(wrapper.find('button').at(0).html()); // show first button
		wrapper.find('button').at(1).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		
		expect(counterText).toBe('12');
	})

	test('btn add counter', () => {

		//console.log(wrapper.find('button').at(0).html()); // show first button
		wrapper.find('button').at(2).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		
		expect(counterText).toBe('13');
	})

})