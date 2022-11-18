// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import React from 'react';
import Layout from '.';

// importing 
export default {
	title: 'Widgets/Layout',
	component: Layout
};

const Template = (args: JSX.IntrinsicAttributes & { children: React.ReactNode; }) => {
	return <Layout {...args} />;
};

export const Default : any = Template.bind({});
Default.args = {};
