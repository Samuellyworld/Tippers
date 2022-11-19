// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant components
import GameLayout from '../GameLayout';
import SpinWheel from './SpinWheel';

// wheel props types
export interface WheelProps {
	stakes: string[];
	items: string[];
	currencies: string[];
	connected: boolean;
}

// JSX Component
const Wheel = (props: WheelProps): JSX.Element => {
	const { stakes, items, connected, currencies } = props;
	return (
		<GameLayout
			stakes={stakes}
			items={items}
			connected={connected}
			currencies={currencies}
			game="wheel"
			component={SpinWheel}
		/>
	);
};

export default Wheel;
