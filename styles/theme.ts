/* stylelint-disable */
import {
	ColorType,
	css,
	DefaultTheme,
	GradientType,
	MediaQueryType,
	TransitionType
} from 'styled-components';

// These values will be used to generate mobile - first(i.e. min - width) media queries, which can then be used to apply responsive styles.
const breakpoints = ['40em', '52em', '82em'];

const queries = {
	small: `@media screen and (min-width: ${breakpoints[0]})`,
	medium: `@media screen and (min-width: ${breakpoints[1]})`,
	large: `@media screen and (min-width: ${breakpoints[2]})`
};

// Generate media query utils used in components. props.theme.[small|medium|large]
/*
const Button = styled.button`
  color: organge;
  ${({ theme: { media: { small } } }) => small`
     color: red;
  `}
`;
*/
export const media: MediaQueryType = Object.keys(queries).reduce((acc, label)   => {
	acc[label] = (...args: [TemplateStringsArray])=> css`
		${queries[label]} {
			${css(...args)};
		}
	`;
	return acc;
}, {} as MediaQueryType | any);

/**
 * CSS Media Query Helper Utils
 * @param breakpoint 
 * @param vertical 
 * 
 * Usage:
 * 
  const Box = styled.div`
    background: black;

    ${({ theme: { breakpoints, media } }) => media.down(breakpoints[1])`
      background: red;
  `}

    ${({ theme: { breakpoints, media } }) => media.between(breakpoints[1], breakpoints[2])`
      background: green;
    `}

    ${({ theme: { breakpoints, media } }) => media.up(breakpoints[2])`
      background: blue;
    `}
  `;
 */
const up = (breakpoint: string, vertical = false) => (...args: [TemplateStringsArray]) => css`
	@media screen and (min-${vertical ? 'height' : 'width'}: ${breakpoint}) {
		${css(...args)};
	}
`;
const down = (breakpoint: string, vertical = false) => (...args: [TemplateStringsArray]) => css`
	@media screen and (max-${vertical ? 'height' : 'width'}: ${breakpoint}) {
		${css(...args)};
	}
`;
const between = (breakpointMin : any, breakpointMax : any, vertical = false) => (
	...args: [TemplateStringsArray]
) => css`
	@media screen and (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${vertical
			? 'height'
			: 'width'}: ${breakpointMin}) {
		${css(...args)};
	}
`;

media.up = up;
media.down = down;
media.between = between;

// a set of smooth corner radius values
const borderRadius = {
	none: '0',
	sm: '0.125rem',
	base: '0.25rem',
	md: '0.375rem',
	lg: '0.5rem',
	xl: '0.75rem',
	'2xl': '1rem',
	'3xl': '1.5rem',
	full: '9999px'
};

const colors: ColorType = {
	primary: '#ff9100', // colors.orange
	secondary: '#363e4b', // colors.brightGray

	// background
	nero: '#221f1f',

	white: '#ffffff',
	black: '#000000',
	orange: '#ff9100',
	green: '#9aca3c',
	darkCyan: '#009688',
	freeSpeechRed: '#DF0000',
	light: '#f5f5f5',

	/* blue */
	blue: '#0071bc',
	lightBlue: '#64b9e6',
	brightBlue: '#5E6C84',
	hoki: '#637ca5',
	rockBlue: '#a0b1ce',

	/* gray */
	gray: '#919191',
	lightGray: '#303030',
	abbey: '#4a4d51',
	merlin: '#3e3c39', // text color
	cottenSeed: '#b9b8b7',
	doveGray: '#737373',
	geyser: '#d5dce6',
	lightGeyser: '#F2F5F8',
	godgray: '#0f0f0f', // text color
	mercury: '#e6e6e6',
	brightGray: '#363e4b', // text color
	shuttleGray: '#5e6d84', // text color
	darkGray: '#444753',

	// with opacity
	grayish: '#77777777',
	whitish: '#ffffff33',

	//status
	online: '#86BB71',
	offline: '#E38968',
	me: '#94C2ED'
} as ColorType;

const gradients: GradientType = {
	blackToTransparent: `linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0) 100%)`
} as GradientType;

/**
 * Font Families
 */
