// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

import { NextPage } from 'next';
import React from 'react';
import Coins from '../ui/widgets/Coins';
import { mockData_CoinsProps } from '../ui/widgets/Coins/MOCK_DATA';
import Layout from '../ui/widgets/Layout';

const Coin: NextPage = (): JSX.Element => {
	return (
		<Layout>
			<Coins {...mockData_CoinsProps} />
		</Layout>
	);
};

export default Coin;