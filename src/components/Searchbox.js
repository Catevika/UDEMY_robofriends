import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
	// console.log('Searchbox');
	return (
		<div className='pa2'>
			<input
				aria-label='Search Robots'
				className='pa3 ba b--green bg-lightest-blue'
				type='searchbar'
				placeholder='Search robots'
				onChange={searchChange}
			/>
		</div>
	);
};

export default Searchbox;
