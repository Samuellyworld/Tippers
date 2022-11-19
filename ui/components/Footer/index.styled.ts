// importing styled from styled-components
import styled from 'styled-components';

// foot container styles
export const FooterContainer = styled.div`
	text-align: center;
	margin: 5em auto 0 auto;
	gap: 2rem;
	width: 100vw;
`;

// social link styles
export const SocialLink = styled.a`
	margin: 0 0.5em;
	filter: brightness(150%);
	&:hover {
		opacity: 0.9;
	}
`;

// footer item
export const FooterItem = styled.p`
    font-family: ${({ theme }) => theme.fonts.Chopsic};
	color: #fff;
	margin: 10px   
`