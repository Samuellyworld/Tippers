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


  // check if polygon network then request
  if(typeof window !== "undefined" && typeof window.ethereum !== "undefined" && window.ethereum.chainId !== "0x13881") {
    try {
        dispatch(alert("switching to polygon"))
        ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: "0x13881"}],
        }).then(() => {
            dispatch(alert("Connecting wallet."))
            ethereum.request({method: "eth_requestAccounts"}).then((accounts: any[]) => {
            
                // 
                //store and alert
                dispatch(setUserAddress(accounts[0]))
                localStorage.setItem("wallet-type", "metamask");
                dispatch(alert('Wallet Connected'));

                setTimeout(() => {
                    dispatch(close(""))
                  }, 2000)
                // Get network ID
                
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
  } else if( typeof window !== "undefined" && typeof window.ethereum !== "undefined" && window.ethereum.chainId === "0x13881" ) {
      // user alert
  dispatch(alert("connecting to metamask"))
    ethereum.request({method: "eth_requestAccounts"}).then((accounts: any[]) => {

      
        dispatch(setUserAddress(accounts[0]))
        localStorage.setItem("wallet-type", "metamask");
        dispatch(alert('Wallet Connected'));
        setTimeout(() => {
            dispatch(close(""))
          }, 2000)
        // Get network ID
        
      }).catch((err: any) => { 
          console.log(err) 
          dispatch(alert('Error connecting..'));
          setTimeout(() => {
              dispatch(close(""))
            }, 2000)
        })
  }
   else if(typeof window.ethereum == "undefined" && typeof window.ethereum == "undefined"){
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

export const walletDisconnect = (dispatch: (arg0: { payload: string; type: `${string}/close` | `${string}/alert` | `${string}/setUserAddress`;  }) => void) => {
  localStorage.clear()
  dispatch(alert('wallet disconnected'))
  dispatch(setUserAddress(''))
  setTimeout(() => {
    dispatch(close(""))
  }, 2000) 

}