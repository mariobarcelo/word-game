import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);

	function handleSubmitGuess(tentativeGuess) {
		const nextGuess = {
			value: tentativeGuess,
			id: `${tentativeGuess}-${Math.random()}`,
		};
		setGuesses([...guesses, nextGuess]);
	}
	return (
		<>
			<Guess
				guesses={guesses}
				numGuessesAllowed={NUM_OF_GUESSES_ALLOWED}
			/>
			<GuessResults guesses={guesses} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
		</>
	);
}

export default Game;
