import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Dice from 'react-dice-roll';
import { Typography } from '../../../atoms/Typography';
import { DiceViewIcon } from '../../../svgs';

import { DiceContainer, DiceRoll } from './index.styled';

const RollDice = ({
	spin,
	setResult
}: {
	setResult: (arg: string) => void;
	spin: boolean;
}): JSX.Element => {
	// const [coinResult, setCoinResult] = useState('');
	const [diceResult, setDiceResult] : any= useState(null);
	const [dice2Result, setDice2Result] : any = useState(null);
	const faces = [
		'https://res.cloudinary.com/ademolamadelewi/image/upload/v1648393627/Group_145_5ba9c1ef9a.svg',
		'https://res.cloudinary.com/ademolamadelewi/image/upload/v1648393627/Group_144_eebb73e965.svg',
		'https://res.cloudinary.com/ademolamadelewi/image/upload/v1648393627/Group_142_6ce82c4eef.svg',
		'https://res.cloudinary.com/ademolamadelewi/image/upload/v1648393627/Group_143_d29c9f00ab.svg',
		'https://res.cloudinary.com/ademolamadelewi/image/upload/v1648346946/Group_142_02582f6d97.svg',
		'https://res.cloudinary.com/ademolamadelewi/image/upload/v1648346946/Group_143_00c8842579.svg'
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
		const res = Number(diceResult) + Number(dice2Result);
		// console.log('res', res);
		setResult(res.toString());
	}, [diceResult, dice2Result]);

	useEffect(() => {
		if (spin) {
			rollDice();
		}
	}, [spin]);
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
						rollingTime={10000}
						size={100}
						onRoll={(value) => setDiceResult(value)}
						faces={faces}
					/>
					<Dice
						ref={dice2}
						size={100}
						rollingTime={10000}
						onRoll={(value) => setDice2Result(value)}
						faces={faces}
					/>
				</DiceRoll>
			)}
		</DiceContainer>
	);
};

export default RollDice;
