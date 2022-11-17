import React from 'react';

import Layout from '.';

export default {
	title: 'Widgets/Layout',
	component: Layout
};

const Template = (args: JSX.IntrinsicAttributes & { children: React.ReactNode; }) => {
	return <Layout {...args} />;
};

export const Default : any = Template.bind({});
Default.args = {};
