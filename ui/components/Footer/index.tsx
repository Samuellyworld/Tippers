// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant icons svg
import { Discord, Twitter } from '../../svgs';

/// importing relevant styles
import { FooterContainer, SocialLink } from './index.styled';

// footer JSX 
const Footer = () => {
	return (
		<FooterContainer>
			<SocialLink href="/">
				<Discord />
			</SocialLink>
			<SocialLink href="/">
				<Twitter />
			</SocialLink>
		</FooterContainer>
	);
};

export default Footer;