const fonts = {
	primary: `'Roboto', sans-serif`,
	Inter: `'Inter', sans-serif`,
	Chopsic: `Chopsic`
};

/**
 * Font Sizes
 */
const fontSizes = {
	xs: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px',
	'2xl': '24px',
	'3xl': '28px',
	'4xl': '36px',
	'4.5xl': '42px',
	'5xl': '48px',
	'6xl': '64px'
};

/*
Font Weights:
- Thin            100
- Extra Light     200
- Light           300
- Regular         400
- Medium          500
- Semi-Bold       600
- Bold            700
- Extra-Bold      800
- Black           900
*/
const fontWeights = {
	thin: 100,
	extraLight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
	extraBold: 800,
	black: 900
};

const lettingSpacings = {
	tighter: '-0.05em',
	tight: '-0.025em',
	normal: '0',
	wide: '0.025em',
	wider: '0.05em',
	widest: '0.1em'
};

const lineHeights = {
	normal: 'normal',
	none: '1',
	shorter: '1.25',
	short: '1.375',
	base: '1.5',
	tall: '1.625',
	taller: '2'
};

const shadows = [
	'3px 3px 10px 0 rgba(0,0,0,0.3)',
	'0px 3px 6px rgba(0,0,0,0.29)',
	'0px 15px 10px -5px rgba(0,0,0,0.29)',
	'inset 0px 2px 4px rgba(0,0,0,0.8)',
	//used in ProductCardBig
	'4px 4px 25px -2px rgba(0, 0, 0, 0.3)'
];

// The space key allows you to customize the global spacing and sizing scale for your project.
// By default these spacing value can be referenced by the padding, margin, and top, left, right, bottom styles.
// The values are proportional, so 1 spacing unit is equal to 0.25rem, which translates to 4px by default in common browsers.
// For example:
//   If you need a spacing of 40px, divide it by 4. That'll give you 10. Then use it in your component.
const space = {
	px: '1px',
	0: '0',
	0.5: '0.125rem',
	1: '0.25rem',
	1.5: '0.375rem',
	2: '0.5rem',
	2.5: '0.625rem',
	3: '0.75rem',
	3.5: '0.875rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.5rem',
	7: '1.75rem',
	8: '2rem',
	9: '2.25rem',
	10: '2.5rem',
	11: '2.75rem',
	12: '3rem',
	14: '3.5rem',
	16: '4rem',
	20: '5rem',
	24: '6rem',
	28: '7rem',
	32: '8rem',
	36: '9rem',
	40: '10rem',
	44: '11rem',
	48: '12rem',
	52: '13rem',
	56: '14rem',
	60: '15rem',
	64: '16rem',
	72: '18rem',
	80: '20rem',
	96: '24rem'
};

// The sizes key allows you to customize the global sizing of components you build.
// By default these sizes value can be referenced by the width, height, and maxWidth, minWidth, maxHeight, minHeight styles.
const sizes = {
	...space,
	full: '100%',
	'3xs': '14rem',
	'2xs': '16rem',
	xs: '20rem',
	sm: '24rem',
	md: '28rem',
	lg: '32rem',
	xl: '36rem',
	'2xl': '42rem',
	'3xl': '48rem',
	'4xl': '56rem',
	'5xl': '64rem',
	'6xl': '72rem'
};

// A set of z-indeces out of the box to help control the stacking order of components.
const zIndices = {
	hide: -1,
	auto: 'auto',
	base: 0,
	docked: 10,
	dropdown: 1000,
	sticky: 1100,
	banner: 1200,
	overlay: 1300,
	modal: 1400,
	popover: 1500,
	skipLink: 1600,
	toast: 1700,
	tooltip: 1800
};

const transitions: TransitionType = {
	easing: {
		easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
		easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
		easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
		sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
	},
	duration: {
		shortest: 150,
		shorter: 200,
		short: 250,
		standard: 300,
		complex: 375,
		enteringScreen: 225,
		leavingScreen: 195
	}
};

export const theme: DefaultTheme = {
	media,
	breakpoints,
	borderRadius,
	colors,
	gradients,
	fonts,
	fontSizes,
	fontWeights,
	lettingSpacings,
	lineHeights,
	shadows,
	space,
	sizes,
	zIndices,
	transitions
};
