//rafcp atajo super espectacular si instalamos react snippets
import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value = 0 }) => {

	const [ counter, setCounter] = useState(value);

	const counterAdd = () => setCounter(counter + 1);
	const counterSubtract = () => setCounter(counter - 1);
	const counterReset = () => setCounter(value)

	return (
		<>
			<h1>Counter App</h1>
			<h2> { counter } </h2>
			<button onClick = { counterAdd } >+1</button>
			<button onClick = { counterReset } >Reset</button>
			<button onClick = { counterSubtract } >-1</button>
		</>
	);
}

CounterApp.prototype = {
	value: PropTypes.number
}

export default CounterApp;