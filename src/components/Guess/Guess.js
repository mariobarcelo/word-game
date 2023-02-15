import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
	let checkedGuessArray = checkGuess(value, answer);

	return (
		<p className='guess'>
			{range(5).map((num) => {
				return (
					<span
						key={num}
						className={
							value ? `${checkedGuessArray[num].status} cell` : 'cell'
						}>
						{value ? value[num] : undefined}
					</span>
				);
			})}
		</p>
	);
}

export default Guess;
