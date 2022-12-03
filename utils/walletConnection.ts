// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// importing relevant module
import web3 from 'web3';
import {alert, close} from '../store/alert/alert.modal.reducer';
import {setUserAddress} from '../store/address/address.reducer';
// declaring global module
declare let window: any;
declare let ethereum: any;

// interface types
interface connectwalletTypes {
    metaMaskConnection: (dispatch: any) => void
}

// metamask connection
export const metaMaskConnection:connectwalletTypes["metaMaskConnection"] = (dispatch) => {
  // user alert
  dispatch(alert("connecting to metamask"))

  // check if polygon network then request
  if(ethereum.chainId !== "0x13881") {
    try {
        dispatch(alert("switching to polygon"))
        ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: "0x13881"}],
        }).then(() => {
            dispatch(alert("Connecting wallet."))
            ethereum.request({method: "eth_requestAccounts"}).then((accounts: any[]) => {
            
                // Log public address of user
                console.log(accounts[0])
                //store and alert
                dispatch(setUserAddress(accounts[0]))
                dispatch(alert('Wallet Connected'));

                setTimeout(() => {
                    dispatch(close(""))
                  }, 2000)
                // Get network ID
                let n = ethereum.chainId // 
                console.log(n, "chainId")  ;
              }).catch((err: any) => { 
                  console.log(err) 
                  dispatch(alert('Error connecting'));
                  setTimeout(() => {
                      dispatch(close(""))
                    }, 2000)
                }) 
        }).catch((err: any) => { 
            console.log(err) 
            dispatch(alert('Error connecting'));
            setTimeout(() => {
                dispatch(close(""))
              }, 2000)
          }) 
        
         
      }
      catch(err: any) { 
        console.log(err) 
        dispatch(alert('Error connecting'));
        setTimeout(() => {
            dispatch(close(""))
          }, 2000)
      }
  } else if(ethereum.chainId === "0x13881") {
    ethereum.request({method: "eth_requestAccounts"}).then((accounts: any[]) => {

        // Log public address of user
        console.log(accounts[0])
        dispatch(setUserAddress(accounts[0]))
        dispatch(alert('Wallet Connected'));
        setTimeout(() => {
            dispatch(close(""))
          }, 2000)
        // Get network ID
        let n = ethereum.chainId // 
        console.log(n, "chainId")  ;
      }).catch((err: any) => { 
          console.log(err) 
          dispatch(alert('Error connecting..'));
          setTimeout(() => {
              dispatch(close(""))
            }, 2000)
        })
  }
   else if(!window.ethereum){
     //alert user
    dispatch(alert('Install Metamask'));
    setTimeout(() => {
        dispatch(close(""))
      }, 2000)
    } else {
      //alert
    dispatch(alert('Error connecting..'));
    setTimeout(() => {
        dispatch(close(""))
      }, 2000) 
   }


}

export const walletConnect = () => {

}