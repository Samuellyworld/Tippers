
import { Discord, Twitter } from '../../svgs';

import { FooterContainer, SocialLink } from './index.styled';

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
