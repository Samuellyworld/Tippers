// importing styled from styled components
import styled from 'styled-components';

// header-container styling
export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
    position: relative;
   
	.dropDownConnect__items {
		right: 0;
		position: absolute;
		flex-direction: column;
		background: purple;
		border-radius: 8px;
		display: none;
		border: 1px;
		width: 223px;

		@media (max-width: 576.98px) {
			width: 200px;
		}
	}
	.dropdown:hover .dropDownConnect__items {
		display: flex;
	  }
	  .dropDownConnect_item {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 10px 10px;
		padding-right: 40px;
		cursor: pointer;

		p {
			color: white;
			font-family: Chopsic, sans-serif !important;
			font-size: 0.7rem;

			@media (max-width: 576.98px) {
			font-size: 0.5rem;
			}
		}
	  }
	  .dropDownConnect_item:last-child {
		border-bottom: none;
	  }
	  .dropDownConnect_img {
		width: 20px;
		height: 20px;
		overflow: hidden;
		display: flex;
		font-size: 14px;
		margin-right: 12px;
		align-items: center;
		justify-content: center;
	  }
	  .dropDownConnect_img img {
		width: 20px;
		height: 20px;
		object-fit: cover;
	  }
`;

// connect wallet items and header styles
export const connectButtonDropdown = styled.div`
 position : relative
`

// button styling
export const ConnectButton = styled.button`
	width: 223px;
	height: 62px;
	margin-bottom: 3px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	color: white;
	background: transparent;
	font-family: ${({ theme }) => theme.fonts.Inter};
	font-weight: 700;
	font-size: 13px;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.4s ease-in-out;
	gap: 0.8rem;
	&:hover {
		background: white;
		color: #4a24aa;
	}
	@media (max-width: 576.98px) {
		width: 148px;
		height: 41.15px;
		font-size: 8.6278px;
	}
`;

// text logo styling
export const TextLogo = styled.a`
	gap: 1rem;
	display: flex;
	@media (max-width: 576.98px) {
		display: none;
	}
`;

// svg logo styling
export const SVGLogo = styled.a`
	@media (min-width: 576.98px) {
		display: none;
	}
`;
