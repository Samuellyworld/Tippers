// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing styled from styled-components
import styled from 'styled-components';

// flip  coins container styling
export const FlipCoinsContainer = styled.div`
	p {
		margin-top: 50px;
		font-family: ${({ theme }) => theme.fonts.Chopsic};
		color: white;
		font-weight: 400;
		font-size: 30px;
		line-height: 41px;
		text-align: center;
	}
	@media (max-width: 576.98px) {
		p {
			font-size: 20px;
			margin-top: 10px;
		}
		svg {
			width: 100%;
		}
	}
`;

// flip coin styling
export const FlipCoin = styled.div`
	@keyframes flipHeads {
		from {
			transform: rotateX(0);
		}
		to {
			transform: rotateX(540deg);
		}
	}
	@keyframes flipTails {
		from {
			transform: rotateX(0);
		}
		to {
			transform: rotateX(720deg);
		}
	}
`;

// coin styling
export const Coin = styled.div<{ coinResult: string }>`
	position: relative;
	margin: 0 auto;
	width: 200px;
	height: 200px;
	transition: -webkit-transform 1s ease-in;
	transform-style: preserve-3d;
	svg {
		height: 100%;
		width: 100%;
	}

	${({ coinResult }) =>
		coinResult === 'heads' &&
		`
		animation: flipHeads 0.4s ease-out forwards;
			animation-iteration-count: 13;
	`}

	${({ coinResult }) =>
		coinResult === 'tails' &&
		`
		animation: flipTails 0.4s ease-out forwards;
			animation-iteration-count: 13;
	`}
`;
// tails styling
export const Tails = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	backface-visibility: hidden;
	top: 0;
	left: 0;
`;

// heads stylings
export const Heads = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	backface-visibility: hidden;
	top: 0;
	left: 0;
	transform: rotateX(-180deg);
`;
