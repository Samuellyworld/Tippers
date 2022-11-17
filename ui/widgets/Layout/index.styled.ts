import styled from 'styled-components';
import { Container } from '../../atoms/Container';

export const LayoutWrapper = styled(Container)`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	background-image: url('/assets/pageBG.svg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	padding: 2em;
`;

export const HeaderWrapper = styled.header``;

export const Main = styled.div`
	flex: 1 0 auto;
	/* margin: auto; */
	margin-top: 4em;
	/* trying to avoid "%" based container width in order to have a pixel perfect left/right spacing. Use padding/margin if need less width. */
	/* width: 95%; */
	@media (max-width: 576.98px) {
		margin-top: 5em;
	}
`;

export const FooterWrapper = styled.footer`
	flex-shrink: none;
`;
