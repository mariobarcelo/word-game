import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
	console.log('individual guess', guess);

	return (
		<p className='guess'>
			{range(5).map((index) => (
				<span key={index} className='cell'>
					{guess === undefined ? '' : guess.word[index]}
				</span>
			))}
		</p>
	);
}

export default Guess;
