// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant modules
import { NextPage } from 'next';
import React from 'react';

// importing components and mock data passed as props
import Coins from '../../ui/widgets/Coins';
import { mockData_CoinsProps } from '../../ui/widgets/Coins/MOCK_DATA';
import Layout from '../../ui/widgets/Layout';

const Coin: NextPage = (): JSX.Element => {
	return (
		<Layout background={true}>
			<Coins {...mockData_CoinsProps} />
		</Layout>
	);
};

export default Coin;