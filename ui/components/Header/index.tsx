// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing  stylings from styled component
import { ConnectButton, HeaderContainer, SVGLogo, TextLogo, connectButtonDropdown } from './index.styled';
import { AngleDownIcon } from '../../svgs';

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
            <div className='dropdown'>
			 <ConnectButton>
				Connect Wallet 
			  <AngleDownIcon size='20' />
			</ConnectButton>
			
			</div>
		
		</HeaderContainer>
	);
};

export default Header;
