import styled from 'styled-components';

interface HTMLIconWrapperProps {
	htmlIcon: string;
	color: string;
	size: string;
	hoverColor?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	noPointer?: boolean;
}

export const HTMLIconWrapper = styled.span<HTMLIconWrapperProps>`
	cursor: ${({ noPointer }) => (noPointer ? 'default' : 'pointer')};
	line-height: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: ${({ size }) => size};
	width: ${({ size }) => size};
	font-size: ${({ size }) => size};
	color: ${({ color }) => color};

	&:hover {
		color: ${({ hoverColor }) => hoverColor};
	}

	&:before {
		content: ${({ htmlIcon }) => `"${htmlIcon}"`};
		position: relative;
		top: ${({ top }) => top};
		right: ${({ right }) => right};
		bottom: ${({ bottom }) => bottom};
		left: ${({ left }) => left};
	}
`;
