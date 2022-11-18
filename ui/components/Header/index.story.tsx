// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from 'react';

// importing component
import Header, { HeaderProps } from '.';
// importing mock data
import { mockData_HeaderProps } from './MOCK_DATA';

// 
export default {
	title: 'Components/Header',
	component: Header
};
// template
const Template = (args: JSX.IntrinsicAttributes & HeaderProps | any) => {
	return <Header {...args} />;
};
// default
export const Default: any = Template.bind({});
Default.args = {
	...mockData_HeaderProps
};
