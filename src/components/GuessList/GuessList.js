import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function GuessList({ guessList, answer }) {
	return (
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => {
				return (
					<Guess key={num} guess={guessList[num]} answer={answer} />
				);
			})}
		</div>
	);
}

export default GuessList;
