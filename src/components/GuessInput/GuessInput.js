import React from 'react';

function GuessInput({ handleSubmitGuess, isGameOver }) {
	const [tentativeGuess, setTentativeGuess] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		// if (guess.length !== 5) {
		// 	return;
		// }

		handleSubmitGuess(tentativeGuess);

		setTentativeGuess('');
	}

	return (
		<form
			className='guess-input-wrapper'
			onSubmit={(event) => {
				handleSubmit(event);
			}}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				required
				title='5 letter word'
				pattern='[a-zA-Z]{5}'
				minLength={5}
				maxLength={5}
				type='text'
				id='guess-input'
				value={tentativeGuess}
				onChange={(event) => {
					const nextGuess = event.target.value.toUpperCase();
					setTentativeGuess(nextGuess);
				}}
				disabled={isGameOver}></input>
		</form>
	);
}

export default GuessInput;
