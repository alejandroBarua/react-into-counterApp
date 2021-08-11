import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ title = 'title', subtitle }) => {

	return (

		<> 
			<h1> { title } </h1>
			<p> { subtitle } </p>
		</>

	);
} 

Component.propTypes = {
	title: PropTypes.string.isRequired 
}

Component.defaultProps = {
	subtitle: 'This is My first React App'
}

export default Component; 