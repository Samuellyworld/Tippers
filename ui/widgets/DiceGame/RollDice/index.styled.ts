// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing styled from styled-components
import styled from 'styled-components';

// dice container stylings
export const DiceContainer = styled.div`
	text-align: center;
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
			width: 80%;
		}
	}
`;

// dice roll component
export const DiceRoll = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2em;
`;
