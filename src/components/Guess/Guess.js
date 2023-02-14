import React from 'react';
import { range } from '../../utils';

function Guess({ guesses, numGuessesAllowed }) {
	console.log('numGuessesAllowed', numGuessesAllowed);
	console.log('guesses', guesses);
	console.log('guesses.length', guesses.length);
	console.log('guesses[0]', guesses[0]);
	console.log('guesses[1]', guesses[1]);

	const [guessesMade, setGuessesMade] = React.useState([]);

	return range(numGuessesAllowed).map((item, index) => {
		return guesses[index] !== undefined ? (
			guesses.length > numGuessesAllowed ? (
				console.log('f')
			) : (
				<>
					{setGuessesMade([...guessesMade, guesses])}
					<p key={index} className='guess'>
						{Array.from(guesses[index]['value']).map(
							(item, index) => {
								console.log('guesses', guesses);
								console.log('guesses[index]', guesses[index]);

								return (
									<span key={Math.random()} className='cell'>
										{item}
									</span>
								);
							}
						)}
					</p>
				</>
			)
		) : (
			<p key={index} className='guess'>
				{range(5).map((item, index) => {
					return <span className='cell'></span>;
				})}
			</p>
		);
	});
}

export default Guess;
