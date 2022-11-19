// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing styled from styled components
import styled from 'styled-components';

// spin wrapper styles
export const SpinWrapper = styled.div``;

// wheel wrapper styles
export const WheelWrapper = styled.div`
	width: 100%;
	.wheel-container {
		position: relative;
		svg {
			height: 450px;
			width: 455px;
			position: absolute;
			left: -24px;
			top: -58px;
		}
	}
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
		}
		.wheel-container {
			& {
				height: calc(200px + 2 * 5px);
				width: calc(200px + 2 * 5px);
			}
			.wheel {
				height: 200px;
				width: 200px;
			}

			svg {
				height: 350px;
				width: 300px;
				left: -11px;
				top: -60px;
			}
		}
	}
`;

// wheel element styles
export const WheelElement = styled.div<{ items: number; selectedItem: string }>`
	--nb-item: ${({ items }) => items};
	--selected-item: ${({ selectedItem }) => selectedItem};
	font-size: 25px;
	font-weight: 400;
`;

// wheel item styles
export const WheelItem = styled.div<{ index: number; item: string }>`
	--item-nb: ${({ index }) => index};
	font-family: ${({ theme }) => theme.fonts.Chopsic} !important;

	span {
		font-family: 'Inter' !important;
		font-weight: 700 !important;
	}
	${({ item }) =>
		item === '1' &&
		`
        color: white !important;
        &:before{
            border-right-color: purple !important;
        }
    `}
	${({ item }) =>
		item === '2' &&
		`
        &:before{

            border-right-color: white !important;
        }
    `}
	${({ item }) =>
		item === '0' &&
		`
          &:before{
            
              border-right-color: orange !important;
        }
    `}
	${({ item }) =>
		item === '0.5' &&
		`
          &:before{
            
              border-right-color: yellow !important;
        }
    `}
	@media (max-width: 576.98px) {
		font-size: 16px;
	}
`;
