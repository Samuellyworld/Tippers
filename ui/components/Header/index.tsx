// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//// declaring global module
declare let window: any;
import {useDispatch, useSelector} from 'react-redux';
// importing  stylings from styled component
import { ConnectButton, HeaderContainer, SVGLogo, TextLogo, connectButtonDropdown } from './index.styled';
import { AngleDownIcon } from '../../svgs';
// @ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";
// @ts-ignore
import { UilCopy } from '@iconscout/react-unicons' 

//importing connect wallet functions
import { metaMaskConnection, walletDisconnect } from '../../../utils/walletConnection';
import { useEffect, useState } from 'react';
import { RootState } from '../../../store/store';
import { setUserAddress } from '../../../store/address/address.reducer';
// JSX Component
const Header = (): JSX.Element => {
	
const dispatch= useDispatch();
  // set address no persistion yet
//   const [address, setAddress]:any = useState("")
const address = useSelector((state:RootState) => state.address.address)
  //copying address
  const [handleCopyAddress, setHandleCopyAddress] = useState(false);

  useEffect(() => {
	if (window.ethereum) {
		window.ethereum.on("accountsChanged", (accounts: string | any[]) => {
		  if (accounts.length > 0) {
			  dispatch(setUserAddress(accounts[0]))
			  localStorage.setItem("wallet-type", "metamask");
		  }
		}
		)}
}, [])

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
				 cursor: address && "unset"
			  }}>
			    { address ? 
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
					!address &&<AngleDownIcon size='20' />  
				}
			  
			</ConnectButton>
			{ !address ?
			 <div className='dropDownConnect__items'>
				<div className='dropDownConnect_item' onClick={() => metaMaskConnection(dispatch)}>
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
			:
				address &&  
				<div className='dropDownConnect__items'>
				<div className='dropDownConnect_item' onClick={() => walletDisconnect(dispatch)} style={{
					background: 'rgba(170, 74, 68, 0.6)',
					borderRadius: "3px"
				}}>
					<div className='dropDownConnect_img'>
                      <img src="/assets/cancel.png" alt='disconnect logo' />
					</div>
					<p style={{
						fontSize: "10px"
					}}
					className='disconnect'>Disconnect wallet</p>
				</div>
				</div>
			}
			
			</div>
		
		</HeaderContainer>
	);
};

export default Header;
