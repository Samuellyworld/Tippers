import { ConnectButton, HeaderContainer, SVGLogo, TextLogo } from './index.styled';

export interface HeaderProps {
	connect: () => void;
}

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
