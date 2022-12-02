// declaring global module
declare let window: any;
declare let ethereum: any;
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import Web3 from "web3";
import { setResult } from "../store/result/result.reducer";

// require('dotenv').config();
const alchemyKey:string|undefined = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

const contractABI= require('../providers/contract-abis/CoinFlip.json')
const contractAddress:string|undefined= process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

// coinFlip contract
export const CoinFlipContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// bet coin flip
export const flip = async (choice: number) => {
    //set up transaction parameters
 const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: "0xbf0b20ebffb5d87431b5936ee501beff99f91030", // must match user's active address.
    value: web3.utils.toWei("0.000001", "ether"),
    data: CoinFlipContract.methods.flip(choice).encodeABI(),
    
  };
  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    }) 
        console.log(txHash, 'hash')
   
    return {
        status: "successful",
    }
} catch (error:any) {
    return {
      status: "😥 " + error.message,
    };
}
}

export const getRequestId= async (choice:any) => {
     return await CoinFlipContract.methods.flip(choice).call()
}

export const getResult = async (id : any, dispatch: Dispatch<AnyAction>) => {
  console.log(id, 'iddd')
  const status = await CoinFlipContract.methods.statuses(id).call()
  dispatch(setResult(status.didWin))
  console.log(status.didWin, 're')
  console.log(status, id, 'status')
}
