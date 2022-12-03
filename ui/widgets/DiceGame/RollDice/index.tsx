import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Dice from 'react-dice-roll';
import { Typography } from '../../../atoms/Typography';
import { DiceViewIcon } from '../../../svgs';

import { DiceContainer, DiceRoll } from './index.styled';
import { stat } from 'fs';
import { RootState } from '../../../../store/store';

const RollDice = ({
	spin,
	setResult
}: {
	setResult: (arg: string) => void;
	spin: boolean;
}): JSX.Element => {
	

	const result = useSelector((state:RootState) => state.result.result )
	const faces = [
		'https://svgshare.com/i/oZP.svg',
		'https://svgshare.com/i/oZj.svg',
		'https://svgshare.com/i/oYw.svg',
		'https://svgshare.com/i/oZv.svg',
		'https://svgshare.com/i/oZa.svg',
		'https://svgshare.com/i/oZb.svg'
	];

	const dice : MutableRefObject<null> | any= useRef(null);
	const dice2 : MutableRefObject<null> | any = useRef(null);
	// console.log();
	const rollDice = () => {
       
		if (dice && dice2) {
			dice.current?.rollDice();
			dice2.current?.rollDice();
		}
	};
	useEffect(() => {
		if(spin) {
			const res = Number(result.randomWord1) + Number(result.randomWord2);
			// console.log('res', res);
			setResult(res.toString());
		}
	}, [spin]);

	useEffect(() => {
		if (spin) {
			rollDice();
		}
	}, [spin]);

	useEffect(() => {
		console.log(result, 'result')
	})
	
	return (
		<DiceContainer>
			{!spin ? (
				<>
					<DiceViewIcon />
					<Typography variant="p">Roll Dice</Typography>
				</>
			) : (
				<DiceRoll>
					<Dice
						ref={dice}
						rollingTime={4000}
						size={100}
						cheatValue={result.randomWord1}
						// onRoll={(diceResult) => setDiceResult(diceResult)}
						faces={faces}
					/>
					<Dice
						ref={dice2}
						size={100}
						rollingTime={4000}
						cheatValue={result.randomWord2}
						// defaultValue={dice2Result}
						// onRoll={(dice2Result) => setDice2Result(dice2Result)}
						faces={faces}
					/>
				</DiceRoll>
			)}
		</DiceContainer>
	);
};

export default RollDice;
