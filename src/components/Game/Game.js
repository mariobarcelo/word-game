import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Banner({ gameStatus, numOfGuesses, answer }) {
	if (gameStatus === 'won') {
		return (
			<div className='happy banner'>
				<p>
					<strong>Congratulations!</strong> Got it in{' '}
					<strong>
						{numOfGuesses === 1
							? '1 guess'
							: `${numOfGuesses} guesses`}
					</strong>
					.
				</p>
			</div>
		);
	}
	if (gameStatus === 'lost') {
		return (
			<div className='sad banner'>
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			</div>
		);
	}
}

function Game() {
	const [guessList, setGuessList] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('running');

	function handleAddToGuessList(word) {
		const nextGuess = word;

		const nextGuessList = [...guessList, nextGuess];
		setGuessList(nextGuessList);

		if (nextGuess === answer) {
			setGameStatus('won');
		} else if (nextGuessList.length === NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	}

	return (
		<>
			<GuessList guessList={guessList} answer={answer} />
			<GuessInput
				gameStatus={gameStatus}
				handleAddToGuessList={handleAddToGuessList}
			/>
			<Banner
				gameStatus={gameStatus}
				numOfGuesses={guessList.length}
				answer={answer}
			/>
		</>
	);
}

export default Game;
