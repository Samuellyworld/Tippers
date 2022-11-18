// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing  stylings from styled component
import { ConnectButton, HeaderContainer, SVGLogo, TextLogo } from './index.styled';

//header props types
export interface HeaderProps {
	connect: () => void;
}

// JSX Component
const Header = (props: HeaderProps): JSX.Element => {
	const { connect } = props;
	return (
		<HeaderContainer>
			<TextLogo href="/">
			<img  style={{
				width: "3rem"
			}}
			 src="/assets/svg-logo.svg" alt="" />
			<img src="/assets/text-logo1.svg" alt="" />
			</TextLogo>
			<SVGLogo href="/">
				<img src="/assets/svg-logo.svg" alt="" />
			</SVGLogo>

			<ConnectButton>Connect Wallet</ConnectButton>
		</HeaderContainer>
	);
};

export default Header;
