// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme as defaultTheme } from '../styles/theme';

interface RenderOptionsWithThemeIncluded extends Omit<RenderOptions, 'queries'> {
	theme: typeof defaultTheme;
}

const customRender = (
	ui: React.ReactElement,
	{ theme = defaultTheme, ...renderOptions }: RenderOptionsWithThemeIncluded
): ReturnType<typeof render> => {
	const Wrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
