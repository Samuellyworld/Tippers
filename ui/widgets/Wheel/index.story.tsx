// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant modules
import React from 'react';

// importing components
import Wheels, { WheelProps } from '.';

export default {
	title: 'Widgets/Wheels',
	component: Wheels
};

// Template
const Template = (args: JSX.IntrinsicAttributes & WheelProps) => {
	return <Wheels {...args} />;
};

// Default
export const Default:any = Template.bind({});
Default.args = {};
