// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from 'react';

// importing component
import Header from '.';

// 
export default {
	title: 'Components/Header',
	component: Header
};
// template
const Template = (args: JSX.IntrinsicAttributes) => {
	return <Header {...args} />;
};
// default
export const Default: any = Template.bind({});
Default.args = {};
