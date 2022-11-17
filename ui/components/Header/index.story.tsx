import React from 'react';

import Header, { HeaderProps } from '.';
import { mockData_HeaderProps } from './MOCK_DATA';

export default {
	title: 'Components/Header',
	component: Header
};

const Template = (args: JSX.IntrinsicAttributes & HeaderProps | any) => {
	return <Header {...args} />;
};

export const Default: any = Template.bind({});
Default.args = {
	...mockData_HeaderProps
};
