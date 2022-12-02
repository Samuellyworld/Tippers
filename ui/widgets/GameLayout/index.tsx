// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant modules, components and functions
import React, { useEffect, useRef, useState } from 'react';
import StakeCard from '../../components/StakeCard';
import { scrollToElement } from '../../../utils/scrollTo';

// importing stylings
import { FirstColumn, GameContainer, SecondColumn } from './index.styled';

// games proops typing
export interface GamesProps {
	stakes: string[];
	items: string[];
	currencies: string[];
	connected: boolean;
	component: React.ElementType;
	game: 'wheel' | 'dice' | 'coins';
}

// JSX Component
const GameLayout = (props: GamesProps): JSX.Element => {
	// initial value and set states
	const { stakes, items, connected, currencies, game, component: Component } = props;
	const [stake, setStake] = useState('');
	const [spin, setSpin] = useState(false);
	const [show, setShow] = useState(false);
	const [result, setResult] = useState('');
	const [coin, setCoin] = useState('matic');
	const [payout, setPayout]:any = useState(null);

	const gameRef:any = useRef(null);
	const resultRef:any = useRef(null);

	useEffect(() => {
		scrollToElement(resultRef);
		// payout function can be written here
		console.log(payout);
	}, [payout]);

	useEffect(() => {
		setCoin(currencies[0]);
	}, [currencies]);

	// set spin
	const onSpin = () => {
		setSpin(true);
		scrollToElement(gameRef);
		setTimeout(() => {
			setShow(true);
		}, 5000);
	};
	const again = () => {
		setSpin(false);
		setShow(false);
	};
	return (
		<>
			<div ref={resultRef}></div>
			<GameContainer>
				<FirstColumn>
					<Component spin={spin} setResult={setResult} items={items} />
				</FirstColumn>
				<SecondColumn>
					<StakeCard
						setStake={setStake}
						again={again}
						onSpin={onSpin}
						stakes={stakes}
						setCoin={setCoin}
						stake={stake}
						show={show}
						result={result}
						coin={coin}
						game={game}
						currencies={currencies}
						connected={connected}
						spin={spin}
						payout={payout}
						setPayout={setPayout}
					/>
				</SecondColumn>
			</GameContainer>
			<div ref={gameRef}></div>
		</>
	);
};

export default GameLayout;
