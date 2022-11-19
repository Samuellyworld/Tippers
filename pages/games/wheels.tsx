import { NextPage } from 'next';
import React from 'react';
import Layout from '../../ui/widgets/Layout';
import Wheel from '../../ui/widgets/Wheel';
import { mockData_WheelProps } from '../../ui/widgets/Wheel/MOCK_DATA';

const Wheels: NextPage = (): JSX.Element => {
	return (
		<Layout>
			<Wheel {...mockData_WheelProps} />
		</Layout>
	);
};

export default Wheels;