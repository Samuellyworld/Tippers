// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

// declaring global module
declare let window: any;
declare let ethereum: any;

//importing relevant module
import { Dispatch, AnyAction } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import Web3 from "web3";
import { setResult } from "../store/result/result.reducer";

const alchemyKey:string|undefined = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

//contracts ABIS
const coinContractABI= require('../providers/contract-abis/CoinFlip.json');
const diceContractABI = require('../providers/contract-abis/Dice.json');
const wheelContractABI = require('../providers/contract-abis/Wheel.json');

// contracts addresses
const coinContractAddress:string|undefined= process.env.NEXT_PUBLIC_COIN_CONTRACT_ADDRESS;
const diceContractAddress:string|undefined = process.env.NEXT_PUBLIC_DICE_CONTRACT_ADDRESS;
const wheelContractAddress:string|undefined = process.env.NEXT_PUBLIC_WHEEL_CONTRACT_ADDRESS;

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

//wheel spin
export const WheelSpinContract = new web3.eth.Contract(
  wheelContractABI,
  wheelContractAddress
);

// bet coin flip
export const flip = async (choice: number, stake:number, address:string) => {
    //set up transaction parameters
 const transactionParameters = {
    to: coinContractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    value: ethers.utils.parseUnits(stake.toString(), "ether")._hex,
    data: CoinFlipContract.methods.flip(choice).encodeABI(),
    
  };
  
  // sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    }) 
    return {
        status: "successful",
        hash: txHash
    }
  } catch (error:any) {
    return {
      status: error.message,
    };
}
}

// get coinflip request
export const getRequestId= async (choice:any) => {
     return await CoinFlipContract.methods.flip(choice).call()
}

// get coin flip result
export const getResult = async (id : any, dispatch: Dispatch<AnyAction>) => {
  const status = await CoinFlipContract.methods.statuses(id).call()
  dispatch(setResult(status))

}

//DICE INSTANCES- THERE SHOULD BE DRY METHOD BUT I REALLY NEED TO FINISH UP BEFORE DEADLINE
// might write the dry method later if i'm still chanced

// dice rolling
export const roll = async (choice: number, stake:number, address:string) => {
  //set up transaction parameters
const transactionParameters = {
  to: diceContractAddress, // Required except during contract publications.
  from: address, // must match user's active address.
  value: ethers.utils.parseUnits(stake.toString(), "ether")._hex,
  data: DiceRollContract.methods.roll(choice).encodeABI(),
  
};
// sign the transaction
try {
  const txHash = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  }) 
      
  return {
      status: "successful",
      hash: txHash
  }
} catch (error:any) {
  return {
    status: error.message,
  };
}
}

/// get dice request from contracts
export const getDiceRequestId= async (choice:any) => {
  return await DiceRollContract.methods.roll(choice).call()
}

// get result
export const getDiceResult = async (id : any, dispatch: Dispatch<AnyAction>) => {
 const status = await DiceRollContract.methods.statuses(id).call()
 dispatch(setResult(status))
}


///WHEEL INSTANCES
export const spinWheel = async (stake:number, address:string) => {
  //set up transaction parameters
const transactionParameters = {
  to: wheelContractAddress, // Required except during contract publications.
  from: address, // must match user's active address.
  value: ethers.utils.parseUnits(stake.toString(), "ether")._hex,
  data: WheelSpinContract.methods.spin().encodeABI(),
};
// sign the transaction
try {
  const txHash = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  }) 
     
  return {
      status: "successful",
      hash : txHash
  }
} catch (error:any) {
  return {
    status: error.message,
  };
}
}

// wheel id
export const getWheelRequestId= async () => {
  return await WheelSpinContract.methods.spin().call()
}

// get wheel result
export const getWheelResult = async (id : any, dispatch: Dispatch<AnyAction>) => {
 const status = await WheelSpinContract.methods.statuses(id).call()
 dispatch(setResult(status))
}
