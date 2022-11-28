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
			 <div className='dropDownConnect__items'>
				<div className='dropDownConnect_item'>
					<div className='dropDownConnect_img'>
                      <img src="/assets/metamask.png" alt='metamask logo' />
					</div>
					<p>MetaMask</p>
				</div>
				<div className='dropDownConnect_item'>
					<div className='dropDownConnect_img'>
                      <img src="/assets/walletConnect.png" alt='metamask logo' />
					</div>
					<p>WalletConnect</p>
				</div>
			 </div>
			
			</div>
		
		</HeaderContainer>
	);
};

export default Header;
