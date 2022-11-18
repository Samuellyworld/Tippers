// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant components
import GameLayout from '../GameLayout';
import FlipCoins from './FlipCoins';

// coins props typing
export interface CoinsProps {
	stakes: string[];
	items: string[];
	currencies: string[];
	connected: boolean;
}

// JSX Component
const Coins = (props: CoinsProps): JSX.Element => {
	const { connected, currencies, stakes, items } = props;
	return (
		<GameLayout
			stakes={stakes}
			items={items}
			connected={connected}
			currencies={currencies}
			component={FlipCoins}
			game="coins"
		/>
	);
};

export default Coins;
