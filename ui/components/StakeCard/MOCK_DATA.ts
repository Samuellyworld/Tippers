// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing staked card types
import { StakeCardProps } from '.';

// mock stake data
export const mockData_StakeCardProps: StakeCardProps = {
	show: false,
	coin: 'matic',
	stake: '5',
	result: '2',
	stakes: ['1', '2', '5', '10', '20', '50'],
	setCoin: () => '',
	setStake: () => '',
	onSpin: () => '',
	again: () => '',
	currencies: ['matic'],
	game: 'wheel',
	connected: false,
	spin: false,
	payout: 0,
	setPayout: () => ''
};
