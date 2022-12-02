// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing modules and icons
import { useEffect, useState } from 'react';
import { Typography } from '../../../atoms/Typography';
import { CoinsViewIcon, HeadsIcon, TailsIcon } from '../../../svgs';

// importing styling from styled-component
import { Coin, FlipCoin, FlipCoinsContainer, Heads, Tails } from './index.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

// JSX Component with spin and result props
const FlipCoins = ({
	spin,
	setResult
}: {
	setResult: (arg: string) => void;
	spin: boolean;
}): JSX.Element => {
	// set result

	const result:boolean|null = useSelector((state:RootState) => state.result.didWin)
	// inital coin result state
	const [coinResult, setCoinResult] = useState('');
	// coin toss mathematics
	const coinToss = () => {
		console.log(result, 'coinresult')
		if (result) {
			setResult('heads');
			setCoinResult('heads');
		} else {
			setResult('tails');
			setCoinResult('tails');
		}
	};

	// 
	useEffect(() => {
		if (spin) {
			coinToss();
		}
	}, [spin]);

	useEffect(() => {
        result
		console.log(result, 'coinresult effect')
	},[result])

	// building block and logic
	return (
		<FlipCoinsContainer>
			{!spin ? (
				<>
					<CoinsViewIcon />
					<Typography variant="p">Coin toss</Typography>
				</>
			) : (
				<FlipCoin>
					<Coin coinResult={coinResult}>
						<Tails>
							<TailsIcon />
						</Tails>
						<Heads>
							<HeadsIcon />
						</Heads>
					</Coin>
				</FlipCoin>
			)}
		</FlipCoinsContainer>
	);
};

export default FlipCoins;
