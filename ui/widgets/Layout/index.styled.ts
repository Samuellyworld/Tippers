// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import styled from 'styled-components';

// importing container from built inputs;
import { Container } from '../../atoms/Container';

// layout wrapper
export const LayoutWrapper = styled(Container)`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	// background-image: url('/assets/pageBG.svg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	padding: 2em;
`;

// header wrapper
export const HeaderWrapper = styled.header``;

// main style component
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

// footer style
export const FooterWrapper = styled.footer`
	flex-shrink: none;
`;
