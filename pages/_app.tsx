// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//importing relevant module
import '../styles/sass/main.scss'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store , Persistor} from '../store/store';
import { AppProps } from 'next/app';
import { MediaQueryProvider } from '../providers/MediaQueryProvider';
import { ModalProvider } from '../providers/ModalProvider'; // modal providal written in redux
// import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import AlertModal from '../providers/AlertModal';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={Persistor}>
				<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MediaQueryProvider>
					<ModalProvider>
						<Component {...pageProps} />
						<AlertModal/>
					</ModalProvider>
				</MediaQueryProvider>
			</ThemeProvider>
			</PersistGate>
			
		</Provider>
	);
}
