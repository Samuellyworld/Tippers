import React from 'react';

import Footer from '.';

export default {
	title: 'Components/Footer',
	component: Footer
};

const Template = (args: JSX.IntrinsicAttributes) => {
	return <Footer {...args} />;
};

export const Default :any = Template.bind({});
Default.args  = {};
