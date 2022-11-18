// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing styled from styled-component
import styled from 'styled-components';

// game container styling
export const GameContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	max-width: 1400px;
	margin: auto;
	@media (max-width: 900.98px) {
		background: linear-gradient(200.87deg, #7320ab 5.64%, #4a24aa 86.2%);
		border-radius: 13.7715px;
		flex-direction: column-reverse;
		padding-bottom: 5em;
	}
`;
// both columns stylings
export const FirstColumn = styled.div``;
export const SecondColumn = styled.div`
	background: linear-gradient(200.87deg, #7320ab 5.64%, #4a24aa 86.2%);
	border-radius: 20px;
	padding: 53px 42px;
	max-width: 453px;
	@media (max-width: 900.98px) {
		max-width: 100%;
		background: none;
	}
	@media (max-width: 576.98px) {
		padding: 1.3em;
		margin-bottom: 2em;
	}
`;

// card head styling
export const CardHead = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	align-items: center;
	grid-gap: 3em;
	justify-content: space-between;
	p {
		font-family: ${({ theme }) => theme.fonts.Chopsic};
		font-weight: 400;
		font-size: 36px;
		line-height: 41px;
		color: white;
	}
	select {
		background: transparent;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 5px;
		height: 55px;
		padding: 19px 35px;
		font-family: ${({ theme }) => theme.fonts.Chopsic};
		color: white;
		background-position-x: 90%;
		background-position-y: 50%;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg width='16' height='9' viewBox='0 0 16 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath opacity='0.5' d='M1 1L8 8L15 1' stroke='white' stroke-width='0.777778'/%3E%3C/svg%3E%0A");
		background-repeat: no-repeat;
		cursor: pointer;
		&:focus {
			box-shadow: none;
			outline: none;
		}
	}
	@media (max-width: 576.98px) {
		grid-gap: 1em;
		p {
			font-size: 20px;
			line-height: 30px;
		}
	}
`;
//
export const CardBody = styled.div``;
// button styling
export const ActionButton = styled.div<{ inverse?: boolean }>`
	background: #ff7f40;
	box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	width: 100%;
	height: 55px;
	margin-top: 2em;
	font-family: ${({ theme }) => theme.fonts.Chopsic};
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 24px;
	&:hover {
		opacity: 0.9;
	}
	${({ inverse }) =>
		inverse &&
		`
    color: #ff7f40;
    border: 1px solid #ff7f40;
    background: transparent;
    `}
	@media (max-width: 576.98px) {
		height: 40px;
		margin-top: 1em;
		font-size: 16px;
	}
`;

// stake groupings styling
export const StakeGroup = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 5px;
	margin-top: 2em;
	input {
		display: none;
	}
	label {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ff7f40;
		border-radius: 5px;
		font-family: ${({ theme }) => theme.fonts.Chopsic};
		color: white;
		min-width: 121px;
		height: 55px;
		cursor: pointer;
	}
	@media (max-width: 576.98px) {
		label {
			min-width: 68px;
			height: 40px;
		}
	}
`;
// selected stake styling
export const SelectedStake = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	font-family: ${({ theme }) => theme.fonts.Chopsic};
	color: white;
	width: 121px;
	height: 55px;
	background: #ff7f40;
	@media (max-width: 576.98px) {
		height: 40px;
	}
`;

// result wrapper styling
export const ResultWrapper = styled.div`
	margin-top: 2em;
	p,
	a {
		font-family: ${({ theme }) => theme.fonts.Inter};
		font-weight: 700;
		font-size: 13px;
		text-transform: uppercase;
		color: white;
	}
	a {
		font-weight: 400;
		text-decoration-line: underline;
		color: #ff85fd;
		padding-left: 0.5em;
		text-transform: capitalize;
	}
`;
