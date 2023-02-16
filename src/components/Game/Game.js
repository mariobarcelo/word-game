import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

const answer = sample(WORDS);
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [isGameOver, setIsGameOver] = React.useState(false);
	const [isCorrectGuess, setIsCorrectGuess] =
		React.useState(undefined);

	function handleSubmitGuess(tentativeGuess) {
		let nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);

		if (tentativeGuess.toUpperCase() === answer) {
			setIsGameOver(true);
			setIsCorrectGuess(true);
			return;
		}

		if (nextGuesses.length === 6) {
			setIsGameOver(true);
			setIsCorrectGuess(false);
		}
	}

	return (
		<>
			<GuessResults
				isGameOver={isGameOver}
				guesses={guesses}
				answer={answer}
			/>

			<GuessInput
				isGameOver={isGameOver}
				handleSubmitGuess={handleSubmitGuess}
			/>

			{isGameOver && (
				<GameOverBanner
					answer={answer}
					isCorrectGuess={isCorrectGuess}
					guesses={guesses}
				/>
			)}
		</>
	);
}

export default Game;
