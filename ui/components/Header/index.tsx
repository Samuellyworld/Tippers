// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//
import {useDispatch} from 'react-redux';
// importing  stylings from styled component
import { ConnectButton, HeaderContainer, SVGLogo, TextLogo, connectButtonDropdown } from './index.styled';
import { AngleDownIcon } from '../../svgs';
// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";
// @ts-ignore
import { UilCopy } from '@iconscout/react-unicons' 

//importing connect wallet functions
import { metaMaskConnection } from '../../../utils/walletConnection';
import { useState } from 'react';
// JSX Component
const Header = (): JSX.Element => {
	
const dispatch= useDispatch();
  // set address no persistion yet
  const [address, setAddress]:any = useState("")
  //copying address
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);
	return (
		<HeaderContainer>
			<TextLogo href="/">
			<img  style={{
				width: "3rem"
			}}
			 src="/assets/svg-logo.svg" alt="" />
			<img src="/assets/text-logo1.svg" alt="" />
			</TextLogo>
			<SVGLogo href="/">
				<img src="/assets/svg-logo.svg" alt="" />
			</SVGLogo>
            <div className='dropdown'>
			 <ConnectButton style={{
				 cursor: address.includes("0x") && "unset"
			 }}>
			    { address.includes("0x") ? 
				<span style={{
                  textTransform: "capitalize",
				  display: "flex",
				  alignItems: "center",
				  justifyContent: "center"
				}}> 
				{address.substring(0,5)}...
				{address.substring(38,42)} 
				<CopyToClipboard text={address}>
				 <span style={{
					margin: "0.2rem 0.1rem 0.1rem",
					cursor: "pointer"
				}}
				onClick={
					() => {
					setHandleCopyAddress(!handleCopyAddress)
					setTimeout(() => {
				      setHandleCopyAddress(false)
					}, 1000);
				}
				}
				>
	     		{
				 	 handleCopyAddress ? 
					  <img src='/assets/copy.png' style={{width:'14px'}} />
					   :
					  <UilCopy  size="15"/>
				
		    	}
				 </span>
					 </CopyToClipboard>
				 
					 </span>
			
				: "Connect Wallet"}  
				{
					!address.includes('0x') &&<AngleDownIcon size='20' />  
				}
			  
			</ConnectButton>
			{ !address.includes("0x")  &&
			 <div className='dropDownConnect__items'>
				<div className='dropDownConnect_item' onClick={() => metaMaskConnection(dispatch, setAddress)}>
					<div className='dropDownConnect_img'>
                      <img src="/assets/metamask.png" alt='metamask logo' />
					</div>
					<p>MetaMask</p>
				</div>
				<div className='dropDownConnect_item'>
					<div className='dropDownConnect_img'>
                      <img src="/assets/walletConnect.png" alt='wallet connect logo' />
					</div>
					<p>WalletConnect</p>
				</div>
			 </div>
			}
			
			
			</div>
		
		</HeaderContainer>
	);
};

export default Header;
