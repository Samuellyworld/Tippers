// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";
import {SafeMath} from "@openzeppelin/contracts/utils/math/SafeMath.sol";
// contract
contract Wheel is VRFV2WrapperConsumerBase {
    // safe math
      using SafeMath for uint256;
    // what user request/bet
    event WheelRequest(uint256 requestId);
    // what the result is
    event WheelResult(uint256 requestId, bool didWin);
    // check each user status
    struct WheelStatus {
        uint stakedAmount;
        uint256 fees;
        uint256 randomWord;
        address player;
        bool didWin;
        bool fulfilled;
    }
    
    // mapping statuses
    mapping(uint256 => WheelStatus) public statuses;


    // link contract address and wrappper address on polygon
    address constant linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    address constant vrfWrapperAddress = 0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693;

    //entry fee [update on function on the frontend later on]
    // uint128 constant entryFees = 0.01 ether;
   
   // gas limit to spare in LINK
    uint32 constant callbackGasLimit = 1_000_000;

   // number of words to get from the LINK wrapper
    uint32 constant numWords = 1;
 
   // number of confirmations or blocks should it wait before sending the confirmation
    uint16 constant requestConfirmations = 3;
    
  // VRF instance
  constructor()
   payable 
   VRFV2WrapperConsumerBase(linkAddress, vrfWrapperAddress) 
   {}
    // dice function
   function spin() 
        external 
        payable 
        returns (uint256) {

     // then request randomness
     uint256 requestId = requestRandomness(
         callbackGasLimit,
         requestConfirmations,
         numWords
     );
     
     // update dicestatus with the requestId
     statuses[requestId] = WheelStatus({
         stakedAmount: msg.value,
         fees : VRF_V2_WRAPPER.calculateRequestPrice(callbackGasLimit),
         randomWord : 0,
         player : msg.sender,
         didWin : false,
         fulfilled : false
     });
      
    // since it is a request emit dic request
    emit WheelRequest(requestId);
    return requestId;
  }

   // we send the request ID to chainlink to get the random words
  function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords)
       internal
       override
   {
    // check fees 
    require(statuses[requestId].fees > 0, "Request not found");

    //update status
    statuses[requestId].fulfilled = true;
    statuses[requestId].randomWord= randomWords[0].mod(6).add(0);

    // set selection with the random words chainlink generate for us

    // if even
    if(randomWords[0].mod(6).add(0) == 0 || randomWords[0].mod(6).add(0) == 4) {
       statuses[requestId].didWin = true;
        payable(statuses[requestId].player).transfer(statuses[requestId].stakedAmount * 1);
     }
    else if(randomWords[0].mod(6).add(0) == 1 || randomWords[0].mod(6).add(0) == 5) {
       statuses[requestId].didWin = true;
        payable(statuses[requestId].player).transfer(statuses[requestId].stakedAmount * 2);
     }
    // pay *2 of staked amount if user win
   else if (randomWords[0].mod(6).add(0) == 3) {
        statuses[requestId].didWin = true;
        payable(statuses[requestId].player).transfer(statuses[requestId].stakedAmount * 1/2);
    }
    emit WheelResult(requestId, statuses[requestId].didWin);

   }

// get each user status
   function getStatus(uint256 requestId)
    public
    view
    returns (WheelStatus memory)
    {
     return statuses[requestId];
    }

  // send matic
    receive() external payable {}
}