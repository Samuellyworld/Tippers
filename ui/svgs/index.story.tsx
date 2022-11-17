import React, { Children } from 'react';
import styled from 'styled-components';

import { AngleDownIcon } from './AngleDownIcon';
import { Arrow } from './Arrow';
import { BagIcon } from './BagIcon';
import { CancelIcon } from './CancelIcon';
import { CartIcon } from './CartIcon';
import { CircleDownArrow } from './CircleDownArrow';
import { Clock } from './Clock';
import { CloseIcon } from './CloseIcon';
import { Coins } from './Coins';
import { DeleteIcon } from './DeleteIcon';
import { Dice } from './Dice';
import { Discover } from './Discover';
import { DocumentIcon } from './DocumentIcon';
import { Envelope } from './Envelope';
import { EyeClosed } from './EyeClosed';
import { EyeOpen } from './EyeOpen';
import { FilledStarIcon } from './FilledStarIcon';
import { FlagIcon } from './FlagIcon';
import { Flash } from './Flash';
import { ForwardIcon } from './ForwardIcon';
import { HeartIcon } from './HeartIcon';
import { HeartMeter } from './HeartMeter';
import { ImageIcon } from './ImageIcon';
import { InfoIcon } from './InfoIcon';
import { Like } from './Like';
import { LoadingIcon } from './LoadingIcon';
import { MagnifyingGlass } from './MagnifyingGlass';
import { MenuIcon } from './MenuIcon';
import { Message } from './Message';
import { MinusIcon } from './MinusIcon';
import { Mobile } from './Mobile';
import { Percent } from './Percent';
import { PlusIcon } from './PlusIcon';
import { RealStarIcon } from './RealStarIcon';
import { RefreshIcon } from './RefreshIcon';
import { Shield } from './Shield';
import { StarIcon } from './StarIcon';
import { Warning } from './Warning';
import { WheelIcon } from './WheelIcon';

//  [START] story utils
const Div = styled.div`
	text-align: center;
	display: flex;
	color: black;
	flex-wrap: wrap;

	.cell {
		padding: 4px;
		border: 1px solid gray;
		border-radius: 4px;
		margin: 0.25rem;
	}

	.cell > .icon-viewer {
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	& svg {
		fill: black;
		color: black;
		height: 24px;
		width: 24px;
	}
`;

const AllIcons = ({ children }) => (
	<Div>
		{Children.toArray(children).map((icon, index) => (
			<div key={index} className="cell">
				<div className="icon-viewer">{icon}</div>
				{/* 
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
          // @ts-ignore */}
				<div>{icon?.type?.displayName}</div>
			</div>
		))}
	</Div>
);
// [END] story utils

export default {
	title: 'Atoms/Svgs'
};

const Template = () => {
	return (
		<AllIcons>
			{/* Keep adding the components like below, it will showup on the storybook with its display name. */}
			<AngleDownIcon />
			<Arrow />
			<BagIcon />
			<CancelIcon />
			<CartIcon />
			<Clock />
			<CloseIcon />
			<DeleteIcon />
			<Discover />
			<DocumentIcon />
			<Envelope />
			<EyeClosed />
			<EyeOpen />
			<FilledStarIcon />
			<FlagIcon />
			<Flash />
			<ForwardIcon />
			<HeartIcon />
			<HeartMeter />
			<ImageIcon />
			<InfoIcon />
			<Like />
			<LoadingIcon />
			<MagnifyingGlass />
			<MenuIcon />
			<Message />
			<MinusIcon />
			<Mobile />
			<Percent />
			<PlusIcon />
			<RealStarIcon />
			<RefreshIcon />
			<Shield />
			<StarIcon />
			<Warning />
			<Dice />
			<Coins />
			<WheelIcon />
			<CircleDownArrow />
		</AllIcons>
	);
};

export const Icons = Template.bind({});
Icons.args = {};
