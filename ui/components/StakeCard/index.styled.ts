// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing styled from stylwed-components
import styled from 'styled-components';

// card head stylings
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
	button {
        display: flex;
		flex-direction: row;
         align-items: center;
		 justify-content: center;
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
		background-repeat: no-repeat;
		&:focus {
			box-shadow: none;
			outline: none;
		}
		img {
			width: 100%;
			animation: rotation 3.5s infinite linear; 
	 
		}
	}
	@media (max-width: 576.98px) {
		grid-gap: 0em;
		p {
			font-size: 20px;
			line-height: 30px;
		}
	}
	@media (max-width: 900px) and (min-width: 500px) {
	img {
      width: 3rem !important
	}
	}
	@keyframes rotation {
		100%{ transform:rotatey(360deg); }
	  }
`;
// card body styles
export const CardBody = styled.div``;
// stake group styles
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

//  selected stake 
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
	img {
		animation: rotation 4s infinite linear; 
	}
	@keyframes rotation {
		100%{ transform:rotatey(360deg); }
	  }
`;

// action button styles
export const ActionButton = styled.div<{ inverse?: boolean; spin?: boolean; onClick: any; disabled: any} >`
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

	${({ spin }) =>
		spin &&
		`
		    color: gray;
    border: 1px solid gray;
    background: transparent;
	`}
	${({ disabled}) =>
     disabled &&
	`
		color: gray;
border: 1px solid gray;
background: transparent;
`}
	@media (max-width: 576.98px) {
		height: 40px;
		margin-top: 1em;
		font-size: 16px;
	}
`;

// outcome wrapper styles
export const OutcomeWrapper = styled.div`
	margin-top: 2em;
	p {
		font-family: ${({ theme }) => theme.fonts.Chopsic};
		font-weight: 400;
		font-size: 36px;
		line-height: 41px;
		color: white;
	}
	@media (max-width: 576.98px) {
		p {
			font-size: 20px;
			line-height: 30px;
		}
	}
`;

// input group styles
export const InputGroup = styled.div`
	input {
		display: none;
	}
	label {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: ${({ theme }) => theme.fonts.Chopsic};
		color: white;
		height: 55px;
		border: 1px solid #ff7f40;
		border-radius: 5px;
		margin-top: 1em;
		cursor: pointer;
	}
`;

// result outcome styles
export const ResultOutcome = styled.div`
	margin-top: 2em;
	p {
		font-family: ${({ theme }) => theme.fonts.Chopsic};
	}
	p:nth-of-type(1) {
		font-size: 26px;
		@media (max-width: 576.98px) {
			font-size: 20px;
		}
	}
	p:nth-of-type(2) {
		font-size: 14px;
		margin-top: 1em;
	}
`;
