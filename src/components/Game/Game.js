import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessList, setGuessList] = React.useState([]);

	function handleAddToGuessList(word) {
		const nextGuess = word;

		const nextGuessList = [...guessList, nextGuess];
		setGuessList(nextGuessList);
	}

	return (
		<>
			<GuessList guessList={guessList} answer={answer} />
			<GuessInput handleAddToGuessList={handleAddToGuessList} />
		</>
	);
}

export default Game;
