// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant modules and component
import GameLayout from '../GameLayout';
import RollDice from './RollDice';

//  dice types
export interface DiceProps {
	stakes: string[];
	items: string[];
	currencies: string[];
	connected: boolean;
}

// JSX Component
const DiceGame = (props: DiceProps): JSX.Element => {
	const { connected, currencies, stakes, items } = props;
	return (
		<GameLayout
			stakes={stakes}
			items={items}
			connected={connected}
			currencies={currencies}
			component={RollDice}
			game="dice"
		/>
	);
};

export default DiceGame;
