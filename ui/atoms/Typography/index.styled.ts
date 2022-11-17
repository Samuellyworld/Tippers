import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { variant } from 'styled-system';

enum VARIANT_BASED_TYPE {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	div = 'body',
	p = 'p',
	span = 'span',
	a = 'span'
}

export interface TypographyProps {
	children?: React.ReactNode;
	// variant defines the html tag
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'p' | 'span' | 'a';
	// type defines the styling
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'p' | 'span';
	align?: 'center' | 'left' | 'right';
	uppercase?: boolean;
	noMargin?: boolean;
	color?:
		| 'inherit'
		| keyof Pick<
				DefaultTheme['colors'],
				| 'white'
				| 'lightBlue'
				| 'gray'
				| 'cottenSeed'
				| 'merlin'
				| 'hoki'
				| 'shuttleGray'
				| 'freeSpeechRed'
		  >;
	size?: keyof Pick<
		DefaultTheme['fontSizes'],
		'xs' | 'sm' | '5xl' | 'lg' | 'md' | 'xl' | '2xl' | '4xl'
	>;
	font?: keyof Pick<DefaultTheme['fonts'], 'primary'>;

	// don't include extra-bold since Roboto doesn't have the font-weight of 800
	fontWeight?: keyof Pick<DefaultTheme['fontWeights'], 'bold' | 'black'>;

	italic?: boolean;
}

const Typography = styled.span.attrs<TypographyProps>(({ variant = 'span', type }) => ({
	as: variant,
	// assign type if available in props, else define based on variant
	type: type || VARIANT_BASED_TYPE[variant]
}))<TypographyProps>`
	/* variant based typography */
	${({ theme: { fonts, fontSizes, lineHeights, fontWeights } }) => css`
		${variant({
			prop: 'type',
			variants: {
				h1: {
					fontFamily: fonts.primary,
					fontSize: fontSizes['4xl'],
					lineHeight: lineHeights.base,
					fontWeight: fontWeights.bold
				},
				h2: {
					fontFamily: fonts.primary,
					fontSize: fontSizes['3xl'],
					lineHeight: lineHeights.base,
					fontWeight: fontWeights.bold
				},
				h3: {
					fontFamily: fonts.primary,
					fontSize: fontSizes['2xl'],
					lineHeight: lineHeights.base,
					fontWeight: fontWeights.semiBold
				},
				h4: {
					fontFamily: fonts.primary,
					fontSize: fontSizes['xl'],
					lineHeight: lineHeights.base,
					fontWeight: fontWeights.semiBold
				},
				h5: {
					fontFamily: fonts.primary,
					fontSize: fontSizes['lg'],
					lineHeight: lineHeights.base,
					fontWeight: fontWeights.semiBold
				},
				body: {
					fontFamily: fonts.primary,
					fontSize: fontSizes['md'],
					lineHeight: lineHeights.base,
					fontWeight: fontWeights.regular
				},
				p: {
					fontFamily: fonts.primary,
					fontSize: fontSizes['md'],
					lineHeight: lineHeights.base,
					fontWeight: fontWeights.regular
				},
				span: {
					fontFamily: fonts.primary,
					fontSize: fontSizes['md'],
					lineHeight: lineHeights.base,
					fontWeight: fontWeights.regular
				}
			}
		})}
	`}

	color: ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.merlin)};
	font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
	${({ noMargin }) => noMargin !== undefined && `margin: 0;`};
	${({ align }) => align && `text-align: ${align};`}
	${({ uppercase }) => uppercase && 'text-transform: uppercase;'}  
  ${({ font, theme }) => font && `font-family: ${theme.fonts[font]};`}
  ${({ size, theme }) => size && `font-size: ${theme.fontSizes[size]};`}
  ${({ fontWeight, theme }) => fontWeight && `font-weight: ${theme.fontWeights[fontWeight]};`}
`;

Typography.displayName = 'Typography';

export { Typography };
