// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from 'react';
import Homepage from '.';

export default {
	title: 'Widgets/Homepage',
	component: Homepage
};

const Template = (args: JSX.IntrinsicAttributes) => {
	return <Homepage {...args} />;
};

export const Default: any= Template.bind({});
Default.args = {};
