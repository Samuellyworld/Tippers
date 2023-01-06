// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing  styled module
import styled from 'styled-components';

export const HomepageContainer = styled.div``;

/// Top stylings
export const Top = styled.div`
	width: 75%;
	margin: auto;
	text-align: center;
	h3 {
		font-family: ${({ theme }) => theme.fonts.Inter};
		font-weight: 700;
		font-size: 18px;
		letter-spacing: 1.99em;
		text-transform: uppercase;
		color: #ffffff;
		margin-bottom: 28px;
	}
	h1 {
		font-family: ${({ theme }) => theme.fonts.Chopsic};
		font-weight: 400;
		font-size: 108px;
		text-align: center;
		color: #ffffff;
		/* margin-bottom: 0.5em; */
	}
	svg {
		margin: 2em 0;
		cursor: pointer;
	}
	@media (max-width: 768.98px) {
		width: 80%;
		margin-top: 2.5em;
		h1 {
			font-size: 80px;
		}
	}
	@media (max-width: 576.98px) {
		width: 100%;
		margin-top: 1em;
		svg {
			width : 1.5rem !important;
		}
		h3 {
			font-size: 10px;
		}
		h1 {
			font-size: 50px;
		}
	}
`;

/// bottom styling
export const Bottom = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-columns: 1fr 1.2fr 1fr;
	text-align: center;
	max-width: 1300px;
	margin: auto;
	/* margin-top: 3em; */
	@media (max-width: 768.98px) {
		display: block;
	}
`;

// game card styling
export const GameCard = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 19.3891px;
	cursor: pointer;
	p {
		color: white;
		font-style: normal;
		font-weight: 400;
		font-size: 20.284px;
		font-family: ${({ theme }) => theme.fonts.Chopsic};
		padding-top: 1em;
	}
	&:nth-of-type(1) {
		background: #fbdf40;
		margin-right: -50px;
		padding-right: 50px;
		margin-left: auto;
		p {
			color: #4a24aa;
		}
	}
	&:nth-of-type(odd) {
		width: 100%;
		height: 303.68px;
	}
	&:nth-of-type(2) {
		background: #ff7f40;
		z-index: 1000;
		width: 100%;
		height: 333.31px;
	}
	&:nth-of-type(3) {
		background: #64b5e4;
		margin-left: -50px;
		padding-left: 50px;
		margin-right: auto;
	}
	@media (max-width: 1024.98px) {
		p {
			font-size: 15px;
		}
		svg {
			width: 100px;
			height: 100px;
		}
		padding: 2em 0;
		&:nth-of-type(odd) {
			height: 220.68px;
		}
		&:nth-of-type(2) {
			height: 250.31px;
		}
	}
	@media (max-width: 768.98px) {
		margin-bottom: 1em;
		p {
			font-size: 30px;
			padding: 0;
		}
		svg {
			width: 150px;
			height: 150px;
		}
		&:nth-of-type(odd),
		&:nth-of-type(2) {
			height: 176px;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			padding: 0;
			margin-right: 0;
			margin-left: 0;
		}
	}
	@media (max-width: 768.98px) {
		margin-bottom: 1em;
		p {
			font-size: 18px;
			padding: 0;
		}
		svg {
			width: 100px;
			height: 100px;
		}
	}
`;
