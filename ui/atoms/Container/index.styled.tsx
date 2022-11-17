import styled, { css, DefaultTheme } from 'styled-components';
import { variant } from 'styled-system';

interface ContainerProps {
	disableGutters?: boolean;
	maxWidth?: 'lg' | 'md' | 'sm' | false;
	backgroundColor?: keyof Pick<DefaultTheme['colors'], 'black' | 'white'>;
}

const paddedStyle = css`
	padding-left: 32px;
	padding-right: 32px;

	${({ theme }) => theme.media.down(theme.breakpoints[1])`
       padding-left: 24px;
        padding-right: 24px;
       `};

	${({ theme }) => theme.media.down(theme.breakpoints[0])`
       padding-left: 18px;
        padding-right: 18px;
       `};
`;

export const Container = styled.div<ContainerProps>`
	box-sizing: border-box;
	margin: 0 auto;
	width: 100%;

	${({ backgroundColor, theme }) =>
		backgroundColor && `background-color: ${theme.colors[backgroundColor]}`};
	${({ disableGutters }) => disableGutters !== true && paddedStyle};

	${({ theme }) => css`
		${variant({
			prop: 'maxWidth',
			variants: {
				lg: {
					maxWidth: theme.breakpoints[2]
				},
				md: {
					maxWidth: theme.breakpoints[1]
				},
				sm: {
					maxWidth: theme.breakpoints[0]
				},
				false: {
					maxWidth: 'none'
				}
			}
		})}
	`};
`;
