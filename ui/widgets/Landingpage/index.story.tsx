// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from 'react';
import Landingpage from '.';

export default {
	title: 'Widgets/Landingpage',
	component: Landingpage
};

const Template = (args: JSX.IntrinsicAttributes) => {
	return <Landingpage {...args} />;
};

export const Default: any= Template.bind({});
Default.args = {};
