import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function GuessList({ guessList }) {
	console.log('GuessList', guessList);
	return (
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => {
				return <Guess key={index} guess={guessList[index]} />;
			})}
		</div>
	);
}

export default GuessList;
