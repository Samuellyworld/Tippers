import React from 'react';

import { Typography } from './index.styled';

export default {
	title: 'Atoms/Typography',
	component: Typography
};

const Template = ({ children } :any) => {
	return (
		<>
			<Typography type="h1" variant="h1">
				{children}
			</Typography>

			<Typography type="h2" variant="h2">
				{children}
			</Typography>

			<Typography type="h3" variant="h3">
				{children}
			</Typography>

			<Typography type="h4" variant="h4">
				{children}
			</Typography>

			<Typography type="h5" variant="h5">
				{children}
			</Typography>

			<Typography type="body" variant="div">
				{children}
			</Typography>

			<Typography type="p" variant="p">
				{children}
			</Typography>

			<Typography variant="span">{children}</Typography>
		</>
	);
};

export const AllTypographies :any = Template.bind({});
AllTypographies.args = {
	children: `Lorem ipsum dolor sit`
};
