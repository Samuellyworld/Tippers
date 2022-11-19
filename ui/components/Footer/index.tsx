// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant icons svg
// import { Discord, Twitter } from '../../svgs';

/// importing relevant styles
import { FooterContainer, SocialLink , FooterItem} from './index.styled';

// footer JSX  Component
const Footer = () => {
	return (
		<FooterContainer>
			<FooterItem>Sponsored by </FooterItem>
			<SocialLink href="/">
			 <img src='/assets/matic_logo.png' alt='polygon'/>
			</SocialLink>
			<SocialLink href="/">
			 <img src='/assets/xend_finance.png' alt='xend finance'/>
			</SocialLink>
			<SocialLink href='/'>
			  <img src='/assets/alchemy.png' alt='alchemy' style={{
				  width: "2rem"
			  }}/>
			</SocialLink>
		</FooterContainer>
	);
};

export default Footer;
