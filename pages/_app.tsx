import './main.scss';

import { AppProps } from 'next/app';
import { MediaQueryProvider } from '../providers/MediaQueryProvider';
import { ModalProvider } from '../providers/ModalProvider'; // modal providal written in redux
// import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MediaQueryProvider>
					<ModalProvider>
						<Component {...pageProps} />
					</ModalProvider>
				</MediaQueryProvider>
			</ThemeProvider>
		</>
	);
}
