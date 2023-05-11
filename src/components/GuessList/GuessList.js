import React from 'react';

function GuessList({ guessList }) {
	return (
		<div className='guess-results'>
			{guessList.map(({ word, id }) => {
				return (
					<p className='guess' key={id}>
						{word}
					</p>
				);
			})}
		</div>
	);
}

export default GuessList;
