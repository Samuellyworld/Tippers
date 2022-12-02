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


const coinContractABI= require('../providers/contract-abis/CoinFlip.json');
const diceContractABI = require('../providers/contract-abis/Dice.json');
const coinContractAddress:string|undefined= process.env.NEXT_PUBLIC_COIN_CONTRACT_ADDRESS;
const diceContractAddress:string|undefined = process.env.NEXT_PUBLIC_DICE_CONTRACT_ADDRESS;

// coinFlip contract
export const CoinFlipContract = new web3.eth.Contract(
  coinContractABI,
  coinContractAddress
);

//dice toss contract
export const DiceRollContract = new web3.eth.Contract(
  diceContractABI,
  diceContractAddress
);

// bet coin flip
export const flip = async (choice: number, stake:number, address:string) => {
    //set up transaction parameters
    console.log(stake, 'stake')
 const transactionParameters = {
    to: coinContractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    value: stake.toString(),
    data: CoinFlipContract.methods.flip(choice).encodeABI(),
    
  };
  // sign the transaction
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

//DICE INSTANCES- THERE SHOULD BE DRY METHOD BUT I REALLY NEED TO FINISH UP BEFORE DEADLINE
// might write the dry method later if i'm still chanced

export const roll = async (choice: number, stake:number, address:string) => {
  //set up transaction parameters
  console.log(stake, 'stake')
const transactionParameters = {
  to: diceContractAddress, // Required except during contract publications.
  from: address, // must match user's active address.
  value: web3.utils.toWei('0.0000001', 'ether'),
  data: DiceRollContract.methods.roll(choice).encodeABI(),
  
};
// sign the transaction
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


export const getDiceRequestId= async (choice:any) => {
  return await DiceRollContract.methods.roll(choice).call()
}

export const getDiceResult = async (id : any, dispatch: Dispatch<AnyAction>) => {
console.log(id, 'iddd')
const status = await DiceRollContract.methods.statuses(id).call()
// dispatch(setResult(status.didWin))
console.log(status.didWin, 're')
console.log(status, id, 'status')
}
