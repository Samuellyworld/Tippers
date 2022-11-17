import { MouseEvent } from 'react';

import { HTMLIconWrapper } from './index.styled';

export interface HTMLIconProps {
	children: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	size?: string;
	color?: string;
	hoverColor?: string;
	noPointer?: boolean;
	onClick?: (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => void;
}

export const HTMLIcon = ({
	children,
	size = '1.5rem',
	color = 'inherit',
	hoverColor = color,
	onClick = () => '',
	top,
	right,
	bottom,
	left,
	noPointer
}: HTMLIconProps): JSX.Element => {
	return (
		<HTMLIconWrapper
			onClick={onClick}
			htmlIcon={children}
			size={size}
			color={color}
			hoverColor={hoverColor}
			top={top}
			right={right}
			left={left}
			bottom={bottom}
			noPointer={noPointer}
		/>
	);
};
