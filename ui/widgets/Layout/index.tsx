import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

// import WebFont from 'webfontloader';
import { FooterWrapper, HeaderWrapper, LayoutWrapper, Main } from './index.styled';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const connectWallet = () => {
		// Connect wallet function can be written here
		console.log('hello');
	};
	return (
		<LayoutWrapper>
			<HeaderWrapper>
				<Header connect={connectWallet} />
			</HeaderWrapper>
			<Main>{children}</Main>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</LayoutWrapper>
	);
};

export default Layout;
