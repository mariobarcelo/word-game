import React from 'react';

function GuessInput({ handleAddToGuessList }) {
	const [inputValue, setInputValue] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		if (inputValue.length !== 5) return;

		setInputValue('');
		// console.log('Submitted: ', inputValue);

		handleAddToGuessList(inputValue);
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
				minLength={5}
				maxLength={5}
				id='guess-input'
				type='text'
				value={inputValue}
				onChange={(event) => {
					const uppercaseValue = event.target.value.toUpperCase();
					setInputValue(uppercaseValue);
					// console.log(uppercaseValue);
				}}
			/>
		</form>
	);
}

export default GuessInput;
